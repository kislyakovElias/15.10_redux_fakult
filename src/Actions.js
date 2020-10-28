import axios from 'axios'

export function setCards(){
    return (dispatch) => {
        axios.get('http://nazarov-kanban-server.herokuapp.com/card')
            .then(
                (res) => {
                    dispatch ({
                        type: 'SET_CARDS',
                        payload: res.data,
                    });
                    console.log(res, 'set')
                })
            .catch(
                (err)=>
                    console.log(err, 'not set')
            )
    }
}
export function cardDeleteById(cardId){
    return (dispatch) => {
        axios({
            method: 'DELETE',
            url:`http://nazarov-kanban-server.herokuapp.com/card/${cardId}`
        })
            .then((res) =>dispatch(setCards()))
            .catch(
                (err)=>
                    console.log(err, 'not ok')
            )
    }
}

export function getColumns(){
    return (dispatch) => {
        axios.get('http://nazarov-kanban-server.herokuapp.com/column')
            .then(
                (res) => {
                    dispatch ({
                        type: 'GET_COLUMNS',
                        payload: res.data,
                    });
                    console.log(res, 'set')
                })
            .catch(
                (err)=>
                    console.log(err, 'not set')
            )
    }
}



export function createCards(input){
    return (dispatch) => {
        axios
            .post('http://nazarov-kanban-server.herokuapp.com/card', input)
            .then(res => {
                dispatch(setCards())
                // axios.get('http://nazarov-kanban-server.herokuapp.com/card')
                //     .then(
                //         (res) => {
                //             dispatch ({
                //                 type: 'SET_CARDS',
                //                 payload: res.data,
                //             });
                //         })
                //     .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

    }
}

export function moveRight(card, columns){
const colStatuses = columns.map(el => el.status);
const status = colStatuses[colStatuses.indexOf(card.status) + 1];


        return (dispatch) => {
            axios.patch(`http://nazarov-kanban-server.herokuapp.com/card/${card._id}`, {status})
                .then((res) =>dispatch(setCards()))
                .catch(
                    (err)=>
                        console.log(err, 'not ok')
                )
        }

}

export function moveLeft(card, columns){
    const colStatuses = columns.map(el => el.status);
    const status = colStatuses[colStatuses.indexOf(card.status) - 1];


    return (dispatch) => {
        axios.patch(`http://nazarov-kanban-server.herokuapp.com/card/${card._id}`, {status})
            .then((res) =>dispatch(setCards()))
            .catch(
                (err)=>
                    console.log(err, 'not ok')
            )
    }

}

export function priorityChange(card, value){
        const priority = card.priority + value;


    return (dispatch) => {
        axios.patch(`http://nazarov-kanban-server.herokuapp.com/card/${card._id}`, {priority})
            .then((res) =>dispatch(setCards()))
            .catch(
                (err)=>
                    console.log(err, 'not ok')
            )
    }

}

export function editCard(card, input){

    return (dispatch) => {
        axios.patch(`http://nazarov-kanban-server.herokuapp.com/card/${card._id}`, input)
            .then((res) =>dispatch(setCards()))
            .catch(
                (err)=>
                    console.log(err, 'not ok')
            )
    }

}