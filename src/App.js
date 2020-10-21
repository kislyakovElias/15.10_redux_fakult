import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Board from "./Board";
import {Container, Button} from "reactstrap"
import {setCards, createCards, getColumns} from "./Actions";
import Controller from "./Controller";


function App(props) {

    useEffect(
        () => {
            console.log('useEffect On')
            props.getCards()
            props.getColumns()
    },[])


 //   console.log(props)


    return (
        <Container>
            <Controller createCard={props.createCard}/>
            {/*<Button onClick={props.addCard}>Add Card</Button>*/}
            <Board cards={props.cards} columns={props.columns}/>

        </Container>
    );
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})

const mapDispatchToProps = (dispatch) => ({
    //addCard: () => dispatch({type: 'ADD_CARD'}),
    getCards: () => dispatch(setCards()),
    createCard: (input) => dispatch(createCards(input)),
    getColumns: () => dispatch(getColumns())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
