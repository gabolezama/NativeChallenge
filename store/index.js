//redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//reducers
import UserReducer from './reducers/user.reducer'
import ConmoditesReducer from './reducers/conmodites.reducer';

const RootReducer = combineReducers({
    user: UserReducer,
    conmodites: ConmoditesReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk))