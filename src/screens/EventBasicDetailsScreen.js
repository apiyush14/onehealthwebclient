import React from 'react';
import 'fontsource-roboto';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';


const EventBasicDetailsScreen=(props)=>{

const cardContainerStyle={
 backgroundColor:"lightgrey",
};

const containerStyle={
 marginTop: 10,
 backgroundColor:"white",
 width:'50%',
 alignItems: 'center',
 justify: 'center',
};

 return(
  <React.Fragment>
  <Container style={containerStyle}>
   <Card style={cardContainerStyle} variant="outlined">
       <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item xs={6} sm={5}>
          <TextField
            required
            id="eventName"
            name="eventName"
            label="Event Name"
            fullWidth
            defaultValue={props.eventState.eventName}
            onChange={(event)=>props.actionOnChange(event)}
          />
        </Grid>
       </Grid>
       <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item xs={6} sm={5}>
          <TextField
            required
            id="eventDescription"
            name="eventDescription"
            label="Event Description"
            fullWidth
            multiline={true}
            rows={3}
            defaultValue={props.eventState.eventDescription}
            onChange={(event)=>props.actionOnChange(event)}
          />
        </Grid>
       </Grid>
       <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item xs={6} sm={5}>
          <TextField
            required
            id="eventStartDate"
            name="eventStartDate"
            label="Event Start Date"
            type="datetime-local"
            fullWidth
            InputLabelProps={{
             shrink: true,
            }}
            defaultValue={props.eventState.eventStartDate}
            onChange={(event)=>props.actionOnChange(event)}
          />
        </Grid>
       </Grid>
       <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item xs={6} sm={5}>
          <TextField
            required
            id="eventEndDate"
            name="eventEndDate"
            label="Event End Date"
            type="datetime-local"
            fullWidth
            InputLabelProps={{
             shrink: true,
            }}
            defaultValue={props.eventState.eventEndDate}
            onChange={(event)=>props.actionOnChange(event)}
          />
        </Grid>
       </Grid>
     </Card>
    </Container>
   </React.Fragment>
  );
};

export default EventBasicDetailsScreen;