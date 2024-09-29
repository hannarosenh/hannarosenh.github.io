fetch('https:///api.visittampere.com/api/v1/visittampere/event/published/all/?format=json&lang=fi')

.then(function(response) {
    return response.json();
})

.then(function (responseJson) {
    tapahtumat(responseJson)
})

.catch(function (error) {
    document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>" + error;
})

function tapahtumat(data) {
    var teksti = "";
    teksti = "<h1>Tampereella tapahtuu</h1>"

    for (var i = 0; i < data.length; i++) {
        teksti = teksti + "<h3>" + data[i].title + "</h3>";
        teksti = teksti + "<p class='description'>" + data[i].description + "</h3>";
        teksti = teksti + "<p> <a href=" + data[i].url + ">" + data[i].url + "</a><p>"
    }

    document.getElementById("vastaus").innerHTML = teksti;
}