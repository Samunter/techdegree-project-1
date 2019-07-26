/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//create array of quotes

var quotes = [
  {
    quote:
      '"What would America be like if we loved black people as much as we love black culture?"',
    source: 'Amandla Stenberg',
    citation: "Don't Cash Crop My Cornrows, YouTube",
    year: '',
    category: 'cultural appropriation'
  },
  {
    quote:
      '"Where justice is denied, where poverty is enforced, where ignorance prevails, and where any one class is made to feel that society is in an organized conspiracy to oppress, rob, and degrade them, neither persons nor property will be safe"',
    source: 'Frederick Douglass',
    citation: '',
    year: '1886',
    category: 'liberation'
  },
  {
    quote:
      '"I am an invisible man...I am a man of substance, of flesh and bone, fiber and liquids—and I might even be said to possess a mind. I am invisible, understand, simply because people refuse to see me."',
    source: 'Ralph Ellison',
    citation: 'Invisible Man',
    year: '1952',
    category: 'oppression'
  },
  {
    quote:
      '"Oppressive language does more than represent violence; it is violence; does more than represent the limits of knowledge; it limits knowledge."',
    source: 'Toni Morrison',
    citation: 'Nobel lecture',
    year: '1993',
    category: 'oppression'
  },
  {
    quote:
      '"Ignorance, allied with power, is the most ferocious enemy justice can have"',
    source: 'James Baldwin',
    citation: 'No Name in the Street',
    year: '1972',
    category: 'oppression'
  }
];

//create function to return random quote from quotes array

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
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

  //set html of div with id "quote-box" as the html string
  document.getElementById('quote-box').innerHTML = htmlString;
}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document
  .getElementById('loadQuote')
  .addEventListener('click', printQuote, false);

// Remember to delete the comments that came with this file, and replace them with your own code comments.
