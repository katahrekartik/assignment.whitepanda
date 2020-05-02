import { BOOKINGS } from '../shared/bookings';
import * as ActionTypes from './ActionTypes';

export const Bookings = (state = BOOKINGS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BOOKING:
            var booking = action.payload;
            booking.id = state.length + 1;
            booking.date = new Date().toISOString();
            // console.log("Booking: ", booking);
            var newstate = state.concat(booking);
            // console.log(newstate);
            return newstate;

        default:
            return state;
    }
};