
//fetch('https://run.mocky.io/v3/a811ed18-9667-4d0f-a847-4f6da1463e41')
fetch('https://hannarosenh.github.io/teht2.JSON')
    .then(function (response) {
        return response.json();
    })

    .then(function (responseJson) {
        //document.getElementById("vastaus").innerHTML = "<p>Jatketaan harjoitusta</p>";
        kerro(responseJson);
    })

    .catch(function (error) {
        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    })

    function kerro(data) {
        var teksti = "";
        teksti = teksti + "<h1>" + data.nimi + "</h1>";
        teksti = teksti + "<h2>Osallistujat</h2>";
        teksti = teksti + "<p class='osallistujat'>" + data.osallistujat.lukumäärä +" osallistujaa</p>";
        teksti = teksti + "<p>"
        for(var i =0; i < data.osallistujat.nimet.length-1; i++) {
            teksti = teksti + data.osallistujat.nimet[i] + ", ";
        }
        teksti = teksti + data.osallistujat.nimet[4];
        teksti = teksti + "</p>"

        teksti = teksti + "<p>" + data.ajankohta.alkamisaika + " - " + data.ajankohta.loppumisaika + "</p>";
        teksti = teksti + "<p class='aikataulu'>" + data.kesto + "</p>";
        teksti = teksti + "<p><img src='" + data.kuva + "'alt='kuva'></p>"

        document.getElementById("vastaus").innerHTML = teksti;
    }