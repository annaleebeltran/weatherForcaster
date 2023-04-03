var apiKey = "547b903022ddda40cfda11bfe17b7b71";

function getCurrentWeather() {
    
    var enterCity = $("#enterCity").val();
    var api = "https://api.openweathermap.org/data/2.5/weather?q=" + enterCity + "&appid=" + apiKey;

    $.ajax({
        url: api,
        method: "GET"
    })

        .then(function (response) {
            var iconCode = response.weather[0].icon;
            var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

            $("#namecity").html("<h1> " + response.name + " </h1>");
            $("#tempcity").text("Temp " + ((response.main.temp - 273.15) * 1.8 + 32).toFixed(0) + " °F");
            $("#windspeed").text("Wind Speed: " + response.wind.speed + " MPH");
            $("#humidity").text("Humidity: " + response.main.humidity + " %");
            $("#widget").attr("src", iconUrl);
        });
}

getCurrentWeather();

function getFiveDayWeather(){
    var fiveDayAPI = "http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" + apiKey;
}



