/*
Model Class for Event Details
*/

class EventDetails{
     constructor(eventId,eventOrganizerName,eventOrganizerContactNumber,eventName,eventDescription,eventStartDate,eventEndDate,eventMetricType,eventMetricValue){
      this.eventId=eventId;
      this.eventOrganizerName=eventOrganizerName;
      this.eventOrganizerContactNumber=eventOrganizerContactNumber;
      this.eventName=eventName;
      this.eventDescription=eventDescription;
      this.eventStartDate=eventStartDate;
      this.eventEndDate=eventEndDate;
      this.eventMetricType=eventMetricType;
      this.eventMetricValue=eventMetricValue;
     }
}

export default EventDetails;