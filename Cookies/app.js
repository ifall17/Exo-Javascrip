const affichage = document.querySelector('.affichage');
const inputs = document.querySelectorAll('input');
const btns = document.querySelectorAll('button');
const info = document.querySelector('.info_txt')
const today = new Date();

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
