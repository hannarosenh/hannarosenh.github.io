
//fetch('https://run.mocky.io/v3/94654798-4feb-4b28-b7ac-4263eceb1e96')
fetch('https://hannarosenh.github.io/teht1.JSON')
.then(function(response) {
    return response.json();
})

.then(function(responseJson) {
    //document.getElementById("vastaus").innerHTML = "<p>Jatketaan harjoitusta</p>";
    kerro(responseJson);
})


.catch(function(error) {
    document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
})

function kerro(data) {
    var teksti = "";
    teksti = "<h1>" + data.otsikko + "</h1>"
    teksti = teksti + "<p>" + data.kuvaus + "</p>"
    teksti = teksti + "<p><img src='" + data.kuva + "'alt='kuva'></p>";
    teksti = teksti + "<h3>Opintojakso: " + data.opintojakso.nimi + " " + data.opintojakso.tunnus + " " + data.opintojakso.opintopisteet + " op</h3>"

    teksti = teksti + "<ul>"

    for(var i = 0; i < data.sisalto.length; i++) {
        teksti = teksti + "<li>" + data.sisalto[i] +"</li>"
    }
    teksti = teksti + "</ul>";

    teksti = teksti + "<h4>Linkit</h4>";
    teksti = teksti + "<ul class='linkit'>"

    for (var i = 0; i < data.tekniikat.length; i ++) {
        teksti = teksti + "<li class='linkit-aihe'>" + data.tekniikat[i].aihe + ": " + "<a class='linkit-linkki' href='" + data.tekniikat[i].linkki + "'>" + data.tekniikat[i].linkki +"</a>" + "</li>"
    }
    teksti = teksti + "</ul>"

    document.getElementById("vastaus").innerHTML = teksti;
}