import React from 'react';
import {connect} from 'react-redux';
import {Card, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import {cardDeleteById, moveRight} from "./Actions";

function CardItem(props) {

    const {card} = props;
    const {name, status, priority, _id, description} = card;

    const deleteButtonHandler = () =>{
        props.deleteCard(_id)
    }


    return (
        <Card>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>{'Description: '}{description}</CardSubtitle>
                <br/>
                <Button disabled={priority === 10}  onClick={()=>props.changePriority(_id, +1)}>Up</Button>
                <CardText>{priority}</CardText>
                <Button disabled={priority === 1}  onClick={()=>props.changePriority(_id, -1)}>Dow</Button>
                <br/>
                <br/>
                <Button disabled={status === 'todo'}  onClick={()=>props.moveCard(_id, -1)}>Left</Button>
                <Button color='warning' onClick={deleteButtonHandler}> Delete</Button>
                <Button disabled={status === 'done'} onClick={()=>props.moveRight(card, props.columns)} >Right</Button>
            </CardBody>
        </Card>
    );
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})

const mapDispatchToProps = (dispatch) => ({
    moveCard: (cardId, value) => dispatch({type: 'MOVE_STATUS', payload: {cardId, value}}),
    changePriority: (cardId, value) => dispatch({type: 'CHANGE_PRIORITY', payload: {cardId, value}}),
    // deleteCard: (cardId) => dispatch({type: 'DELETE_CARD', payload: cardId})
    deleteCard: (cardId) => dispatch(cardDeleteById(cardId)),
    moveRight: (card,columns) => dispatch(moveRight(card, columns))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
