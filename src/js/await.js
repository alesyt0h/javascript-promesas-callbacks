import { buscarHeroeAsync, buscarHeroeProTip } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];
const heroesPromesas = heroesIds.map( id => buscarHeroeProTip(id));

// export const obtenerHeroesArr = async() => {

//     const heroesArr = [];

//     for(const id of heroesIds){
//         // buscarHeroeAsync(id).then( heroe => heroesArr.push(heroe));
//         const heroe = await buscarHeroeAsync(id)
//         heroesArr.push(heroe);
//     }

//     return heroesArr;

// };

export const obtenerHeroesArrProTip = async() => {

    // Forma simplificada de hacerlo y sinceramente creo que es mejor, mas resumido, menos instrucciones y mas al grano
    return await Promise.all(heroesIds.map( id => buscarHeroeProTip(id) ));

    // const heroesArr = [];

    // for(const id of heroesIds){
    //     heroesArr.push(buscarHeroeProTip(id));
    // }

    // // Es recomendable no hacer un await dentro de un ciclo for, seria mejor hacerlo fuera del await
    // return await Promise.all(heroesArr);

};

export const obtenerHeroeAwait = async(id) => {

    try {
        const heroe = await buscarHeroeAsync(id);
    
        return heroe;
    } catch (error) {
        console.log('CATCH!!!!');
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        };
        throw error;
    }


}

export const heroesCiclo = async() => {
    console.time('HeroesCiclo');

    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(heroe => console.log(heroe))

    for await(const heroe of heroesPromesas) {
        console.log(heroe);
    }

    // No es el mismo resultado, con esta combinación la ejecución del programa seguiria normalmente
    // heroesPromesas.forEach( async(p) => console.log(await p))



    console.timeEnd('HeroesCiclo');
};

export const heroeIfAwait = async(id) => {
    
    if ( (await buscarHeroeAsync(id)).nombre === 'Ironman'){
        console.log('Es el mejor de todos')
    } else {
        console.log('Nahh')
    }
}