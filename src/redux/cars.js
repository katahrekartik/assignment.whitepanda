import { CARS } from '../shared/cars';
import * as ActionTypes from './ActionTypes';

export const Cars = (state = CARS, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_AVAILABILITY:
            var index = action.payload.index;
            var newstate = [...state.slice(0, index),
                {...state[index], availability: false },
                ...state.slice(index + 1)
            ];
            console.log(newstate);
            // console.log(state.filter((car) => car.id === car.car.id));
            // state[car.car.id - 1].availability = false
            // console.log(state);
            // console.log(state[car.car.id - 1].availability);
            return newstate;

        default:
            return state;
    }
};