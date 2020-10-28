import React from 'react';
import CardItem from "./CardItem";
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css'
import { Modal, Button, ModalBody, ModalFooter, ModalHeader,
    Label, Input , } from 'reactstrap';
import './index.css'

function Column(props) {

    const {cards, column} = props;

    return (
        <div className='col-4 col-sm'  style={{border: '1px solid'}}
        >
            <ModalHeader className='hui' style={{border: 'solid', color: 'aquamarine', background: 'green' }}> {column.status.toUpperCase()} </ModalHeader>

            {cards
                .filter(el => el.status === column.status)
                .sort((a, b) => b.priority - a.priority)
                .map(el => <CardItem key={el._id} card={el}/>)}
        </div>
    );
}



export default Column;
