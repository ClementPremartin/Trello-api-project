import './App.css';
import axios from 'axios'
import React, { useState } from 'react';
import Card from "./components/Card.jsx";

function App() {
  const [cards, setCards] = useState([]);
  
  const generateCards = (listId) => {
    axios.get(`https://api.trello.com/1/lists/${listId}/cards?key=${process.env.REACT_APP_TRELLO_KEY}&token=${process.env.REACT_APP_TRELLO_TOKEN}`)
    .then((response) => 
    setCards(response.data))
  }
  console.log(cards);
  
  return (
    <main>
      <div className='container'>
        <div className='row-title'>
          <div className= 'title'>
            <h1>Our favourite Trello cards</h1>
          </div>
        </div>
        <div className='buttons-container'>
        <button className="Comptines" onClick={() => generateCards("6267adf924d93260bd52264b")}>Comptines enfants</button>
        <button className="Metal" onClick={() => generateCards("6267b5e9f27af9730c2f496a")}>Comptines adultes</button>
        </div>
        <div className='row-cards'>
          {cards ? cards.map(e => <Card elements={e} />) : console.log("Oupsi")}
        </div>
      </div>
    </main> 
  );
}

export default App;
