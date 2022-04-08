import React, { useState } from "react";
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider, 
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers';


export function Contact () {
    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [zipcode,setZipcode] = useState("");
    const [city,setCity] = useState("");
    const [telephone,setTelephone] = useState("");
    const [email,setEmail] = useState("");
    const [service, setService] = useState("");
    const [rooms, setRooms] = useState("");
    const [description, setDescription] = useState ("");
    const [selectedDate, setSelectedDate] = useState (new Date("2022-04-04T12:00:00"))
    const handleDateChange = (date) => {
        setSelectedDate(date)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your form has sent, we will call you back soon");
    };


    return (<div>
        <h1 className="form-h1">Contact us for a Free Consultation</h1>
        <br/>
        <div className="form">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name here..." name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <br/>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="Ex. 720 W Jackson Blvd..." name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
            <br/>
            <label htmlFor="zipcode">Zip Code</label>
            <input type="text" id="zipcode" placeholder="Ex. 60616..." name="zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
            <br/>
            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder="Ex. Chicago" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
            <br/>
            <label htmlFor="telephone">Telephone</label>
            <input type="text" id="telephone" placeholder="Ex. 3122187108..." name="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
            <br/>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="jhbhbs@gmail.com..." name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br/>
            <p>Choose the type of service you are looking for</p>
            <br/>
            <input type="radio" id="standard" name="service" value="standard" onChange={(e) => setService(e.target.value)} />
            <label htmlFor="">Standard Cleaning</label>
            <input type="radio" id="deep" name="service" value="deep" onChange={(e) => setService(e.target.value)} />
            <label htmlFor="deep">Deep cleaning</label>
            <input type="radio" id="movein/out" name="service" value="movein/out" onChange={(e) => setService(e.target.value)} />
            <label htmlFor="movein/out">Move In/Out</label>
            <input type="radio" id="carpet" name="service" value="carpet" onChange={(e) => setService(e.target.value)} />
            <label htmlFor="carpet">Carpet Cleaning</label>
            <input type="radio" id="office" name="service" value="office" onChange={(e) => setService(e.target.value)} />
            <label htmlFor="office">Proffesional Offices</label>
            <p>Choose the number of rooms for the service</p>
           <center> <select className="list" name="rooms" onChange={(e) => setRooms(e.target.value)}>
                <option value="">---</option>
                <option value="studio">Studio</option>
                <option value="1br1bath">1 BR-1 BATH</option>
                <option value="2br1bath">2 BR-1 BATH</option>
                <option value="2br2bath">2 BR-2 BATH</option>
                <option value="3br2bath">3 BR-2 BATH</option>
                <option value="4br3bath">4 BR-3 BATH</option>
                <option value="other">Other</option>    
                </select> </center>
                <br/>
                <p>Incluide a brief description of the rooms and especifications you would like in your service.</p>
                <br/>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" placeholder="Ex. We have a basement that ..." name="description" value={description} onChange={(e) => setCity(e.target.value)} />
            <br/>
            <p>Select the day and time you would like your service</p>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify='space-around'>
                    <KeyboardDatePicker
                    disableTooolbar
                    variant='dialog'
                    format='MM/dd/yyy'
                    margin='normal'
                    id='date-picker'
                    //label='Choose the Date'
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{'aria-label':'change date'}}
                    />
                    <KeyboardTimePicker
                    margin='normal'
                    id="time-picker"
                    //label='Choose the hour'
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps ={{'aria-alabel': 'change date'}}
                    />

                </Grid>
            </MuiPickersUtilsProvider>
                <br/>
                <input className="button" type="submit"/>
        </form>
        </div>
        </div>)
    
}