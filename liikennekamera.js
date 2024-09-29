fetch('https://tie.digitraffic.fi/api/weathercam/v1/stations/C04507/data')

    .then(function (response) {
        return response.json();
    })

    .then(function (responseJson) {
        liikenne(responseJson);
    })

    .catch(function (error) {
        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    })

    function liikenne(data) {
        var teksti = "";
        teksti = "<h1>Autolla Tampereelle</h1>";
        for (var i = 0; i < data.presets.length; i++) {
            teksti = teksti + "<p>" + data.presets[i].measuredTime + "</p>";
            var kuva = 'https://weathercam.digitraffic.fi/C0450701.jpg'
            teksti = teksti + "<img src='" + kuva + "' >"
        }
        document.getElementById("vastaus").innerHTML = teksti;
    }