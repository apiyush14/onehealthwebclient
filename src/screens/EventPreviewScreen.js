import React from 'react';
import 'fontsource-roboto';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Card from '@material-ui/core/Card';

const EventPreviewScreen=(props)=>{

 return(
  <React.Fragment>
  <Container style={styles.containerStyle}>
    <Card style={styles.cardStyle}>
     <CardMedia 
      style={styles.cardMediaContainerStyle}
      component="img"
      image={"http://192.168.1.66:7001/event-details/getDisplayImage/"+props.eventDetails.eventId+"?imageType=DISPLAY"}
     >
     </CardMedia>

     <CardMedia 
      style={styles.cardCoverContainerStyle}
      component="img"
      image={"http://192.168.1.66:7001/event-details/getDisplayImage/"+props.eventDetails.eventId+"?imageType=COVER"} 
     >
     </CardMedia>

      <InputLabel style={styles.overlayEventNameTextStyle}>{props.eventDetails.eventName}</InputLabel>
      <InputLabel style={styles.overlayEventMetricTextStyle}>Distance {props.eventDetails.eventMetricValue} KM</InputLabel>
      <InputLabel style={styles.overlayEventStartDateTextStyle}>{props.eventDetails.eventStartDate}</InputLabel>
      <InputLabel style={styles.overlayEventEndDateTextStyle}>{props.eventDetails.eventEndDate}</InputLabel>
     </Card>

    </Container>
   </React.Fragment>
  );
};

  const styles = {
    containerStyle : {
      marginTop: 10,
      backgroundColor: "white",
      width: '50%',
      alignItems: 'center',
      justify: 'center',
    },
    cardStyle : {
      position: 'relative'
    },
    cardMediaContainerStyle : {
      backgroundColor: "lightgrey",
      width: 250,
      height: 420
    },
    overlayEventNameTextStyle : {
      position: 'absolute',
      top: '80%',
      left: '70px',
      color: 'white'
    },
    overlayEventMetricTextStyle : {
      position: 'absolute',
      top: '84%',
      left: '70px',
      color: 'white'
    },
    overlayEventStartDateTextStyle : {
      position: 'absolute',
      top: '88%',
      left: '70px',
      color: 'white'
    },
    overlayEventEndDateTextStyle : {
      position: 'absolute',
      top: '92%',
      left: '70px',
      color: 'white'
    },
    cardCoverContainerStyle : {
      position: 'absolute',
      backgroundColor: "lightgrey",
      width: 125,
      height: 80,
      borderRadius: 20,
      top: '10px',
      left: '2px'
    }
  }

export default EventPreviewScreen;