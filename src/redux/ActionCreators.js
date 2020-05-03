import * as ActionTypes from './ActionTypes';
// Adds Bookig 
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

//index = index of the car object which is selected. It index will be used to update the state of the selected one 
export const changeavailability = (index) => ({
    type: ActionTypes.CHANGE_AVAILABILITY,
    payload: {
        index: index
    }
});