//import Card from "../Card";
import React from "react";

const initialState = {
    cards: [
        {
            _id: 1111,
            name: 'Volki',
            status: 'todo',
            priority: 2
        }, {
            _id: 2222,
            name: 'PEtya',
            status: 'done',
            priority: 2
        }, {
            _id: 2223,
            name: 'Etya',
            status: 'done',
            priority: 3
        }, {
            _id: 2224,
            name: 'Yapet',
            status: 'todo',
            priority: 8
        }, {
            _id: 2225,
            name: 'Aept',
            status: 'done',
            priority: 10
        }, {
            _id: 2226,
            name: 'Epta',
            status: 'done',
            priority: 1
        },
    ],
    columns: [{
        status: 'todo', _id: 1},
        {status: 'progress', _id: 2},
        {status: 'review',   _id: 3},
        {status: 'done',     _id: 4},
    ]};

const kanban = (state = initialState, action) => {
   switch (action.type) {
       case 'ADD_CARD':
           return {
               ...state,
               cards: [...state.cards,{
                   _id: Math.random(),
                   name: 'Qert',
                   status: 'done',
                   priority: 5
               }]
           }
       case 'DELETE_CARD':
           const newCards = state.cards.filter(el => el._id !== action.payload)
           return {
               ...state,
               cards: newCards
           }
       // case 'CHANGE_STATUS':
       //     const newStatus = state.cards.map(el => {
       //         if (el._id === action.payload.cardId)
       //             return {...el, status: state.columns.status[state.columns._id + action.payload.value]}
       //         return el;
       //     })
       //     return {
       //         ...state,
       //         cards: newStatus
       //     }
       case 'CHANGE_PRIORITY':
           const newPriority = state.cards.map(el => {
               if (el._id === action.payload.cardId)
                   return {...el, priority: state.priority + action.payload.value}
               return el;
           })
           return {
               ...state,
               cards: newPriority

           }

       // case 'MOVE_CARD_RIGHT':
       //     const newArr = state.cards.patch(el => el._id !== action.payload)
       //     return {
       //         ...state,
       //         cards: newArr
       //     }
       // case 'PRINT_STATE':
       //     return {
       //         ...state
       //     }
       // case 'MAP_STATUS':
       //         const runMap = this.state.columns.map(el => <Card />)
       //     return  runMap

       default:
    return state
   }

};

export default kanban;