const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject);
  const towns = jsonObject['towns'];
  for (let i = 0; i < [1]; i++ ) {
let div = document.createElement('div')
let first = document.createElement('p');
let second = document.createElement('p');
let third = document.createElement('p');
let fourth = document.createElement('p');
    first.textContent = towns[2].events[0];
    second.textContent = towns[2].events[1];
    third.textContent = towns[2].events[2];
    fourth.textContent = towns[2].events[3];
    div.appendChild(first);
    div.appendChild(second);
    div.appendChild(third);
    div.appendChild(fourth);
    
    
    document.querySelector('div.fishHavenEvents').appendChild(div); 
  }
  // temporary checking for valid response and data parsing
});
  