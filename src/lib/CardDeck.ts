import React from "react";
import Card from "./Card";

class CardDeck {
    private readonly ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    private readonly suits = ['♦', '♥', '♠', '♣'];
    public deck: Card[] = []; 

    constructor() {
        this.suits.forEach(suit => {
            this.ranks.forEach(rank => {
                const card = new Card(rank, suit);
                this.deck.push(card);
            });
        });
    }

    getCard(): Card {
        const randomIndex = Math.floor(Math.random() * this.deck.length);
        const randomCard = this.deck[randomIndex];

        this.deck.splice(randomIndex, 1);
        return randomCard;
    }

    getCards(howMany: number): Card[] {
        const сards: Card[] = [];

        for (let i = 0; i < 5; i++) {
            const card = this.getCard();
            сards.push(card);
        }
        return сards;
    }
}

export default CardDeck;