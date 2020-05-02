import * as ActionTypes from './ActionTypes';

export const addbooking = (carModelId, name, contactNo, issueDate, returnDate) => ({
    type: ActionTypes.ADD_BOOKING,
    payload: {
        carModelId: carModelId,
        name: name,
        contactNo: contactNo,
        issueDate: issueDate,
        returnDate: returnDate
    }
});