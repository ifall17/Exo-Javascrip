const affichage = document.querySelector('.affichage');
const inputs = document.querySelectorAll('input');
const btns = document.querySelectorAll('button');
const infoTxt = document.querySelector('.info_txt')
const today = new Date();

let dejafai = false;

//.log(inputs);

const nextweek = new Date (today.getTime() + 7 * 24 * 60 * 60 * 1000);
 //console.log(nextweek);

 //let jour = ("0" + nextweek).slice(9,11);

 //console.log(nextweek.toDateString());

 let jour = nextweek.toDateString().slice(8,10);

 let mois ='0'+ (today.getMonth()+1);

 let annee = today.getFullYear()

 document.querySelector('input[type=Date]').value = `${annee}-${mois}-${jour}`;  //console.log(mois);

// console.log(btns); on a nos deux button sur un NodeList qui n'est pas un tableau mais on peut iterer dedans, c'est comme les tuples

btns.forEach(btn => {
    btn.addEventListener('click',  btnAction)
})


function btnAction (x) {

    myobj = {};

    inputs.forEach(inpu => {
        let attrName = inpu.getAttribute('name');
        let attrValeur = attrName !== 'cookdate' ? inpu.value : inpu.valueAsDate;
        
        myobj[attrName]= attrValeur;
        
       
        
    })

    let description = x.target.getAttribute('data-cook');

    if (description === "creer"){
        creerCookie(myobj.cookname, myobj.cookvalue, myobj.cookdate);
    }

    else if (description === "affiche") {
        listCookies();
    }
}

function creerCookie(name, value, exp){

    let cookies = document.cookie.split(";");
     cookies.forEach(cookie => {
        formatecoo = cookie.split("=");
        if (formatecoo[0] === encodeURIComponent(name)){
            dejafai = true;

        }
     })

    if (dejafai){
         alert ("Cookie deja cree");
         dejafai = false;
         return;
    }



    if (name.length === 0){
         alert ( " Impossible de creer une cookie vide")
        return;
    }
    
    document.cookie= `${encodeURIComponent(name)}=${encodeURIComponent(value)};expires=${exp.toUTCString()}`; // ici in a notre cookie avec comme cle le nom et une date d'expiration
    
    let info = document.createElement('li');
    info.innerText = `Cookie ${name} cree`;
    affichage.appendChild(info);
    setTimeout(()=> {
        info.remove();
    }, 2000)
}
