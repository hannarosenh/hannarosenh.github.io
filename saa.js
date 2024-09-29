fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=helsinki&units=metric&APPID=314de1b8dabfbace7321a5ff474e27d1')

.then(function(response) {
    return response.json();
})

.then(function (responseJson) {
    saa(responseJson);
})

.catch(function (error) {
    document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
})

function saa(data) {
    var teksti = "";
    teksti = "<h1>Sää - siitä aina on jotain kerrottavaa</h1>"
    teksti = teksti + "<p>Millainen sää Helsingissä on? Entä Tampereella</p>"
    teksti = teksti + "<ul>"
    teksti = teksti + "<li>kaupunki: " + data.name + "</li>";
    teksti = teksti + "<li class='saakuvaus'>kuvaus: " + data.weather[0].description + "</li>";
    teksti = teksti + "<li>lämpötila: " + data.main.temp + " &degC</li>"
    teksti = teksti + "<li>tuulen nopeus: " + data.wind.speed + "</li>"
    teksti = teksti + "</ul>";

    var kuva = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';

    teksti = teksti + "<p><img src=" + kuva + " alt='kuva'></p>"

    document.getElementById("vastaus").innerHTML = teksti;
}