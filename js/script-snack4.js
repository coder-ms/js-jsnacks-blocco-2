/*Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. */

const frutta = ["mela", "pesca", "pesca", "arancia", "kiwi"];
const topping = ["cioccolato", "fragola", "lampone"];

console.log(frutta, topping);


/*SOLUZIONE 1 */
/*se l'array frutta contiene più elementi di topping */

if(frutta.length > topping.length){
    const addElement = frutta.length - topping.length;
    console.log(addElement);
    for(let i = 0; i < addElement; i++){
        topping.push(i);
    }
    console.log(topping);
}
else if(frutta.length < topping.length){
    const addElement = topping.length - frutta.length;
    console.log(addElement);
    for(let i = 0; i < addElement; i++){
        frutta.push(i);
    }
    console.log(frutta);
}
else{
    console.log("i due array sono di egual lunghezza");
}


/*SOLUZIONE 2*/
const arrLen = Math.max();