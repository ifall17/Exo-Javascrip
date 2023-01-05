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

    
    verifTableau=[];
}