console.log('JS OK');

// Prelevare file di ineteresse dal DOM
// usare FOR per stampare in console numeri da 1 a 100
// Controllare tramite IF se i numeri siano multipli di 3 / di 5 / di 3 e 5
// Dare classi diverse a questi elementi per poi modificarli con CSS
// Stampare nel DOM

//FASE PREPARATORIA
//Prendo il file dal DOM
const target = document.getElementById('target');

// ELABORAZIONE
let numbers = '';

for (let i = 1; i <= 100; i++) {
    console.log(`${i}`);
    //numbers += `<div class="num">${i}</div`;
}

