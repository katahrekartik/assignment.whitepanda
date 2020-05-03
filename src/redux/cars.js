import { CARS } from '../shared/cars';
import * as ActionTypes from './ActionTypes';

export const Cars = (state = CARS, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_AVAILABILITY:
            //index = index of the car object which is selected. It index will be used to update the state of the selected one 
            var index = action.payload.index;
            //New index will be use in slice function
            var newIndex = parseInt(index) + 1;
            // console.log(newIndex);
            //create new state and udpate the selected index state(update availability)
            var newstate = [...state.slice(0, index),
                {...state[index], availability: !state[index].availability },
                ...state.slice(newIndex)
            ];
            // console.log(newstate);
            return newstate;

        default:
            return state;
    }
};