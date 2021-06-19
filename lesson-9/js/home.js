const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject);
  const towns = jsonObject['towns'];
  for (let i = 0; i < towns.length; i++ ) { 
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let yearFounded = document.createElement('h4');
    let population = document.createElement('h4');
    let annualRF =document.createElement('h4')
    let image = document.createElement('img');
    image.setAttribute('src', towns[i].photo);
    
    
    h2.textContent = towns[i].name;
    yearFounded.textContent = "Year Founded: " + ' ' + towns[i].yearFounded;
    population.textContent = "Population: " + ' ' + towns[i].currentPopulation;
    annualRF.textContent ="Annual Rain Fall: " + ' ' + towns[i].averageRainfall;
    card.appendChild(h2);
    card.appendChild(yearFounded);
    card.appendChild(population);
    card.appendChild(annualRF);
    card.appendChild(image);
    
    document.querySelector('div.cards').appendChild(card); 
    }// temporary checking for valid response and data parsing
  });
  