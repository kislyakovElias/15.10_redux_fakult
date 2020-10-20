import React from 'react';
import './App.css';
import {connect} from "react-redux";
import Card from "./Card";
import List from "./List";
import 'bootstrap/dist/css/bootstrap.css'
//import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

function App(props) {

    console.log(props.cards)

  return (
    <div  className='container'>
        <div className='row'>

        {props.columns.map(el =>
            <div className='col-4 col-sm' style={{border: "1px solid"}} >
            {el.status.toUpperCase()}
        <h4>
            <List key={el._id} status={el.status}/>
        </h4>
        </div>)}
            <button onClick={()=> props.addCard()}>Add card</button>

            {/*{props.cards.map(el => el.name)}*/}
            {/*{props.columns.map(el=> <List status={el.status} />)}*/}



        </div>


    </div>
  );
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})
const mapDispatchToProps = (dispatch) => ({
    addCard: () => dispatch({type:'ADD_CARD'}),
  //  deleteCard: (cardId) => dispatch({type:'DELETE_CARD', payload: cardId})
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
