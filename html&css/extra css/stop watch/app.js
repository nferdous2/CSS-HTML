const seconds=00;
const tens = 00;
const appendTens= document.getElementById('tens');
const appendSeconds=document.getElementById('seconds');
const buttonStart = document.getElementById('btn-start')
const buttonReset = document.getElementById('btn-reset');
const buttonStop = document.getElementById('btn-stop');

function startTimer(){
    tens++;
    if(tens<0){
        appendTens.innerHTML='0'+tens;
    }
    if(tens>9){
        appendTens.innerHTML=tens;
    }
    if(tens>99){
        seconds++;
      appendSeconds.;
    }
}