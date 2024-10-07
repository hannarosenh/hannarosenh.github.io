fetch('https://api.openweathermap.org/data/2.5/weather?lang=en&q=oslo&units=metric&APPID=314de1b8dabfbace7321a5ff474e27d1')

    .then(function (response) {
        return response.json();
    })

    .then(function (responseJson) {
        getWeather(responseJson);
    })

    .catch(function (error) {
        document.getElementById("weather").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    })

    function getWeather(data) {
        var teksti = "";
        teksti = "<p class='weather-desc'>" + data.weather[0].description + "</p>"
        teksti = teksti + "<p>" + data.main.temp + "&degC</p>"

        var kuva = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';

        teksti = teksti + "<p><img src='" + kuva + "' alt='sääikoni'></p>";
        document.getElementById("weather").innerHTML = teksti;
    }