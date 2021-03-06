import React from 'react';
import 'fontsource-roboto';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';

const OrganizerDetailsScreen=(props)=>{

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
            id="eventOrganizerFirstName"
            name="eventOrganizerFirstName"
            label="First Name"
            fullWidth
            autoComplete="given-name"
            defaultValue={props.eventState.eventOrganizerFirstName}
            onChange={(event)=>props.actionOnChange(event)}
          />
        </Grid>
       </Grid>
       <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item xs={6} sm={5}>
          <TextField
            required
            id="eventOrganizerLastName"
            name="eventOrganizerLastName"
            label="Last Name"
            fullWidth
            autoComplete="family-name"
            defaultValue={props.eventState.eventOrganizerLastName}
            onChange={(event)=>props.actionOnChange(event)}
          />
        </Grid>
       </Grid>
       <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item xs={6} sm={5}>
          <TextField
            required={false}
            id="eventOrganizerContactNumber"
            name="eventOrganizerContactNumber"
            label="Contact Number"
            fullWidth
            defaultValue={props.eventState.eventOrganizerContactNumber}
            onChange={(event)=>props.actionOnChange(event)}
          />
        </Grid>
       </Grid>
     </Card>
    </Container>
   </React.Fragment>
 );
};

export default OrganizerDetailsScreen;