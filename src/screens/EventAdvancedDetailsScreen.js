import React, {useState} from 'react';
import 'fontsource-roboto';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const EventAdvancedDetailsScreen=(props)=>{

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

const [eventMetricType,setEventMetricType]=useState("Distance");
const [eventMetricValue,setEventMetricValue]=useState("1");

const actionOnChange=(event)=>{
  if("eventMetricType"===event.target.name){
    setEventMetricType(event.target.value);
  }
  else if("eventMetricValue"===event.target.name){
    setEventMetricValue(event.target.value);
  }
  props.actionOnChange(event);
};


 return(
  <React.Fragment>
  <Container style={containerStyle}>
   <Card style={cardContainerStyle} variant="outlined">

       <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item xs={6} sm={5}>
          <Select labelId="metricType" 
          id="select"
          name="eventMetricType"
          value={eventMetricType}
          onChange={(event)=>actionOnChange(event)}>
             <MenuItem value="Distance">Distance</MenuItem>
             <MenuItem value="Pace">Pace</MenuItem>
          </Select>
        </Grid>
       </Grid>
       <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item xs={6} sm={5}>
          <Select labelId="metricValue" 
          id="select"
          name="eventMetricValue"
          value={eventMetricValue}
          onChange={(event)=>actionOnChange(event)}>
             <MenuItem value="1">1 KM</MenuItem>
             <MenuItem value="3">3 KM</MenuItem>
             <MenuItem value="5">5 KM</MenuItem>
             <MenuItem value="10">10 KM</MenuItem>
             <MenuItem value="21">21 KM</MenuItem>
             <MenuItem value="42">42 KM</MenuItem>
          </Select>
        </Grid>
       </Grid>
       <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item xs={6} sm={5}>
          <TextField
            required
            id="eventCoverPic"
            name="eventCoverPic"
            label="Event Cover Pic"
            fullWidth
            type="file"
            InputLabelProps={{
             shrink: true,
            }}
            onChange={(event)=>actionOnChange(event)}
          />
        </Grid>
       </Grid>
       <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item xs={6} sm={5}>
          <TextField
            required
            id="eventDisplayPic"
            name="eventDisplayPic"
            label="Event Display Pic"
            fullWidth
            type="file"
            InputLabelProps={{
             shrink: true,
            }}
            onChange={(event)=>props.actionOnChange(event)}
          />
        </Grid>
       </Grid>
     </Card>
    </Container>
   </React.Fragment>
  );
};

export default EventAdvancedDetailsScreen;