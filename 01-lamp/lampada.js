const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const repaired = document.getElementById('repair')
const lamp = document.getElementById('lamp');

const isLampBroken = () => lamp.src.includes('quebrada');

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.jpg'
    }
}

function lampOff() {
    if(!isLampBroken()) {
        lamp.src = './img/desligada.jpg'
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.jpg'
}

function lampRepaired() {
    if(isLampBroken()) {
        lamp.src = './img/desligada.jpg'
    }
}


turnOn.addEventListener('click', lampOn)
lamp.addEventListener('mouseover', lampOn)

turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseleave', lampOff)

lamp.addEventListener('dblclick', lampBroken)

repaired.addEventListener('click', lampRepaired)




