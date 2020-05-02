import { BOOKINGS } from '../shared/bookings';
import * as ActionTypes from './ActionTypes';

export const Bookings = (state = BOOKINGS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BOOKING:
            var booking = action.payload;
            booking.id = state.length;
            booking.date = new Date().toISOString();
            console.log("Booking: ", booking);
            return state.concat(booking);

        default:
            return state;
    }
};