import {combineReducers, createStore} from 'redux';
import chatListReducer from '../reducers/chatList';
import dataReducer from '../reducers/data';

const rootReducer = combineReducers({
    chatListReducer, 
    dataReducer
})

const store = createStore(rootReducer);
console.log(store.getState())
export default store;