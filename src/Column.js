import React from 'react';
import CardItem from "./CardItem";
import "bootstrap/dist/css/bootstrap.min.css"

function Column(props) {

    const {cards, column} = props;

    return (
        <div className='col-4 col-sm' style={{border: '1px solid'}}
        >
            {column.status}

            {cards
                .filter(el => el.status === column.status)
                .sort((a, b) => b.priority - a.priority)
                .map(el => <CardItem key={el._id} card={el}/>)}
        </div>
    );
}



export default Column;
