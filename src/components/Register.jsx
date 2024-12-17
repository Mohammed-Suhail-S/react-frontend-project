import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, InputAdornment } from '@mui/material'; 
import DatePicker  from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function Register()  {

    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(date); 
    };

    const [dropdownValues, setDropdownValues] = useState ({
        dropdown1: '',
        dropdown2: '',
    }); 
    
    const handleDropdownChange = (event) => {
        const { name, value } = event.target; 
        setDropdownValues((prevValues) => ({ 
          ...prevValues,
          [name]: value,
        }));
    };

    const [value, setValue] = useState("");
    const handleChange = (event) => {
        setValue(event.target.value);
    }; 

    return (
        <form> 
            <div class="container">
                <div class="content">
                    <h1>Registration</h1>
                    <div>
                        <TextField label="Employee ID" type="text" variant="standard" size="medium" required autoComplete="off" 
                        style={{marginLeft: '25px', width: '275px'}}/> 
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <TextField label="First Name" type="text" variant="standard" size="medium" required autoComplete="off" 
                        style={{marginLeft: '25px', width: '275px'}}/> 
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <TextField label="Middle Name (Optional)" type="text" variant="standard" size="medium" autoComplete="off" 
                        style={{marginLeft: '25px', width: '275px'}}/>
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <TextField label="Last Name (Optional)" type="text" variant="standard" size="medium" autoComplete="off" 
                        style={{marginLeft: '25px', width: '275px'}}/>
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <TextField label="Sure Name" type="text" variant="standard" size="medium" required autoComplete="off" 
                        style={{marginLeft: '25px', width: '275px'}}/>
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <DatePicker selected={selectedDate} onChange={handleDateChange} required autoComplete="off" 
                        customInput= { <TextField label="Date of Joining" variant="standard" size="medium" 
                        style={{marginLeft: '25px', width: '275px'}} /> } /> 
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <FormControl variant="standard" size="medium" required style={{marginLeft: '25px', width: '275px'}}> 
                            <InputLabel id="dropdown1-label">Designation</InputLabel>
                            <Select labelId="dropdown1-label" name="dropdown1" value={dropdownValues.dropdown1} onChange={handleDropdownChange}> 
                                <MenuItem value={1}>Database Administrator</MenuItem> 
                                <MenuItem value={2}>DevOps Engineer</MenuItem> 
                                <MenuItem value={3}>Frontend Developer</MenuItem> 
                                <MenuItem value={4}>Intern</MenuItem> 
                                <MenuItem value={5}>Lead</MenuItem> 
                                <MenuItem value={6}>Project Manager</MenuItem> 
                                <MenuItem value={7}>Software Developer</MenuItem> 
                                <MenuItem value={8}>Software Engineer</MenuItem> 
                            </Select>
                        </FormControl>
                    </div>
                </div>
                
                <div class="content2">
                    <div style={{marginTop: '71px'}}>
                        <TextField label="Personal E-mail ID" type="email" variant="standard" size="medium" required autoComplete="off" 
                        style={{marginLeft: '25px', width: '275px'}}/> 
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <TextField label="Aadhar No" type="number" variant="standard" size="medium" required autoComplete="off" 
                        sx={{ '& input[type=number]': { MozAppearance: 'textfield' }, 
                        '& input[type=number]::-webkit-outer-spin-button': { WebkitAppearance: 'none', margin: 0 }, 
                        '& input[type=number]::-webkit-inner-spin-button': { WebkitAppearance: 'none', margin: 0 } }} 
                        style={{marginLeft: '25px', width: '275px'}}/> 
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <TextField label="Mobile No" type="number" variant="standard" size="medium" required autoComplete="off" 
                        sx={{ '& input[type=number]': { MozAppearance: 'textfield' }, 
                        '& input[type=number]::-webkit-outer-spin-button': { WebkitAppearance: 'none', margin: 0 }, 
                        '& input[type=number]::-webkit-inner-spin-button': { WebkitAppearance: 'none', margin: 0 } }} 
                        style={{marginLeft: '25px', width: '275px'}}/> 
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <FormControl variant="standard" size="medium" required style={{marginLeft: '25px', width: '275px'}}> 
                                <InputLabel id="dropdown2-label">City</InputLabel>
                                <Select labelId="dropdown2-label" name="dropdown2" value={dropdownValues.dropdown2} onChange={handleDropdownChange}> 
                                    <MenuItem value={1}>Bangalore</MenuItem> 
                                    <MenuItem value={2}>Chennai</MenuItem> 
                                    <MenuItem value={3}>Delhi</MenuItem> 
                                    <MenuItem value={4}>Hyderabad</MenuItem> 
                                    <MenuItem value={5}>Mumbai</MenuItem> 
                                    <MenuItem value={6}>Pune</MenuItem>  
                                </Select>
                        </FormControl>
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <TextField label="Facility" type="text" variant="standard" size="medium" required autoComplete="off" 
                        style={{marginLeft: '25px', width: '275px'}}/>
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <TextField label="CTC" type="text" variant="standard" size="medium" required autoComplete="off" 
                        value={value} onChange={handleChange} InputProps={{ endAdornment: ( <InputAdornment position="end" 
                        sx={{ "& .MuiTypography-root": { color: "black" } }} >LPA</InputAdornment> ) }}
                        sx={{ "& .MuiInputAdornment-root": { transform: 'translate(-17%, -2%)', pointerEvents: 'none' } }} 
                        style={{marginLeft: '25px', width: '275px'}}/> 
                    </div>
                    <Button type='submit' variant='contained' color='primary' sx={{width: '275px', marginTop: '48px', marginLeft: '25px', 
                    fontFamily: 'myFont1'}}>SUBMIT</Button> 
                </div> 
            </div>
        </form>

    );
}

