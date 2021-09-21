import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe as buscarHeroePromise } from './js/promesas';
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'spider';

// buscarHeroeCallback( heroeId1, (err, heroe1) => {
//     if (err) { 
//         console.error(err); 
//     } else {
//         console.info(heroe1)
//     }
// });


// CALLBACK HELL
//
// buscarHeroeCallback( heroeId1, (err, heroe1) => {
//     if (err) { return console.error(err); }
//     buscarHeroeCallback( heroeId2, (err, heroe2) => {
//         if (err) { return console.error(err); }
//         buscarHeroeCallback( heroeId2, (err, heroe3) => {
//             if (err) { return console.error(err); } 
//             console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`)
//         });
//     });
// });


// PROMISE HELL
//
// buscarHeroePromise(heroeId1).then(heroe1 => {
//     // console.log(`Enviando a ${heroe.nombre} a la misión`);
//     buscarHeroePromise(heroeId2).then(heroe2 => {
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`)
//     })
// })


Promise.all([buscarHeroePromise(heroeId1), buscarHeroePromise(heroeId2)])
       .then(([heroe1, heroe2]) => {
            // console.log(`Enviando a ${heroes[0].nombre} y ${heroes[1].nombre} a la mision`); // Se podria hacer asi tambien, pero podriamos usar la desestructuración para que fuese mas claro
            console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`)
}).catch( err => {
    alert(err);
}).finally( () => {
    console.log('Se termino el promise.all');
});

console.log('Fin de programa');