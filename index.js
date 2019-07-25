//array of quotes

var quotes = [
  {
    quote:
      '"What would America be like if we loved black people as much as we love black culture?"',
    source: "Amandla Stenberg",
    citation: "Don't Cash Crop My Cornrows, YouTube",
    year: "2015",
    category: "cultural appropriation"
  },
  {
    quote:
      '"Where justice is denied, where poverty is enforced, where ignorance prevails, and where any one class is made to feel that society is in an organized conspiracy to oppress, rob, and degrade them, neither persons nor property will be safe"',
    source: "Frederick Douglass",
    citation:
      "Speech on the twenty-fourth anniversary of emancipation in Washington. D.C.",
    year: "1886",
    category: "liberation"
  },
  {
    quote:
      '"I am an invisible man...I am a man of substance, of flesh and bone, fiber and liquids—and I might even be said to possess a mind. I am invisible, understand, simply because people refuse to see me."',
    source: "Ralph Ellison",
    citation: "Invisible Man",
    year: "1952",
    category: "oppression"
  },
  {
    quote:
      '"Oppressive language does more than represent violence; it is violence; does more than represent the limits of knowledge; it limits knowledge."',
    source: "Toni Morrison",
    citation: "Nobel lecture",
    year: "1993",
    category: "oppression"
  },
  {
    quote:
      '"Ignorance, allied with power, is the most ferocious enemy justice can have"',
    source: "James Baldwin",
    citation: "No Name in the Street",
    year: "1972",
    category: "oppression"
  }
];

//returns random quote from quotes array

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
