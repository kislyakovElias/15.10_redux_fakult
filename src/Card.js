import React from 'react';
import './App.css';
import {connect} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css'
//import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

function Card(props) {

console.log('card', props)
  return (
    <div className="col">

        {props.name}
        {'(. )-( .)'}
        {props.priority}
        <br/><br/>
        <button disabled={props.priority === 10}  onClick={()=> props.changePriority(props.id, + 1)}>Up1</button>
        <button disabled={props.priority === 1} onClick={()=> props.changePriority(props.id, - 1)}>Down2</button>
    <br/>
        <button disabled={props.stutus === 'todo'}  onClick={()=> props.changeStatus(props.id, - 1)}>left</button>
        <button disabled={props.stutus === 'done'} onClick={()=> props.changeStatus(props.id, + 1)}>right</button>
        <button onClick={()=> props.deleteCard(props.id)}>Delete</button>

    </div>
  );
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})

const mapDispatchToProps = (dispatch) => ({
    changeStatus: (cardId, value) => dispatch({type:'CHANGE_STATUS', payload: {cardId, value}}),
    changePriority: (cardId, value) => dispatch({type:'CHANGE_PRIORITY', payload: {cardId, value}}),
    deleteCard: (cardId) => dispatch({type:'DELETE_CARD', payload: cardId})
})

export default connect(mapStateToProps, mapDispatchToProps) (Card);
