import React from 'react';
import Column from "./Column";
import {Row} from "reactstrap"

function Board(props) {

    const {cards, columns} = props;

    return (
        <Row>
            {columns

                .map(el => <Column key={el._id} column={el} cards={cards}/>)}
        </Row>
    );
}



export default Board;
