//import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import './styleSheet.css'


function App() {
  const [quotes, setQuote] = useState("");


  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length)
        setQuote(data[randomNum]);
      }
      );
  }
  useEffect(() => {
    getQuotes();
  }, [])
  return (
    <div className='backGround'>
      <div className='quoteArea'>
        <strong>
        <p>"{quotes.text}" <br></br>
        -{quotes.author}</p> </strong>
        <div >
          <button onClick={getQuotes}>New Quotes</button>
        </div>

      </div>
    </div>
  )
}

export default App;
