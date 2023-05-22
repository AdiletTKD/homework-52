import React, { useState } from 'react';
import CardView from './СardView/СardView';
import './cards.css';
import './App.css';
import CardDeck from './lib/CardDeck';
import Card from './lib/Card';


function App() {
  const [cards, setCards] = useState<Card[]>([]);

  const showCards = () => {
    const cardDeck = new CardDeck();
    const newCards = cardDeck.getCards(5);
    setCards(newCards);
  }

  if (cards.length === 0) {
    return <button onClick={showCards}>Раздать карты</button>;
  }

  console.log(cards);
  
  return (
    <div className="App">
      <button onClick={showCards}>Раздать карты</button>

      <div className='playingCards faceImages'>
        {cards.map((card, index) => (
          <CardView key={index} rank={card.rank} suit={card.suit} />
        ))}
      </div>
    </div>
  );
}

export default App;
