// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
let quotes = [
  {
    quote: "When you want to succeed as bad as you want to breathe, then you'll be successful",
    source: "Eric Thomas",
    citation: "Secrets to Success",
    year: 2012
  },
  {
    quote: "All I ever needed to get noticed was effort.",
    source: "Ray Lewis",
    citation: "TedX Talk",
    year: 2014
  },
  {
    quote: "The process saved my life.",
    source: "Inky Johnson",
    citation: "Motivational Speech",
    year: 2015
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    source: "Thomas Jefferson",
    citation: "Motivational Speech",
    year: 2004
  },
  {
    quote: "Try not to become a man of success. Rather become a man of value.",
    source: "Thomas Jefferson",
    citation: "Motivational Speech",
    year: 1934
  },
  {
    quote: "Do one thing every day that scares you.",
    source: "Anonymous",
    citation: "Motivational Speech",
    year: "N/A"
  }
];

let colors  =[
  {
    background: "#ff0000"
  },
  {
    background: "pink"
  },
  {
    background: "black"
  },
  {
    background: "blue"
  }

]

// Create the getRandomQuote function and name it getRandomQuote

function getRandomQuote(array) {
  let quoteNumber = Math.floor(Math.random() * quotes.length); //generates number between 0 to last index number
  return randomQuote = array[quoteNumber]; //return the random item  

}

//Create a function to change background
function backgroundChange() {
  let randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}

//Create the printQuote funtion and name it printQuote

function printQuote() {

  let printedQuote = getRandomQuote(quotes);
  let printedColor = backgroundChange();

  let displayInfo = 
  `<p class="quote"> ${printedQuote.quote} </p>
    <p class="source"> ${printedQuote.source}
  <span class="citation"> ${printedQuote.citation} </span>
  <span class="year"> ${printedQuote.year} </span>
 </p>`;

 document.getElementById('quote-box').innerHTML = displayInfo;
 document.body.style.backgroundColor = printedColor.background;
document.getElementById("loadQuote").style.background = printedColor.button;

}

printQuote();
// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

  document.getElementById('loadQuote').addEventListener("click", printQuote, false);

