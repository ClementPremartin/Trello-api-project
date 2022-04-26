import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import Card from "./components/Card.jsx";

function App() {
  const [cards, setCards] = useState();
  
  const generateCards = (listId) => {
    axios.get(`https://api.trello.com/1/lists/${listId}/cards?key=5657b57008134bb95cf12e85caa61c71&token=7bac74fb60f2277495928b6ebe21f7e297731b1a4aa870e3a2fed171b59a5e58`)
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
        <button className="Comptines" onClick={() => generateCards("6267adf924d93260bd52264b")}>Comptines enfants</button>
        <button className="Metal" onClick={() => generateCards("6267b5e9f27af9730c2f496a")}>Comptines adultes</button>
        <div className='row-cards'>
          {cards ? cards.map(e => <Card elements={e} />) : console.log("Oupsi")}
        </div>
      </div>
    </main>
  );
}

export default App;
