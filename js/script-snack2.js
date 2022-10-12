/*Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome. */

/*Array di nomi e cognomi per creare invitati*/
var namePerson = ["Charles", "Nick", "Daisy", "Tom", "Jordan", "Myrtle", "George", "Meye", "Walter",
 "Henry", "Catherine", "August", "James", "Fred", "Laura", "William","Elizabth"];
var surnamePerson = ["Phillis", "Carraway", "Maguire", "Thompson", "Clarke", "Buchanan", "Fisher",
 "Lewis", "Weiss", "Falk", "Mulvany", "Landsbury", "Stepson", "Simpson", "Mulligan", "Smith","Jackson"];

/*Array da riempire con gli invitati creati*/
var partyHost = [];

console.log(namePerson);
console.log(surnamePerson);

/*Collegamento bottone genera(HTML) alla funzione JS*/
const bottone = document.getElementById('btnGenerate');


/*La funzione mi aiuta a scegliere gli invitati */
function getPartyHost() {
    var listHost = document.querySelector('.list').value;
    document.querySelector('.nameList').innerHTML = '';

    if(listHost > 10){
        document.querySelector('.nameList').innerHTML = 'ONLY 10 PEOPLE CAN STAY AT THE PARTY';
    }
    else{
        for(let i = 0; i < listHost; i++){
            /*Creo randomicamente gli invitati e tramite il query selector e l'innerhtml me li metto nell'html*/
            var completeName = namePerson[Math.floor(Math.random() * namePerson.length)] + ' ' + surnamePerson[Math.floor(Math.random() * surnamePerson.length)];
            document.querySelector('.nameList').innerHTML += completeName + '<br>';
        }
    }
}
bottone.addEventListener('click', getPartyHost);