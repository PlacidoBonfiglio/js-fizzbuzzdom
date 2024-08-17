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

const fizzBuzz = 'FizzBuzz';

const fizz = 'Fizz';

const buzz = 'Buzz';

for (let i = 1; i <= 100; i++) {
    numbers += i;
    
    //Controllo tramite IF se i numeri sono multipli di 3 / 5 o entrambi e stampo in console
    if (i % 15 === 0)
        console.log('FizzBuzz');
    else if (i % 3 === 0)
        console.log('Fizz');
    else if (i % 5 === 0)
        console.log('Buzz');
    else
        console.log(i);
}

target.innerHTML = numbers;

