
const today = new Date();

const nextweek = new Date (today.getTime() + 7 * 24 * 60 * 60 * 1000);
 //console.log(nextweek);

 //let jour = ("0" + nextweek).slice(9,11);

 //console.log(nextweek.toDateString());

 let jour = nextweek.toDateString().slice(8,10);

 let mois ='0'+ (today.getMonth()+1);

 let annee = today.getFullYear()

 document.querySelector('input[type=Date]').value = `${annee}-${mois}-${jour}`;

 //console.log(mois);
