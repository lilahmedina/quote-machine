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
        <a href="https://twitter.com/intent/post?hashtags=quotes&related=freecodecamp&text=%22First%2C%20have%20a%20definite%2C%20clear%20practical%20ideal%3B%20a%20goal%2C%20an%20objective.%20Second%2C%20have%20the%20necessary%20means%20to%20achieve%20your%20ends%3B%20wisdom%2C%20money%2C%20materials%2C%20and%20methods.%20Third%2C%20adjust%20all%20your%20means%20to%20that%20end.%22%20Aristotle" 
        target='_blank'
        id="tweet-quote"
        style={{
          backgroundColor: "lightblue",
          marginRight: "15px",


        }} > <FaTwitter color="vanilla"></FaTwitter> 
        </a>
        <button id="newQuote" onClick={changeQuote}>Change Quote</button>
      </div>
    </div>
  </div>
  )
}

export default App;
