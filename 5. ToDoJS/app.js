const form = document.querySelector('form');
//console.log("log de forme :", form);

const liste = document.querySelector('ul');
//console.log("log de liste :", liste);

const input = document.querySelector('form input');
//console.log("log de input :", input);

let lesTaches = []; 

form.addEventListener(('submit'), event => {
    event.preventDefault(); // apres avoir enregistrer la page ne va pas se raffraichir

    let text = input.value.trim(); // tri() permet d'enlever les espaces avant et apres notre tache
    // console.log("log de notre texte", text);

    if (text !== ''){
        rajouterUneTache(text);
        input.value ='';
    }
})

function rajouterUneTache(text) {
    const todo= {
        text,
        id : Date.now()
    }
    // console.log("log de notre todo: ",todo);
    afficherTache(todo);
}

function afficherTache(todo){

    const item = document.createElement('li');
    item.setAttribute('data-key', todo.id); // data-key = todo.id

    const input = document.createElement('input'); 
    input.setAttribute('type','checkbox'); // checkbox pour montrer que la tache a ete faite
    input.addEventListener('click', tacheFaite);

    item.appendChild(input);

    const txt = document.createElement('span');
    txt.innerText = todo.text;
    item.appendChild(txt);

    const btn = document.createElement('button');
    btn.addEventListener('click', supprimerTache);
    
    const imag = document.createElement('img');
    imag.setAttribute('src', 'ressources/fermer.svg');
    btn.appendChild(imag)
    item.appendChild(btn);

    liste.appendChild(item);
    lesTaches.push(item);
}

function tacheFaite(e){
    e.target.parentNode.classList.toggle('finDeTache') 
    /* e.target = le button
    parentNode = li 
    classList.toggle= prend en charge l'ajout et la suppression de classes CSS, 
    qu'elles existent ou non dans votre tableau avec des lignes de code plus courtes. 
    
    */
}

function supprimerTache(e){

    lesTaches.forEach(el=> {
        if (e.target.parentNode.getAttribute('data-key')=== el.getAttribute('data-key')){
            el.remove();
            lesTaches = lesTaches.filter(li => li.dataset.key != el.dataset.key);
        }
    })

}
