const feu = document.getElementById('img');
const rouge = document.getElementById('red');
const jaune = document.getElementById('yellow');
const vert = document.getElementById('green');
const auto = document.getElementById('automatic');

let timerAuto = null;
let ordreFeu = ['rouge', 'jaune', 'vert', 'jaune'];
let indexFeu = 0;

function feuVert () {
    feu.src = './img/verde.png';
}

function feuRouge() {
    feu.src = './img/vermelho.png';
}

function feuJaune() {
    feu.src = './img/amarelo.png';
}

function afficherFeu(couleur) {
    if (couleur === 'rouge') {
        feuRouge();
    } else if (couleur === 'jaune') {
        feuJaune();
    } else {
        feuVert();
    }
}

function switchFeu() {
    afficherFeu(ordreFeu[indexFeu]);
    indexFeu = (indexFeu + 1) % ordreFeu.length;
}

function arreterAutomatique() {
    if (timerAuto !== null) {
        clearInterval(timerAuto);
        timerAuto = null;
    }
}

function feuAutomatique() {
    arreterAutomatique();
    indexFeu = 0;
    switchFeu();
    timerAuto = setInterval(switchFeu, 900);
}

rouge.addEventListener('click', () => {
    arreterAutomatique();
    feuRouge();
});

jaune.addEventListener('click', () => {
    arreterAutomatique();
    feuJaune();
});

vert.addEventListener('click', () => {
    arreterAutomatique();
    feuVert();
});

auto.addEventListener('click', feuAutomatique);