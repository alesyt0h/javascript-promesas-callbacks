import './styles.css';
import { promesaLenta, promesaMedia, promesaRapida, buscarHeroe, buscarHeroeAsync } from './js/promesas';
import { obtenerHeroesArr, obtenerHeroesArrProTip, obtenerHeroeAwait, heroesCiclo, heroeIfAwait } from './js/await';


// RACE
//
// promesaLenta.then( console.log );
// promesaMedia.then( mensaje => console.log(mensaje) );
// promesaRapida.then( mensaje => {
//     console.log(mensaje)
// });

// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//        .then(console.log)
//        .catch(console.warn)


// ASYNC 
//
// buscarHeroe('iron2')
//     .then( heroe => console.log(heroe))
//     .catch(console.warn);

// buscarHeroeAsync('capi2')
//     .then(console.log)
//     .catch(console.warn)



// AWAIT
//
// obtenerHeroesArr().then(console.table)
// console.time('await');
// obtenerHeroesArrProTip().then( heroes => {
//     console.table(heroes);
//     console.timeEnd('await');
// });

// console.time('await')
// obtenerHeroeAwait('capi2')
//         .then( heroe => {
//             console.log(heroe)

//             console.timeEnd('await')
//         }).catch ( err => console.log('que faggot',err))


//

heroesCiclo();

heroeIfAwait('iron');