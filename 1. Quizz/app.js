const form = document.querySelector('.form-quizz'); // queryselector pour selectionner un bloc

//console.log(form);

let tableauResultats = [];
const reponses = ['a','a'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

form.addEventListener('submit', (e) => {
// apres avoir cliquew sur valider de notre formulaire
    e.preventDefault();

    for (i = 1;i < 3 ;i++) {

        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
     
    //console.log(tableauResultats);
    verifFunc(tableauResultats); // appelle d'une fonction sur notre evenement
    tableauResultats = [];

})


function verifFunc (tabResultats) {

    for(let a = 0; a < 2; a++){

        if(tabResultats[a] === reponses[a]) {
            verifTableau.push(true); // ajout dans notre tab true or false
        } else {
            verifTableau.push(false);
        }

    }

    afficherResultats(verifTableau);
    verifTableau=[];
}

function afficherResultats (checkk){

    const nbrfaux = checkk.filter(el => el !== true).length;
    //console.log(nbrfaux); 

    switch(nbrfaux){

        case 0 :
            titreResultat.innerText = ` Bravo vous avez trouve ${emojis[0]}`;
            noteResultat.innerText = '2/2';
        break;
        case 1 :
            titreResultat.innerText = `Allez faire des recherches ${emojis[4]}`;
            noteResultat.innerText = '1/2';
        break;



    }



}




/* InnerText nous permet d'envoyer ou de recevoir un text ,
mais certains navigateurs ne le supporte pas, pour cela on peut use
textcontent*/