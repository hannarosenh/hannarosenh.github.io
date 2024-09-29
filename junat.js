fetch('https://rata.digitraffic.fi/api/v1/live-trains/station/HKI?departing_trains=100&include_nonstopping=false')

    .then(function (response) {
        return response.json();
    })

    .then(function (responseJson) {
        juna(responseJson);
    })

    .catch(function (error) {
        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    })

    function juna(data) {
        
    }