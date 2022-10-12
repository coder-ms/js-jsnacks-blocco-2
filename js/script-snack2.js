
/*Array di nomi e cognomi per creare invitati*/
var namePerson = ["Charles", "Nick", "Daisy", "Tom", "Jordan", "Myrtle", "George", "Meye", "Walter",
 "Henry", "Catherine", "August", "James", "Fred", "Laura", "William","Elizabth"];
var surnamePerson = ["Phillis", "Carraway", "Maguire", "Thompson", "Clarke", "Buchanan", "Fisher",
 "Lewis", "Weiss", "Falk", "Mulvany", "Landsbury", "Stepson", "Simpson", "Mulligan", "Smith","Jackson"];

/*Array da riempire con gli invitati creati*/
var listHost = [];

console.log(namePerson);
console.log(surnamePerson);

/*Collegamento bottone genera(HTML) alla funzione JS*/
const bottone = document.getElementById('btnGenerate');
bottone.addEventListener('click', getPartyHost);

function getPartyHost() {
    /*Creo randomicamente gli invitati*/
    var completeName = namePerson[Math.floor(Math.random() * namePerson.length)] + ' ' + surnamePerson[Math.floor(Math.random() * surnamePerson.length)];

    listHost = document.querySelector('.list').value;
    document.querySelector('.nameList').innerHTML = '';
    if(listHost > 10){
        document.querySelector('.nameList').innerHTML = 'ONLY 10 PEOPLE CAN STAY AT THE PARTY';
    }
    else{
        for(let i = 0; i < listHost; i++){
            document.querySelector('.nameList').innerHTML += completeName + '<br>';
        }
    }
    listHost.push(completeName);
}