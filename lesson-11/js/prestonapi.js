const apiURL="https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=55fa2df7df9cc9962a18b5c146dd8cb1&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('outputTemp').textContent = jsObject.main.temp;
    document.getElementById('outputWind').textContent = jsObject.wind.speed;
    document.getElementById('descript').textContent = jsObject.weather.description;
    document.getElementById('humid').textContent = jsObject.main.humidity;
    
const imagesrc = "https://openweathermap.org/img/wn/10d@2x.png" + jsObject.weather[4].icon + '.png';  // note the concatenation
const desc = jsObject.weather[4].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
//let day=0;
    //const dayofWeek =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    //const fiveDayForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes('12:00:00'));
    //console.log(fiveDayForecast);

    //fiveDayForecast.forEach(x=>{
     // let d= new Date(x.dt_txt);
      //document.getElementById("dayofWeek${day+1}").textContent = dayofWeek[d.getDay()];
      //document.getElementById("dayofWeek${day+1}").textContent = x.main.temp;
      //day++
    //});
});