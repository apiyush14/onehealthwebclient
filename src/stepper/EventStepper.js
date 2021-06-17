import React, {useState} from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import OrganizerDetailsScreen from '../screens/OrganizerDetailsScreen';
import EventBasicDetailsScreen from '../screens/EventBasicDetailsScreen';
import EventAdvancedDetailsScreen from '../screens/EventAdvancedDetailsScreen';
import EventPreviewScreen from '../screens/EventPreviewScreen';

const EventStepper=(props)=>{
 
const [activeStep,setActiveStep]=useState(0);

const [eventDetails,setEventDetails]=useState(
{
  eventId:null,
	eventOrganizerFirstName:"",
	eventOrganizerLastName:"",
	eventOrganizerContactNumber:"",
	eventName:"",
  eventDescription: "",
  eventStartDate: new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0],
  eventEndDate: new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0],
  eventDisplayPic: "",
  eventCoverPic: "",
  eventMetricType: "Distance",
  eventMetricValue: "1",
  isEventApproved: "N"
});

const [eventDisplayPic,setEventDisplayPic]=useState(null);

 const actionOnChange=(event)=>{	
  setEventDetails((prevState)=>{
  	if("eventOrganizerFirstName"===event.target.id){
  	prevState.eventOrganizerFirstName=event.target.value;
  }
  else if("eventOrganizerLastName"===event.target.id){
  	prevState.eventOrganizerLastName=event.target.value;
  }
  else if("eventOrganizerContactNumber"===event.target.id){
  	prevState.eventOrganizerContactNumber=event.target.value;
  }
  else if("eventName"===event.target.id){
  	prevState.eventName=event.target.value;
  }
  else if("eventDescription"===event.target.id){
  	prevState.eventDescription=event.target.value;
  }
  else if("eventStartDate"===event.target.id){
  	prevState.eventStartDate=event.target.value;
  }
  else if("eventEndDate"===event.target.id){
  	prevState.eventEndDate=event.target.value;
  }
  else if("eventMetricType"===event.target.name){
    prevState.eventMetricType=event.target.value;
  }
  else if("eventMetricValue"===event.target.name){
    prevState.eventMetricValue=event.target.value;
  }
  	return prevState;
  });

    if("eventCoverPic"===event.target.id){
    setEventDisplayPic(event.target.files[0])
    const formData=new FormData();
    formData.append("file",event.target.files[0],event.target.files[0].name);
    console.log(formData);
    axios.post('http://192.168.1.66:7001/event-details/uploadEventDisplayImage/'+eventDetails.eventId+'?imageType=COVER', formData);
  }

  if("eventDisplayPic"===event.target.id){
  	setEventDisplayPic(event.target.files[0])
  	const formData=new FormData();
  	formData.append("file",event.target.files[0],event.target.files[0].name);
  	console.log(formData);
  	axios.post('http://192.168.1.66:7001/event-details/uploadEventDisplayImage/'+eventDetails.eventId+'?imageType=DISPLAY', formData);
  }
 };

 const stepStyle={
  width: '100%'
 };

const backButtonStyle={
 marginTop: 10,
 marginBottom: 10,
 color: 'white',
 backgroundColor: 'black'
};

 const nextButtonStyle={
 marginLeft: 10,
 marginTop: 10,
 marginBottom: 10,
 color: 'white',
 backgroundColor: 'black'
};

const onNextClick=(step)=>{
 setActiveStep((activeStep)=>activeStep+1);
 var eventStartDateJson=new Date(eventDetails.eventStartDate).toJSON();
 var eventEndDateJson=new Date(eventDetails.eventEndDate).toJSON();
 var eventDetailsRequest={
  eventId:eventDetails.eventId,
  eventOrganizerFirstName:eventDetails.eventOrganizerFirstName,
  eventOrganizerLastName:eventDetails.eventOrganizerLastName,
  eventOrganizerContactNumber:eventDetails.eventOrganizerContactNumber,
  eventName:eventDetails.eventName,
  eventDescription: eventDetails.eventDescription,
  eventStartDate:eventStartDateJson,
  eventEndDate:eventEndDateJson,
  eventCoverPic: eventDetails.eventCoverPic,
  eventDisplayPic: eventDetails.eventDisplayPic,
  eventMetricType: eventDetails.eventMetricType,
  eventMetricValue: eventDetails.eventMetricValue,
  isEventApproved: eventDetails.isEventApproved
 }

 if(step===4){
   eventDetailsRequest.isEventApproved="Y";
 }

 axios.put('http://192.168.1.66:7001/event-details/addEvent', {eventDetails:eventDetailsRequest})
 .then(response=>setEventDetails((prevState)=>{
  prevState.eventId=response.data;
  return prevState;
 }))
 .catch(err=>{
  setActiveStep((activeStep)=>activeStep-1);
  console.log(err);
 });
 /*axios.get('http://192.168.1.66:7001/run-details/getRuns/piyush123?page=1')
 .then(response => console.log(response))
 .catch(err => console.log(err));*/
};


 return(
   <Stepper activeStep={activeStep} orientation='vertical'>
    <Step key={1} style={stepStyle}>
     <StepLabel>
      <Typography variant="h6" gutterBottom>
        Organizer Details
      </Typography>
     </StepLabel>
     <StepContent><OrganizerDetailsScreen actionOnChange={actionOnChange} eventState={eventDetails}/>
       <Button style={nextButtonStyle} onClick={()=>{onNextClick(1)}}>
        Next
       </Button>
     </StepContent>
    </Step>
    <Step key={2} style={stepStyle}>
     <StepLabel>
      <Typography variant="h6" gutterBottom>
        Event Basic Details
      </Typography>
     </StepLabel>
     <StepContent><EventBasicDetailsScreen actionOnChange={actionOnChange} eventState={eventDetails}/>
      <Button style={backButtonStyle} onClick={()=>{setActiveStep((activeStep)=>activeStep-1)}}>
        Back
       </Button>
      <Button style={nextButtonStyle} onClick={()=>{onNextClick(2)}}>
        Next
       </Button>
     </StepContent>
    </Step>
    <Step key={3} style={stepStyle}>
     <StepLabel>
      <Typography variant="h6" gutterBottom>
        Event Advanced Details
      </Typography>
     </StepLabel>
     <StepContent><EventAdvancedDetailsScreen actionOnChange={actionOnChange} eventDetails={eventDetails}/>
      <Button style={backButtonStyle} onClick={()=>{setActiveStep((activeStep)=>activeStep-1)}}>
        Back
       </Button>
      <Button style={nextButtonStyle} onClick={()=>{onNextClick(3)}}>
        Next
       </Button>
     </StepContent>
    </Step>

    <Step key={4} style={stepStyle}>
     <StepLabel>
      <Typography variant="h6" gutterBottom>
        Event Preview
      </Typography>
     </StepLabel>
     <StepContent><EventPreviewScreen eventDetails={eventDetails}/>
      <Button style={backButtonStyle} onClick={()=>{setActiveStep((activeStep)=>activeStep-1)}}>
        Back
       </Button>
      <Button style={nextButtonStyle} onClick={()=>{onNextClick(4)}}>
        Approve
       </Button>
     </StepContent>
    </Step>
   </Stepper>
  );
};

export default EventStepper;