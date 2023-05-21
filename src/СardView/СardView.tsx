import React from "react";
import '../cards.css';

interface ICardViewProps {
    rank: string;
    suit: string;
}

const CardView: React.FC<ICardViewProps> = props => {
    const cardClasses = `card ${props.rank} ${props.suit}`

    if (props.suit = 'diams') {
        '♦'
    } else if (props.suit = 'hearts') {
        '♥'
    } else if (props.suit = 'clubs') {
        '♣'
    } else {
        '♠'
    }
 
    return (
        <div className="CardView">
            <div className="playingCards faceImages">
                <span className={cardClasses}>
                    <span className="rank"> {props.rank} </span>
                    <span className="suit"> {props.suit} </span>
                </span>
            </div>
        </div>
    )
};

export default CardView;