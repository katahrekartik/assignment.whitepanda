import * as ActionTypes from './ActionTypes';

export const addbooking = (carId, name, contactNo, issueDate, returnDate) => ({
    type: ActionTypes.ADD_BOOKING,
    payload: {
        carId: carId,
        name: name,
        contactNo: contactNo,
        issueDate: issueDate,
        returnDate: returnDate
    }
});

export const changeavailability = (index) => ({
    type: ActionTypes.CHANGE_AVAILABILITY,
    payload: {
        index: index
    }
});