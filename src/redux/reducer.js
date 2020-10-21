const initialState = {
    cards: [
        {
            _id: 1,
            name: 'Ilu',
            status: 'todo',
            priority: 2
        },{
            _id: 2,
            name: 'Gina',
            status: 'todo',
            priority: 3
        },{
            _id: 3,
            name: 'Benja',
            status: 'progress',
            priority: 5
        },
        {
            _id: 4,
            name: 'Pro',
            status: 'done',
            priority: 2
        },
        {
            _id: 5,
            name: 'Pedro',
            status: 'done',
            priority: 2
        },
        {
            _id: 6,
            name: 'Peppero',
            status: 'done',
            priority: 3
        },
        {
            _id: 7,
            name: 'Chadd',
            status: 'review',
            priority: 4
        }
    ],
    columns: [
        {
            status: 'todo',
            _id: 1
        },
        {
            status: 'progress',
            _id: 2
        },
        {
            status: 'review',
            _id: 3
        },
        {
            status: 'done',
            _id: 4
        },
    ]
}

const kanban = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_CARD' :
            return {
                ...state,
                cards: [...state.cards, {
                    _id: Math.random(),
                    name: 'New',
                    status: 'todo',
                    priority: 1
                }]
            }

        case 'DELETE_CARD' :
            const newCards = state.cards.filter(el => el._id !== action.payload)
            return {
                ...state,
                cards: newCards
            }

        case 'MOVE_STATUS' :
            const newArr = state.cards.map(el =>{
                if(el._id === action.payload.cardId) {
                    const colStatuses = state.columns.map(el => el.status)
                    return {...el, status: colStatuses[colStatuses.indexOf(el.status) + action.payload.value]}
                } else{
                    return el
                }
            })
            return{
                ...state,
                cards:newArr
            }

        case 'CHANGE_PRIORITY' :
            const newPrior = state.cards.map(el =>{
                if(el._id === action.payload.cardId) {
                    return {...el, priority: el.priority + action.payload.value}
                } else{
                    return el
                }
            })
            return{
                ...state,
                cards:newPrior
            }


        default:
            return state
    }
}

export default kanban;