// 'use strict';

// const sons = {
//     'A': 'boom.wav',
//     'S': 'clap.wav',
//     'D': 'hihat.wav',
//     'F': 'kick.wav',
//     'G': 'openhat.wav',
//     'H': 'ride.wav',
//     'J': 'snare.wav',
//     'K': 'tink.wav',
//     'L': 'tom.wav'
// }

// const criarDiv = (texto) => {
//     const div = document.createElement('div');
//     div.classList.add('key');
//     div.textContent = texto;
//     div.id = texto;
//     document.getElementById('container').appendChild(div);
// }

// const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

// const tocarSom = (letra) => {
//     const audio = new Audio(`./sounds/${sons[letra]}`);
//     audio.play();
// }

// const adicionarEfeito = (letra) => document.getElementById(letra)
//                                            .classList.toggle('active');

// const removerEfeito = (letra) => {
//     const div = document.getElementById(letra);
//     const removeActive = () => div.classList.remove('active');
//     div.addEventListener('transitionend',removeActive);
// };

// const ativarDiv = (evento) => {

//     const letra = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase();

//     const letraPermitida = sons.hasOwnProperty(letra);
//     if (letraPermitida){
//         adicionarEfeito(letra);
//         tocarSom(letra);
//         removerEfeito(letra);
//     }
// }

// exibir(sons);
// document.getElementById('container')
//         .addEventListener('click', ativarDiv);

// window.addEventListener('keyup',ativarDiv);

const sons = {
  A: "boom.wav",
  S: "clap.wav",
  D: "hihat.wav",
  F: "kick.wav",
  G: "openhat.wav",
  H: "ride.wav",
  J: "snare.wav",
  K: "tink.wav",
  L: "tom.wav",
};

const creerdiv = (text) => {
   const div = document.createElement('div')
   div.textContent = text
   div.classList.add('key')
   div.id = text
   document.getElementById('container').appendChild(div)
}
const ajouterdiv = (sons) => {
    Object.keys(sons).forEach(creerdiv)
}

function play(lettre) {
    const audio = new Audio(`./sounds/${sons[lettre]}`)
    audio.play()
}

const ajouterEffet = (lettre) => {
    document.getElementById(lettre).classList.toggle('active')
}

const supprimerEffet = (lettre) => {
    const div = document.getElementById(lettre)
    const removeActive = () => {
        div.classList.remove('active')
    }
    div.addEventListener('transitionend', removeActive)
}

const activerDiv = (e) => {
    const lettre = e.type == 'click' ? e.target.id : e.key.toUpperCase()

    // On peut utiliser aussi estPermis = sons.hasOwnProperty(lettre)
    const estPermis = Object.hasOwn(sons, lettre)
    if(estPermis) {
        ajouterEffet(lettre)
        play(lettre)
        supprimerEffet(lettre)
    }
}

ajouterdiv(sons)
// Le parent ici container reçoit l'evenement, puis le code identifie le bon enfant avec e.target
document.getElementById('container').addEventListener('click', activerDiv)
// Appuie sur la touche correspondante pour declencher le son
window.addEventListener('keyup', activerDiv)



