const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reacción alérgica a las picaduras de araña'
    },
}

// Callback retorna un heroe
export const buscarHeroe = (id, callback) => {

    const heroe = heroes[id]; // Lo mismo que heroes.capi, pero al no saber cual es el id que mandaria el usuario, lo ponemos entre llaves

    if (heroe) {
        callback(null, heroe);
    } else {
        // Un Error
        callback(`No existe un héroe con el id ${id}`);
    }

    // callback(heroe);

}