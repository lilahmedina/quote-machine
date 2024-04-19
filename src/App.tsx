import { useState } from 'react';
import quotes from "./assets/quotes.json";
import {FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import './App.css';




interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];
  //console.log(colors[0]);
  return colors[Math.floor(Math.random() * colors.length)];
  
}

const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  //for button to change quote and color 
  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  }
  
  return (
  <div className="background" 
      style={{ backgroundColor: randomColor, transition }}>
    <div id="quote-box" >
      <div className="quote-content" 
        style={{ color: randomColor, transition }}>
        <h2 id="text">
        <FaQuoteLeft size="30" style={{marginRight: "10px"}} />
        {quote.quote}
        <FaQuoteRight size="30" style={{marginLeft: "10px"}} /></h2>
        <h4 id="author">- {quote.author}</h4>
      </div>

      <div className="buttons">
        <a href="https://twitter.com/intent/tweet" 
        target='_blank'
        id="tweet-quote"
        style={{
          backgroundColor: "dodgerblue",
          marginRight: "15px",
          transition, 
        }} > 
        
        <FaTwitter color="vanilla"></FaTwitter> 
        </a>
        
        <button id="new-quote" onClick={changeQuote}
        style={{ backgroundColor: randomColor, transition }}
        >Change Quote</button>

      </div>
    </div>
  </div>
  )
}

export default App;
