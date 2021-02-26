var city = document.querySelectorAll('h1 span');
var weather = document.querySelectorAll('main span');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
       var apiResult = JSON.parse(this.responseText);

       city[0].innerHTML = apiResult.name;
       weather[0].innerHTML = apiResult.weather[0].description;

   }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=33569,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
