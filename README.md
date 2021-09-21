# Promesas y Callbacks


* **Throw**: Retorna un error. `Throw 'ID no encontrado'`
* **Throw Error()**: Retorna un error con información detallada, como el número de linea donde se ejecuto y más detalles. `Throw Error('ID no encontrado')`  
* **Callbacks**: - Lo primero que se suele devolver en un callback, es el error, null en este caso no seria error
```javascript
// Function
export const buscarHeroe = (id, callback) => {

    if (heroe) {
        callback(null, heroe);
    } else {
        callback('Error');
    }
}

// Callback Caller
buscarHeroe( heroeId1, (err, heroe1) => {
    if (err) { 
        console.error(err); 
    } else {
        console.info(heroe1)
    }
});
```
* Callback Hell és la indentación repetida de Callbacks dentro de Callbacks, haciéndolo dificultoso de leer y mantener
* **Promesas**: Todas las funciones que resuelvan promesas deben de ser "llamadas" usando el `then`. 
* **new Promise()**: Creación de promesas con `new Promise()` - Los argumentos que reciba una promesa, son el resolve (**res**) y el reject (**rej**): 
```javascript
return new Promise((resolve, reject) => {
    if (heroe) {
        resolve(heroe);
    } else {
        reject(`No existe un héroe con el id ${id}`);
    }
});
```
* **Promise.all**: Un método que espera que todas las promesas hayan sido resueltas para continuar con el flujo del programa. `Promise.all()` debe de recibir un array de promesas para ejecutarlas y para acceder a lo que resuelven dichas promesas, se pueden acceder como [0],[1].. dependiendo de la posición que se estan mandando como argumentos. **Desestructuración:** se puede desestructurar el `then` entre brackets `[ ]`
```javascript
Promise.all([buscarHeroePromise(heroeId1), buscarHeroePromise(heroeId2)])
       .then(([heroe1, heroe2]) => {
            console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre}`)
        })
```
* **Promise.race**: Resuelve la promesa más rapida e ignora el resto, aunque estas dieran error. Recibe como argumento un array de promesas.
* **Catch**: Nos permite atrapar el error después del `then`
* **Finally**: Es la instrucción que se ejecuta despues del `then` y/o `catch`. Se ejecuta al final de las promesas.
* **Async**: Las funciones **async** son **Asíncronas**. Nos evitan el uso de `new Promise()` ya que al marcar una función como async, se puede efectuar un `return` normal y corriente que devolverá una promesa por defecto.
* **Await**: El uso de **await** permite esperar al flujo de esa función asíncrona, hasta que la instrucción/promesa con el **await** no se haya resuelto, la función no continuará. Solo disponible dentro de funciones marcadas como **async**. Ejemplos de uso:
```javascript
return await Promise...

const heroe = await buscarHeroeAsync(id)

for await(const heroe of heroesPromesas)

heroesPromesas.forEach( async(promise) => console.log(await promise)) **

if ((await buscarHeroe(id)).length === 0) { return }
```
** En esta instrucción el await no funcionaria como se espera, la ejecución del programa seguiria y no se esperaria a que el await resuelva la promesa.
* **If await**: Se puede usar await dentro de un If. `if (await promise) ...`
* **For await**: Dentro de un ciclo for seria `for await (...)`
