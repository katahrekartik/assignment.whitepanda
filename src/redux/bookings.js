import { BOOKINGS } from '../shared/bookings';
import * as ActionTypes from './ActionTypes';

export const Bookings = (state = BOOKINGS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BOOKING:
            //store the parameters recived by the form
            var booking = action.payload;
            //Generate the id 
            booking.id = state.length + 1;
            // console.log("Booking: ", booking);
            //create the new state to be sent
            var newstate = state.concat(booking);
            return newstate;

        default:
            return state;
    }
};