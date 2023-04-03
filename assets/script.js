var apiKey = "547b903022ddda40cfda11bfe17b7b71";
var todayDate = dayjs().format("MM/DD/YYYY");

//This function gets the current weather data from the API and displays it
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
            $("#currentdate").text(todayDate);
            $("#tempcity").text("Temp: " + ((response.main.temp - 273.15) * 1.8 + 32).toFixed(0) + " °F");
            $("#windspeed").text("Wind Speed: " + response.wind.speed + " MPH");
            $("#humidity").text("Humidity: " + response.main.humidity + " %");
            $("#widget").attr("src", iconUrl);
        });
}

getCurrentWeather();


var secondDate= dayjs().add(1, "day").format("MM/DD/YYYY");
var thirdDate = dayjs().add(2, "day").format("MM/DD/YYYY");
var fourthDate = dayjs().add(3, "day").format("MM/DD/YYYY");
var fifthDate = dayjs().add(4, "day").format("MM/DD/YYYY");
var sixthDate = dayjs().add(5, "day").format("MM/DD/YYYY");
var currentCity = $("#enterCity").val();

// This function gets the 5 day/Every 3 hour API data and displays it on the screen
function getFiveDayWeather() {
    var fiveDayAPI = "https://api.openweathermap.org/data/2.5/forecast?q=" + currentCity + "&appid=" + apiKey;

    $.ajax({
        url: fiveDayAPI,
        method: "GET"
    })

        .then(function (responseFiveDay) {
            var iconCode = response.weather[0].icon;
            var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

            $("#day0").text(secondDate);
            $("#tempcity0").text("Temp " + ((response.main.temp - 273.15) * 1.8 + 32).toFixed(0) + " °F");
            $("#windspeed0").text("Wind Speed: " + response.wind.speed + " MPH");
            $("#humidity0").text("Humidity: " + response.main.humidity + " %");
            $("#widget0").attr("src", iconUrl);

            $("#day1").text(thirdDate);
            $("#tempcity1").text("Temp " + ((response.main.temp - 273.15) * 1.8 + 32).toFixed(0) + " °F");
            $("#windspeed1").text("Wind Speed: " + response.wind.speed + " MPH");
            $("#humidity1").text("Humidity: " + response.main.humidity + " %");
            $("#widget1").attr("src", iconUrl);

            $("#day2").text(fourthDate);
            $("#tempcity2").text("Temp " + ((response.main.temp - 273.15) * 1.8 + 32).toFixed(0) + " °F");
            $("#windspeed2").text("Wind Speed: " + response.wind.speed + " MPH");
            $("#humidity2").text("Humidity: " + response.main.humidity + " %");
            $("#widget2").attr("src", iconUrl);

            $("#day3").text(fifthDate);
            $("#tempcity3").text("Temp " + ((response.main.temp - 273.15) * 1.8 + 32).toFixed(0) + " °F");
            $("#windspeed3").text("Wind Speed: " + response.wind.speed + " MPH");
            $("#humidity3").text("Humidity: " + response.main.humidity + " %");
            $("#widget3").attr("src", iconUrl);

            $("#day4").text(sixthDate);
            $("#tempcity4").text("Temp " + ((response.main.temp - 273.15) * 1.8 + 32).toFixed(0) + " °F");
            $("#windspeed4").text("Wind Speed: " + response.wind.speed + " MPH");
            $("#humidity4").text("Humidity: " + response.main.humidity + " %");
            $("#widget4").attr("src", iconUrl);



        });
}
getFiveDayWeather();


var searchHistoryString = "";
var searchHistory= [];
var searchListButtonHTML = '<button class="btn btn-secondary" type="button">';
var buttonEndTagHTML = '</button>';
var cityHistory = $("#searchData");

// This function gets the previous cities from local storage
function getSearchHistory() {
    searchHistoryString = localStorage.getItem('cityHistory');
    if (searchHistoryString !== null) {
        seacrhHistory = JSON.parse(searchHistoryString);
    }
}
getSearchHistory();


// This function saves previous cities into local storage
function saveCityHistory() {
    searchHistory.push(currentCity);
    localStorage.setItem("seacrhHistory", JSON.stringify(searchHistory));
}
saveCityHistory();

// This function displays the buttons the previous cities
function displaySearchHistory() {
    cityHistory.text('');
    if (searchHistoryString !== null) {
        for (var i = 0; i < seacrhHistory.length; i++) {
            searchList.append(searchListButtonHTML + searchHistory[i] + buttonEndTagHTML);
            searchListButtons = $('#searchList > button');
        }
    }
    searchListButtons = $('#searchList > button');
}
displaySearchHistory();