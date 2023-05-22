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
        <div className="CardView">
            <div className="playingCards faceImages">
                <span className={`card card-${rank} ${suit}`}>
                    <span className="rank"> {rank} </span>
                    <span className="suit"> {suitSymbol[suit]} </span>
                </span>
            </div>
        </div>
    );
};

export default CardView;