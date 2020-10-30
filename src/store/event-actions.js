export const ADD_EVENT='ADD_EVENT';
export const UPDATE_EVENT='UPDATE_EVENT';

export const addEvent=(eventId,eventOrganizerName,eventOrganizerContactNumber,eventName,eventDescription,eventStartDate,eventEndDate,eventMetricType,eventMetricValue)=>{
 return async dispatch=>{
  dispatch({type: ADD_EVENT, event: {eventId,eventOrganizerName,eventOrganizerContactNumber,eventName,eventDescription,eventStartDate,eventEndDate,eventMetricType,eventMetricValue}});
 };
};

export const updateEvent=(eventId,eventOrganizerName,eventOrganizerContactNumber,eventName,eventDescription,eventStartDate,eventEndDate,eventMetricType,eventMetricValue)=>{
 return async dispatch=>{
  dispatch({type: UPDATE_EVENT, event: {eventId,eventOrganizerName,eventOrganizerContactNumber,eventName,eventDescription,eventStartDate,eventEndDate,eventMetricType,eventMetricValue}});
 };
};