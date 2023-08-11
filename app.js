'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8'); 

function mudarCor(){
forma1.classList.toggle('vermelho')
}

function mudarForma(){
    forma2.classList.toggle('circulo')

}

function desaparecer(){
   forma3.classList.toggle('desaparecer')
}

function mudarImagem(){
    forma4.classList.toggle('img')
}

function pulsarForma(){
   forma5.classList.toggle('pulsando')
}
function girar(){
    forma6.classList.toggle('girar')

}
function pularForma() {
    forma7.classList.toggle('pulando'); 
   
}

function trapezio() {
    forma8.classList.toggle('trapezio');
}


   


forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', desaparecer)
forma4.addEventListener('click', mudarImagem)
forma5.addEventListener('click', pulsarForma)
forma6.addEventListener('click', girar)
forma7.addEventListener('click', pularForma);
forma8.addEventListener('click', trapezio);


