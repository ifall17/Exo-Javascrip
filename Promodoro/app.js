const affichageJob = document.querySelector('.affichageT');
const affichagePau = document.querySelector('.affichageP');
const btnCom = document.querySelector('.b1');

const btnPau = document.querySelector('.b2');
const btnRes = document.querySelector('.b3');
const cycles = document.querySelector('h2')
checkInterval = false;
let tpsIni = 1800;
let tpsRep = 300;
let pause = false;
let nbrCy = 0;

cycles.innerText= `vous avez ${nbrCy} cycles`;

affichageJob.innerText = `${Math.trunc(tpsIni/60)} : ${Math.trunc(tpsIni % 60 < 10) ? `0${Math.trunc(tpsIni % 60)}` : `${Math.trunc(tpsIni % 60)}` }`;

affichagePau.innerText = `${Math.trunc(tpsRep/60)} : ${Math.trunc(tpsRep % 60 < 10) ? `0${Math.trunc(tpsRep % 60)}` : `${Math.trunc(tpsRep % 60)}` }`;


btnCom.addEventListener('click', () => {
    
    if(checkInterval === false) {

    checkInterval = true;

    tpsIni--;
    affichageJob.innerText = `${Math.trunc(tpsIni/60)} : ${(tpsIni % 60 < 10) ? `0${tpsIni % 60}` : tpsIni % 60}`;

    let timer = setInterval(() => {

        if( pause === false && tpsIni > 0) {
            tpsIni--;
            affichageJob.innerText = `${Math.trunc(tpsIni/60)} : ${(tpsIni % 60 < 10) ? `0${tpsIni % 60}` : tpsIni % 60}`;
        } 
        else if (pause === false && tpsRep === 0 && tpsIni === 0) {
            tpsIni = 1800;
            tpsRep = 300;
            nbDeCycles++;
            cycles.innerText = `Nombre de cycles ${nbDeCycles}`;
            affichageJob.innerText = `${Math.trunc(tpsIni/60)} : ${(tpsIni % 60 < 10) ? `0${tpsIni % 60}` : tpsIni % 60}`;
            affichagePau.innerText = `${Math.trunc(tpsRep/60)} : ${(tpsRep % 60 < 10) ? `0${tpsRep % 60}` : tpsRep % 60}`;
        }
        else if (pause === false && tpsIni === 0) {
            tpsRep--;
            affichagePau.innerText = `${Math.trunc(tpsRep/60)} : ${(tpsRep % 60 < 10) ? `0${tpsRep % 60}` : tpsRep % 60}`;

        } 
        

    }, 1000)

    // Reset
    btnRes.addEventListener('click', () => {
        clearInterval(timer);
        checkInterval = false;
        tpsIni = 1800;
        tpsRep = 300;
        affichageJob.innerText = `${Math.trunc(tpsIni/60)} : ${(tpsIni % 60 < 10) ? `0${tpsIni % 60}` : tpsIni % 60}`;
        affichagePau.innerText = `${Math.trunc(tpsRep/60)} : ${(tpsRep % 60 < 10) ? `0${tpsRep % 60}` : tpsRep % 60}`;
    })


    } else {
        return;
    }


   
    

})

btnPau.addEventListener('click', () => {

    if(pause === false){
        btnPause.innerText = "Play";
    } else if(pause === true){
        btnPause.innerText = "Pause";
    }
    pause = !pause;
    
})