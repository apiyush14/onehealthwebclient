import {ADD_EVENT,UPDATE_EVENT} from './event-actions';
import EventDetails from '../models/eventdetails';

const initialState={
	eventDetails: null
};

export default (state=initialState, action)=>{
	switch(action.type) {
	    case ADD_EVENT:
	    let newEvent=new EventDetails(action.event.eventId,action.event.eventOrganizerName,action.event.eventOrganizerContactNumber,action.event.eventName,action.event.eventDescription,action.event.eventStartDate,action.event.eventEndDate,action.event.eventMetricType,action.event.eventMetricValue);
        return{...state, 
            eventDetails: newEvent
        };
        case UPDATE_EVENT:
	    return state;

		default:
		return state;
	}
};