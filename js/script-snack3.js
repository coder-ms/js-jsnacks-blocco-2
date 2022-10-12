/*Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari*/
const button = document.getElementById('button');

const array1 = [];
function sumEven() {
    let number = document.getElementById('content').value;
    array1.push(number);
    console.log(number);
    document.getElementById('content').value = "";
    if(array1.length == 10){
        document.getElementById('tracker').innerHTML = "";
        document.getElementById('btn').innerHTML = "";
        document.getElementById('request').innerHTML = "";
    }
    let sum= 0;
    for(let i=0; i < array1.length; i++)
    {
        /* numero dispari bitwise AND operator (&) e posizione nell'array */
        /* restituisce un 1 in ogni posizione di bit per cui i bit corrispondenti di entrambi gli operandi sono 1s */
        if(0x01 & i){
            /*DEBUG: stampo posizioni dispari nell'array*/
            console.log(i);

            /* somma numeri in posizione dispari in un array */
            sum += parseInt(array1[i]);
        }
    }
    document.getElementById('sumElement').innerHTML = "Risulato della somma: " + sum;

}
button.addEventListener('click', sumEven);
console.log(array1);