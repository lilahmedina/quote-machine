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

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());

  //for button to change quote
  const changeQuote = () => {
    setQuote(getRandomQuote());
  }
  
  return (
  <div className="background">
    <div id="quote-box">
      <div className="quote-content">
        <FaQuoteLeft size="30" style={{marginRight: "10px"}} />
        <h2 id="text">{quote.quote}</h2>
        <FaQuoteRight size="30" style={{marginLeft: "10px"}} />
        <h4 id="author">- {quote.author}</h4>
      </div>

      <div className="buttons">
        <a href="https://twitter.com/intent/tweet" 
        target='_blank'
        id="tweet-quote"
        style={{
          backgroundColor: "lightblue",
          marginRight: "15px",
        }} > <FaTwitter color="vanilla"></FaTwitter> 
        </a>
        
        <button id="new-quote" onClick={changeQuote}>Change Quote</button>
      </div>
    </div>
  </div>
  )
}

export default App;
