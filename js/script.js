/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//create array of quotes
var quotes = [
  {
    quote:
      'What would America be like if we loved black people as much as we love black culture?',
    source: 'Amandla Stenberg',
    citation: "Don't Cash Crop My Cornrows, YouTube",
    year: '',
    category: 'cultural appropriation'
  },
  {
    quote: 'Healing begins where the wound was made',
    source: 'Alice Walker',
    citation: 'The Way Forward Is with a Broken Heart',
    year: '2000',
    category: 'liberation'
  },
  {
    quote:
      'Anyone who has ever struggled with poverty knows how extremely expensive it is to be poor.',
    source: 'James Baldwin',
    citation: 'Fifth Avenue, Uptown. Esquire',
    year: '',
    category: 'oppression'
  },
  {
    quote:
      'Oppressive language does more than represent violence; it is violence; does more than represent the limits of knowledge; it limits knowledge.',
    source: 'Toni Morrison',
    citation: 'Nobel lecture',
    year: '1993',
    category: 'oppression'
  },
  {
    quote:
      'Ignorance, allied with power, is the most ferocious enemy justice can have',
    source: 'James Baldwin',
    citation: 'No Name in the Street',
    year: '1972',
    category: 'oppression'
  }
];

//create array of hex colors
var colors = ['#b30086', '#b300b3', '#009999', '#0000ff', '#cc99ff'];

//create function to return random quote from quotes array
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

//create function to return random hex color from colors array
function getRandomColor() {
  return colors[Math.floor(Math.random() * quotes.length)];
}

//create function to print quote to the screen
function printQuote() {
  var randomQuote = getRandomQuote();

  //build html string
  var htmlString = '';
  htmlString += '<p class="quote">' + randomQuote.quote + '</p>';
  htmlString += '<p class="source">' + randomQuote.source;

  if (randomQuote.citation) {
    htmlString += '<span class="citation">' + randomQuote.citation + '</span>';
  }

  if (randomQuote.year) {
    htmlString += '<span class="year">' + randomQuote.year + '</span>';
  }

  if (randomQuote.category) {
    htmlString +=
      '<span class="category">' + 'tag: ' + randomQuote.category + '</span>';
  }

  htmlString += '</p>';

  //set html of div with id "quote-box" as the htmlString
  document.getElementById('quote-box').innerHTML = htmlString;

  //set background and button to random color
  var randomColor = getRandomColor();

  document.body.style.backgroundColor = randomColor;
  document.getElementById('loadQuote').style.backgroundColor = randomColor;
}

window.setInterval(printQuote, 5000);

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document
  .getElementById('loadQuote')
  .addEventListener('click', printQuote, false);
