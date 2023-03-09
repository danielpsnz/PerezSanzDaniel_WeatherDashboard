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