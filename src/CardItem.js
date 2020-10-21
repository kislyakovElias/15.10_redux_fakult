import React from 'react';
import {connect} from 'react-redux';
import {Card, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

function CardItem(props) {

    const {card} = props;
    const {name, status, priority, _id} = card;

    const deleteButtonHandler = () =>{
        props.deleteCard(_id)
    }


    return (
        <Card>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>{'Task status: '}{status}</CardSubtitle>
                <br/>
                <Button disabled={priority === 10}  onClick={()=>props.changePriority(_id, +1)}>Up</Button>
                <CardText>{priority}</CardText>
                <Button disabled={priority === 1}  onClick={()=>props.changePriority(_id, -1)}>Dow</Button>
                <br/>
                <br/>
                <Button disabled={status === 'todo'}  onClick={()=>props.moveCard(_id, -1)}>Left</Button>
                <Button onClick={deleteButtonHandler}> Delete</Button>
                <Button disabled={status === 'done'} onClick={()=>props.moveCard(_id, +1)} >Right</Button>
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
    deleteCard: (cardId) => dispatch({type: 'DELETE_CARD', payload: cardId})
})

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
