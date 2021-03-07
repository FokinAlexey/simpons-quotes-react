import React from "react";
import QuoteCard from '../components/QuoteCard'

const quotes = [
    {
        quote: "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
        character: "Homer Simpson",
        image: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
    },
    {
        quote: "Nothing you say can upset us. We're the MTV generation.",
        character: "Bart Simpson",
        image: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
    },
    {
        quote: "That's where I saw the leprechaun...He told me to burn things.",
        character: "Ralph Wiggum",
        image: "https://upload.wikimedia.org/wikipedia/en/1/14/Ralph_Wiggum.png"
    },
    {
        quote: "Hello, Simpson. I'm riding the bus today because Mother hid my car keys to punish me for talking to a woman on the phone.",
        character: "Principal Skinner",
        image: "https://upload.wikimedia.org/wikipedia/en/3/3a/Seymour_Skinner.png"
    }
];

const QuoteList = () => (
    <div>
        {quotes.map(item => (
            <QuoteCard quote={item.quote} image={item.image} character={item.character} />

        ))}
    </div>
);

export default QuoteList;