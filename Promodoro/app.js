const affichageJob = document.querySelector('.affichageT');
const affichagePau = document.querySelector('.affichageP');
const btnCom = document.querySelector('.b1');
const btnPau = document.querySelector('.b2');
const btnRes = document.querySelector('.b3');
const cycles = document.querySelector('h2')

let tpsIni = 1800;
let tpsRep = 300;
let pause = false;
let nbrCy = 0;

cycles.innerText= `vous avez ${nbrCy} cycles`;

affichageJob.innerText = `${Math.trunc(tpsIni/60)} : ${Math.trunc(tpsIni % 60 < 10) ? `0${Math.trunc(tpsIni % 60)}` : `${Math.trunc(tpsIni % 60)}` }`;
affichagePau.innerText = `${Math.trunc(tpsRep/60)} : ${Math.trunc(tpsRep % 60 < 10) ? `0${Math.trunc(tpsRep % 60)}` : `${Math.trunc(tpsRep % 60)}` }`;

