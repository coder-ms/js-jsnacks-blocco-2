/*Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo. */



let userNumber = document.getElementById('userNumber');
let result = document.getElementById('result');
let button = document.querySelector('button');

/*La seguente funzione mi permette di verificare se il numero scritto sia pari o dispari */
function printOddNumbers(){
    let moduloOperation = userNumber.value;
    let oddNumber = moduloOperation % 2;
    /*Se il numero è pari si avvisa su output*/
    if(oddNumber == 0){
        // console.log('Odd number');
        result.innerHTML = 'Odd number';
    }
    /*Se il numero è dispari, si stampa quello successivo(qui entra in gioco il ++)*/
    else if(oddNumber == 1){
        //console.log('Even Number')
        oddNumber = moduloOperation;
        let evenNumber = oddNumber++;
        
        // console.log(oddNumber);
        result.innerHTML = oddNumber;
    }
    /* In caso che l'ultente abbia inserito fosse Nan(Not a number) o un numero decimale(float) */
    else if(oddNumber == NaN){
        // console.log("That's an even number");
        result.innerHTML = "That's a Nan or a float number";
    }  
}
button.addEventListener('click', printOddNumbers);