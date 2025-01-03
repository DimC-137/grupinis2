// Varžybų mygtukai

const Baigt = document.querySelector('#end');
const Pradet = document.querySelector('#start');

// Taškų mygtukai

const Kom1Task1 = document.querySelector('#pr1');
const Kom1Task2 = document.querySelector('#pr2');
const Kom1Task3 = document.querySelector('#pr3');
const Kom2Task1 = document.querySelector('#pr4');
const Kom2Task2 = document.querySelector('#pr5');
const Kom2Task3 = document.querySelector('#pr6');

// Pražangų mygtukai

const Kom1Zaid1Praz = document.querySelector('#pl1');
const Kom1Zaid2Praz = document.querySelector('#pl2');
const Kom1Zaid3Praz = document.querySelector('#pl3');
const Kom2Zaid1Praz = document.querySelector('#pl4');
const Kom2Zaid2Praz = document.querySelector('#pl5');
const Kom2Zaid3Praz = document.querySelector('#pl6');

// Pražangų kiekis 

const Kom1Baud1Kiekis = document.querySelector('#prk1 span');
const Kom1Baud2Kiekis = document.querySelector('#prk2 span');
const Kom1Baud3Kiekis = document.querySelector('#prk3 span');
const Kom2Baud1Kiekis = document.querySelector('#prk4 span');
const Kom2Baud2Kiekis = document.querySelector('#prk5 span');
const Kom2Baud3Kiekis = document.querySelector('#prk6 span');

// Taškų kiekis

const kom1task = document.querySelector('#tm1tsk');
const kom2task = document.querySelector('#tm2tsk');

// Įrašai

const irasas = document.querySelector('#notes');

// Pražangų renderis

const prazanga1 = _ => {
    Kom1Baud1Kiekis.innerText = parseInt(Kom1Baud1Kiekis.innerText) + 1;
    irasas.innerHTML += `1 komandos, 1 žaidėjas gavo ${Kom1Baud1Kiekis.innerText} pražangą! ${Date(Date.now()).match(/\d\d:\d\d:\d\d/).toString()}<br>`;
}
const prazanga2 = _ => {
    Kom1Baud2Kiekis.innerText = parseInt(Kom1Baud2Kiekis.innerText) + 1;
    irasas.innerHTML += `1 komandos, 2 žaidėjas gavo ${Kom1Baud2Kiekis.innerText} pražangą! ${Date(Date.now()).match(/\d\d:\d\d:\d\d/).toString()}<br>`;
}
const prazanga3 = _ => {
    Kom1Baud3Kiekis.innerText = parseInt(Kom1Baud3Kiekis.innerText) + 1;
    irasas.innerHTML += `1 komandos, 3 žaidėjas gavo ${Kom1Baud3Kiekis.innerText} pražangą! ${Date(Date.now()).match(/\d\d:\d\d:\d\d/).toString()}<br>`;
}
const prazanga4 = _ => {
    Kom2Baud1Kiekis.innerText = parseInt(Kom2Baud1Kiekis.innerText) + 1;
    irasas.innerHTML += `2 komandos, 1 žaidėjas gavo ${Kom2Baud1Kiekis.innerText} pražangą! ${Date(Date.now()).match(/\d\d:\d\d:\d\d/).toString()}<br>`;
}
const prazanga5 = _ => {
    Kom2Baud2Kiekis.innerText = parseInt(Kom2Baud2Kiekis.innerText) + 1;
    irasas.innerHTML += `2 komandos, 2 žaidėjas gavo ${Kom2Baud2Kiekis.innerText} pražangą! ${Date(Date.now()).match(/\d\d:\d\d:\d\d/).toString()}<br>`;
}
const prazanga6 = _ => {
    Kom2Baud3Kiekis.innerText = parseInt(Kom2Baud3Kiekis.innerText) + 1;
    irasas.innerHTML += `2 komandos, 3 žaidėjas gavo ${Kom2Baud3Kiekis.innerText} pražangą! ${Date(Date.now()).match(/\d\d:\d\d:\d\d/).toString()}<br>`;
}

// Taškų renderis 

let komanda1 = 0;
let komanda2 = 0;

