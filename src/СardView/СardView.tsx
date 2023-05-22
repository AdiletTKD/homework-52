import React from "react";
import '../cards.css';

interface ICardViewProps {
    rank: string;
    suit: string;
}

const CardView: React.FC<ICardViewProps> = ({rank, suit}) => {
    const suitSymbol: { [key: string]: string } = {
        diams: '♦',
        hearts: '♥',
        clubs: '♣',
        spades: '♠'
    }
  
    return (
        <span className={`card card-${rank.toLowerCase()} ${suit}`}>
            <span className="rank"> {rank} </span>
            <span className="suit"> {suitSymbol[suit]} </span>
        </span>
    );
};

export default CardView;