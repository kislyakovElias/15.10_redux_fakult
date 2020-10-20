import React from 'react';
import './App.css';
import {connect} from "react-redux";
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.css'
//import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

function List(props) {


  return (
    <div className="col">

        {props.cards
            .filter(el => el.status === props.status)
            .sort((a, b) => b.priority - a.priority )
            .map(el => <Card key={el._id} id={el._id} name={el.name} priority={el.priority} stutus={el.status}/>
            )}

    </div>
  );
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})

// const mapDispatchToProps = (dispatch) => ({
//     addCard: () => dispatch({type:'ADD_CARD'}),
//     deleteCard: (cardId) => dispatch({type:'DELETE_CARD', payload: cardId})
// }) mapDispatchToProps

export default connect(mapStateToProps) (List);
