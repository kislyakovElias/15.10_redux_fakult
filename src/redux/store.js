import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import kanban from './reducer'

const store = createStore(
    kanban,
    composeWithDevTools(
    applyMiddleware()
));

export default store;