import { createStore, combineReducers } from 'redux';
import { Cars } from './cars';
import { Bookings } from './bookings';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            cars: Cars,
            bookings: Bookings,
        })
    );

    return store;
}