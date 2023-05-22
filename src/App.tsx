import React from 'react';
import CardView from './СardView/СardView';
import './cards.css';
import './App.css';
import CardDeck from './lib/CardDeck';


function App() {
  const cardDeck = new CardDeck();
  console.log(cardDeck.deck)

  return (
    <div className="App">
      <CardView rank='K' suit='diams' />
      <CardView rank="A" suit="hearts" />
    </div>
  );
}

export default App;
