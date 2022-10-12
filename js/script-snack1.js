/* Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari */

const button = document.getElementById('button');
button.addEventListener('click', sumEven);
const array1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
function sumEven(){
    let numberChosen = document.getElementById('content');
    let sum=0 
    for(i=1;i<=100;i++)
    {
      if(i%2==0)
      {
        sum=sum+i
      }
    }
    console.log(sum)
}

