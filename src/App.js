import React from 'react';
import {connect} from 'react-redux';
import Board from "./Board";
import {Container, Button} from "reactstrap"


function App(props) {

    console.log(props)

    return (
        <Container>

            <Button onClick={props.addCard}>Add Card</Button>
            <Board cards={props.cards} columns={props.columns}/>

        </Container>
    );
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})

const mapDispatchToProps = (dispatch) => ({
    addCard: () => dispatch({type: 'ADD_CARD'}),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