const K1taskai1 = _ => {
    komanda1 = komanda1 + parseInt(Kom1Task1.value);
    irasas.innerHTML += `1 komanda pelnė ${Kom1Task1.value} tašką ir padidina rezultatą iki ${komanda1}! ${Date(Date.now()).match(/\d\d:\d\d:\d\d/).toString()}<br>`;
    kom1task.innerText = komanda1;
    kom2task.innerText = komanda2;
}
const K1taskai2 = _ => {
    komanda1 = komanda1 + parseInt(Kom1Task2.value);
    irasas.innerHTML += `1 komanda pelnė ${Kom1Task1.value} taškus ir padidina rezultatą iki ${komanda1}! ${Date(Date.now()).match(/\d\d:\d\d:\d\d/).toString()}<br>`;
    kom1task.innerText = komanda1;
    kom2task.innerText = komanda2;
}
const K1taskai3 = _ => {
    komanda1 = komanda1 + parseInt(Kom1Task3.value);
    irasas.innerHTML += `1 komanda pelnė ${Kom1Task1.value} taškus ir padidina rezultatą iki ${komanda1}! ${Date(Date.now()).match(/\d\d:\d\d:\d\d/).toString()}<br>`;
    kom1task.innerText = komanda1;
    kom2task.innerText = komanda2;
}
const K2taskai1 = _ => {
    komanda2 = komanda2 + parseInt(Kom2Task1.value);
    irasas.innerHTML += `2 komanda pelnė ${Kom2Task1.value} tašką ir padidina rezultatą iki ${komanda2}! ${Date(Date.now()).match(/\d\d:\d\d:\d\d/).toString()}<br>`;
    kom1task.innerText = komanda1;
    kom2task.innerText = komanda2;
}
const K2taskai2 = _ => {
    komanda2 = komanda2 + parseInt(Kom2Task2.value);
    irasas.innerHTML += `2 komanda pelnė ${Kom2Task2.value} taškus ir padidina rezultatą iki ${komanda2}! ${Date(Date.now()).match(/\d\d:\d\d:\d\d/).toString()}<br>`;
    kom1task.innerText = komanda1;
    kom2task.innerText = komanda2;
}
const K2taskai3 = _ => {
    komanda2 = komanda2 + parseInt(Kom2Task3.value);
    irasas.innerHTML += `2 komanda pelnė ${Kom2Task3.value} taškus ir padidina rezultatą iki ${komanda2}! ${Date(Date.now()).match(/\d\d:\d\d:\d\d/).toString()}<br>`;
    kom1task.innerText = komanda1;
    kom2task.innerText = komanda2;
}

// Kėlinių renderis

let keliniuKiekis = 0;

const kelinioPabaiga = _ => {
    keliniuKiekis = parseInt(keliniuKiekis) + 1;
    irasas.innerHTML += `Baigėsi ${keliniuKiekis} kėlinys<br>`;
    if (keliniuKiekis == 3) {
        Baigt.innerText = 'Baigti varžybas';
    }
    if (keliniuKiekis == 4) {
        irasas.innerHTML += `Varžybos baigėsi!<br>`;
        Kom1Task1.disabled = true;
        Kom1Task2.disabled = true;
        Kom1Task3.disabled = true;
        Kom2Task1.disabled = true;
        Kom2Task2.disabled = true;
        Kom2Task3.disabled = true;
        Kom1Zaid1Praz.disabled = true;
        Kom1Zaid2Praz.disabled = true;
        Kom1Zaid3Praz.disabled = true;
        Kom2Zaid1Praz.disabled = true;
        Kom2Zaid2Praz.disabled = true;
        Kom2Zaid3Praz.disabled = true;
        Baigt.disabled = true;
        alert('Varžybos baigėsi!');
    }
}

// Naujų varžybų renderis

const naujosVarzybos = _ => {
    location.reload();
}

// Mygtukai

Kom1Zaid1Praz.addEventListener('click', prazanga1);
Kom1Zaid2Praz.addEventListener('click', prazanga2);
Kom1Zaid3Praz.addEventListener('click', prazanga3);
Kom2Zaid1Praz.addEventListener('click', prazanga4);
Kom2Zaid2Praz.addEventListener('click', prazanga5);
Kom2Zaid3Praz.addEventListener('click', prazanga6);

Kom1Task1.addEventListener('click', K1taskai1);
Kom1Task2.addEventListener('click', K1taskai2);
Kom1Task3.addEventListener('click', K1taskai3);
Kom2Task1.addEventListener('click', K2taskai1);
Kom2Task2.addEventListener('click', K2taskai2);
Kom2Task3.addEventListener('click', K2taskai3);

Baigt.addEventListener('click', kelinioPabaiga);

Pradet.addEventListener('click', naujosVarzybos);
