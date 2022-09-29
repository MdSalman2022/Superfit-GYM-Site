import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Content = () => {
    const [cards, setCard] = useState([])

    useEffect(() => {
        fetch('exerciseDB.json')
            .then(res => res.json())
            .then(data => setCard(data)
            )
    }, [])


    return (
        <div >
            <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    cards.map(card =>
                        <Card key={card.id} card={card} ></Card>
                    )
                }
            </div>

        </div>
    );
};

export default Content;