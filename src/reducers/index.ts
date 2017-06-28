import {combineReducers} from 'redux';
import currentUser from './currentUser';
import scannedUser from './scannedUser';
import users from './users';
import bookingStatistics from './bookingStatistics'

export default combineReducers({
    currentUser,
    scannedUser,
    users,
    bookingStatistics
})