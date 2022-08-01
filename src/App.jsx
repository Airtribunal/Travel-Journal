import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import cardsData from './data/CardsData';
import './App.css';

const App = () => {

  const cards = cardsData.map((card) => {
    return (
      <Card 
       key=""
       card={card}
      />
    )
    
  }) 

  return (
    <div>
      <Header />
      {cards}
    </div>
  );
}

export default App;
