// notre cle api qu'on a telecharger
const cleapi = 'd5460acfaa70fe1429bd73f653d20d14';
let resultatsApi;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {

        //console.log(position);
        let long = position.coords.longitude;
        let lat = position.coords.latitude;
        appelApi(long,lat);


    }, () => {
        alert("vous n'avez pas activer  la fonctionnalite de geolocalisation ")
    } )
}


function appelApi (long,lat){

    //console.log(long,lat)

    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${cleapi}`)
    .then ((reponse) => {
        return reponse.json();
    })
    .then( (data => {
        console.log(data);
    })

    )

}