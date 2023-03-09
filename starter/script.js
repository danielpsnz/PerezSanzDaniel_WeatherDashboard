$("#search-button").on("click", function(event) {
    event.preventDefault();
    var city = $("#search-input").val();
    var cities = [];
  
    cities = JSON.parse(localStorage.getItem("cities")) || []; 
    cities.push(city); 
    localStorage.setItem("cities", JSON.stringify(cities)); 
  
    showWeather(city); 
  }); 

var day1 = moment().add(1, 'days').format('M/DD/YYYY');
var day2 = moment().add(2, 'days').format('M/DD/YYYY');
var day3 = moment().add(3, 'days').format('M/DD/YYYY');
var day4 = moment().add(4, 'days').format('M/DD/YYYY');
var day5 = moment().add(5, 'days').format('M/DD/YYYY');
var startDate = moment().format('M/DD/YYYY'); 

function showWeather(city) {
    $("#today").empty();
    $("#forecast").empty();
  
    // QueryURL for TODAY to Open Weather
    var URL = 'https://api.openweathermap.org/data/2.5/weather?q=' +
    city + '&units=metric' + '&appid=20b5f7d03d4d0e882c552ad086ac886d';
    console.log(URL);
  
    // AJAX call
    $.ajax({
        url: URL,
        method: "GET",
    }).then(function(response) {
  
  
      var iconURL = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";  
      var lat = response.coord.lat; 
      var lon = response.coord.lon; 
    
      $("#today").append(
        "<div class='col s12 m6'>"
        +  "<h2 class='today'>" + response.name + " (" + startDate + ")" + "&nbsp" + "<img src='" + iconURL  + "'>" + "</h2>"
        +  "<ul class='today-properties'>" + "Temperature: " +  response.main.temp + " °C" + "</ul>"
        +  "<ul class='today-properties'>" + "Wind: " +  response.wind.speed + " KPH" + "</ul>"
        +  "<ul class='today-properties'>" + "Humidity: " + response.main.humidity + "%" + "</ul>"
        + "</div>"
        );

        // QueryURL for FORECAST to Open Weather
    var forecastURL = "https://api.openweathermap.org/data/2.5/onecall?" 
    + "lat=" + lat + "&lon=" + lon + "&units=metric" + "&appid=45e45c0bb2ef540df33fa21a29aafa8a";  
    console.log(forecast);

   //AJAX call
    $.ajax({
    url: forecastURL,
    method: "GET",
    }).then(function(response) {
      
      //icon urls
      var iconDAY1 = "http://openweathermap.org/img/w/" + response.daily[0].weather[0].icon + ".png";
      var iconDAY2 = "http://openweathermap.org/img/w/" + response.daily[1].weather[0].icon + ".png";
      var iconDAY3 = "http://openweathermap.org/img/w/" + response.daily[2].weather[0].icon + ".png";
      var iconDAY4 = "http://openweathermap.org/img/w/" + response.daily[3].weather[0].icon + ".png";
      var iconDAY5 = "http://openweathermap.org/img/w/" + response.daily[4].weather[0].icon + ".png";

      // HEADER
      $("#forecast").append(
        "<div class='col-md-12'>"
       + "<h2 id='forecast-header'>" + "5-Day Forecast:" + "</h2>" 
       + "<div class='card-deck'>"
       + "<div class='forecastCard card col s12 m6'>"
       +  "<div class='card-body'>"
       +  "<div class='card-header'>" + day1 +"</div>"
       +  "<div class='card-text'>" + "<img src='" + iconDAY1 + "'>" +"</div>"
       +  "<div class='card-text'>" + "Temperature: " + response.daily[0].temp.day + " °C" + "</div>"
       +  "<div class='card-text'>" + "Wind: " + response.daily[0].wind + " KPH" + "</div>"
       +  "<div class='card-text'>" + "Humidity: " + response.daily[0].humidity + "%" + "</div>" 
       + "</div>" 
       + "</div>"
       + "<div class='forecastCard card col s12 m6'>"
       +  "<div class='card-body'>"
       +  "<div class='card-header'>" + day2 +"</div>"
       +  "<div class='card-text'>" + "<img src='" + iconDAY2 + "'>" +"</div>"
       +  "<div class='card-text'>" + "Temperature: " + response.daily[1].temp.day + " °C" + "</div>"
       +  "<div class='card-text'>" + "Wind: " + response.daily[1].wind + " KPH" + "</div>"
       +  "<div class='card-text'>" + "Humidity: " + response.daily[1].humidity + "%" + "</div>" 
       + "</div>" 
       + "</div>"
       + "<div class='forecastCard card col s12 m6'>"
       +  "<div class='card-body'>"
       +  "<div class='card-header'>" + day3 +"</div>"
       +  "<div class='card-text'>" + "<img src='" + iconDAY3 + "'>" +"</div>"
       +  "<div class='card-text'>" + "Temperature: " + response.daily[2].temp.day + " °C" + "</div>"
       +  "<div class='card-text'>" + "Wind: " + response.daily[2].wind + " KPH" + "</div>"
       +  "<div class='card-text'>" + "Humidity: " + response.daily[2].humidity + "%" + "</div>" 
       + "</div>" 
       + "</div>"
       + "<div class='forecastCard card col s12 m6'>"
       +  "<div class='card-body'>"
       +  "<div class='card-header'>" + day4 +"</div>"
       +  "<div class='card-text'>" + "<img src='" + iconDAY4 + "'>" +"</div>"
       +  "<div class='card-text'>" + "Temperature: " + response.daily[3].temp.day + " °C" + "</div>"
       +  "<div class='card-text'>" + "Wind: " + response.daily[3].wind + " KPH" + "</div>"
       +  "<div class='card-text'>" + "Humidity: " + response.daily[3].humidity + "%" + "</div>" 
       + "</div>" 
       + "</div>"
       + "<div class='forecastCard card col s12 m6'>"
       +  "<div class='card-body'>"
       +  "<div class='card-header'>" + day5 +"</div>"
       +  "<div class='card-text'>" + "<img src='" + iconDAY5 + "'>" +"</div>"
       +  "<div class='card-text'>" + "Temperature: " + response.daily[4].temp.day + " °C" + "</div>"
       +  "<div class='card-text'>" + "Wind: " + response.daily[4].wind + " KPH" + "</div>"
       +  "<div class='card-text'>" + "Humidity: " + response.daily[4].humidity + "%" + "</div>" 
       + "</div>" 
       + "</div>"
       + "</div>"
      ); 

      showCities(); 
        })
    })
};

function showCities() {
    
}