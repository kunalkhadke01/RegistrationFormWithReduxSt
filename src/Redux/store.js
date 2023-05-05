import { combineReducers } from 'redux';
import currentUser from './reducer';

const allData = combineReducers({
    currentUser
})

export default allData;