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
    })
};