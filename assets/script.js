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



// This function gets the 5 day/Every 3 hour API data and displays it on the screen
function getFiveDayWeather() {
        
      var lon = getFiveDayWeather.coords.longitude;
       var lat = getFiveDayWeather.coords.latitude;

    var fiveDayAPI = "api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appi" + apiKey;
     console.log(fiveDayAPI);   
        $.ajax({
            url: fiveDayAPI,
            method: "GET"
        })

            .then(function (responseFiveDay) {
                //Variables for the five day icons
                var widget0 = responseFiveDay.list[4].weather[0].icon;
                var icon0URL = "http://openweathermap.org/img/w/" + widget0 + ".png";

                var widget1 = responseFiveDay.list[4].weather[0].icon;
                var icon1URL = "http://openweathermap.org/img/w/" + widget1 + ".png";

                var widget2 = responseFiveDay.list[4].weather[0].icon;
                var icon2URL = "http://openweathermap.org/img/w/" + widget2 + ".png";

                var widget3 = responseFiveDay.list[4].weather[0].icon;
                var icon3URL = "http://openweathermap.org/img/w/" + widget3 + ".png";

                var widget4 = responseFiveDay.list[4].weather[0].icon;
                var icon4URL = "http://openweathermap.org/img/w/" + widget4 + ".png";

                //These variables Converts the tempature to Kelvin then sets it to 2 decimal places
                var temp0F = (responseFiveDay.list[4].main.temp - 273.15) * 1.8 + 32;
                var temp0 = temp0F.toFixed(1);

                var temp1F = (responseFiveDay.list[12].main.temp - 273.15) * 1.8 + 32;
                var temp1 = temp1F.toFixed(1);

                var temp2F = (responseFiveDay.list[20].main.temp - 273.15) * 1.8 + 32;
                var temp2 = temp2F.toFixed(1);

                var temp3F = (responseFiveDay.list[28].main.temp - 273.15) * 1.8 + 32;
                var temp3 = temp3F.toFixed(1);

                var temp4F = (responseFiveDay.list[36].main.temp - 273.15) * 1.8 + 32;
                var temp4 = temp4F.toFixed(1);


                //Variables for the date of the next 5 days
                var secondDate = dayjs().add(1, "day").format("MM/DD/YYYY");
                var thirdDate = dayjs().add(2, "day").format("MM/DD/YYYY");
                var fourthDate = dayjs().add(3, "day").format("MM/DD/YYYY");
                var fifthDate = dayjs().add(4, "day").format("MM/DD/YYYY");
                var sixthDate = dayjs().add(5, "day").format("MM/DD/YYYY");


                $("#day0").html(secondDate);
                $("#tempcity0").text("<p>" + "Temp: " + temp0 + " °F </p>");
                $("#windspeed0").text("Wind Speed: " + responseFiveDay.list.wind.speed + " MPH");
                $("#humidity0").text("<p>" + "Humidity: " + responseFiveDay.list[4].main.humidity + " % </p>");
                $("#widget0").attr("<img src=" + icon0URL + ">");

                $("#day1").html(thirdDate);
                $("#tempcity1").text("<p>" + "Temp: " + temp1 + " °F </p>");
                $("#windspeed1").text("Wind Speed: " + responseFiveDay.list.wind.speed + " MPH");
                $("#humidity1").text("<p>" + "Humidity: " + responseFiveDay.list[12].main.humidity + " % </p>");
                $("#widget1").attr("<img src=" + icon1URL + ">");


                $("#day2").html(fourthDate);
                $("#tempcity2").text("<p>" + "Temp: " + temp2 + " °F </p>");
                $("#windspeed2").text("Wind Speed: " + responseFiveDay.list.wind.speed + " MPH");
                $("#humidity2").text("<p>" + "Humidity: " + responseFiveDay.list[20].main.humidity + " % </p>");
                $("#widget2").attr("<img src=" + icon2URL + ">");


                $("#day3").html(fifthDate);
                $("#tempcity3").text("<p>" + "Temp: " + temp3 + " °F </p>");
                $("#windspeed3").text("Wind Speed: " + responseFiveDay.list.wind.speed + " MPH");
                $("#humidity3").text("<p>" + "Humidity: " + responseFiveDay.list[28].main.humidity + " % </p>");
                $("#widget3").attr("<img src=" + icon3URL + ">");


                $("#day4").html(sixthDate);
                $("#tempcity4").text("<p>" + "Temp: " + temp4 + " °F </p>");
                $("#windspeed4").text("Wind Speed: " + responseFiveDay.list.wind.speed + " MPH");
                $("#humidity4").text("<p>" + "Humidity: " + responseFiveDay.list[36].main.humidity + " % </p>");
                $("#widget4").attr("<img src=" + icon4URL + ">");



            });
    }
getFiveDayWeather();



    var searchHistoryString = "";
    var searchHistory = [];
    var searchListButtonHTML = '<button class="btn btn-primary" type="button">';
    var buttonEndTagHTML = "</button>";
    var cityHistory = $("#searchData");
    var currentCity = $("#enterCity").val();

    // This function gets the previous cities from local storage
    function getSearchHistory() {
        cityHistory = currentCity;
        searchHistoryString = localStorage.getItem("cityHistory");
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
                searchListButtons = $("#searchData > button");
            }
        }
        searchListButtons = $("#searchData > button");
    }
    displaySearchHistory();