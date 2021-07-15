const requestURL = 'https://gillianbien.github.io/Canaman%20chamber/business.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const business = jsonObject['business'];
    

    for (let i = 0; i < business.length; i++ ) { 
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let contact = document.createElement('p');
    let weblinks = document.createElement('a');
    let image = document.createElement('img');
    image.setAttribute('src', business[i].imageurl);
    
    h2.textContent = business[i].name ;
    contact.textContent = "Contact information:" + ' ' + business[i].contact;
    weblinks.textContent =  business[i].weblinks;
    card.appendChild(h2);
    card.appendChild(contact);
    card.appendChild(weblinks);
    card.appendChild(image);
    
    document.querySelector('div.cards').appendChild(card); 
    }// temporary checking for valid response and data parsing
  });
  