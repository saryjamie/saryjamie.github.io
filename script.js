setInterval(getCurrentTime, 1000);

var currentDay = $("#currentDay");
var date = $("<div>");
function getCurrentTime() {
date.text(moment().format("dddd - MMM Do, h:mm a"));
currentDay.append(date);
};



var apiKey = "03e24d7d731fc83efc64f5aa4eb937c1";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=latitude&lon=longitude&q=San+Diego&appid=" +  apiKey;

$.ajax({
url: queryURL,
method: "GET"
}).then(function(response){

    var iconCode = response.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    $(".city").html("<h3> San Diego </h3>");
    $(".temp").text("Temperature: " + ((response.main.temp - 273.15) * 1.8 + 32).toFixed(0) + " °F");
    $(".humidity").text("Humidity: " + response.main.humidity + " %");
    $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
    $("#wicon").attr("src", iconurl);
    console.log(response.weather[0].icon);
  });