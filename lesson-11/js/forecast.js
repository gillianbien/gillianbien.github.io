const apiURL2="https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=27045adc690e2c2a1dff0bb397b2dbe2&units=imperial";
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day=1;
    const dayofWeek =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const fiveDayForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes('12:00:00'));
    //console.log(fiveDayForecast);

    fiveDayForecast.forEach(x=>{
      let d= new Date(x.dt_txt);
      document.getElementById(`dayofWeek${day}`).textContent = dayofWeek[d.getDay()];
      document.getElementById(`forecast${day}`).textContent = x.main.temp;
      document.getElementById(`icon${day}`).setAttribute('src', 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png');
      day++
    });
});

/*for (let day = 1; day <= 5; day++) {
      let d= new Date(fiveDayForecast[day].dt_txt);
      document.getElementById(`dayofWeek${day}`).textContent = dayofWeek[d.getDay()];
      document.getElementById(`forecast${day}`).textContent = fiveDayForecast[day].main.temp;

      document.getElementById(`icon${day}`).setAttribute("src", 'https://openweathermap.org/img/w/' + fiveDayForecast[day].weather[0].icon + '.png');
      
    }
     
*/