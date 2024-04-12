import { CheckBox } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, IconButton, Stack, TextField } from "@mui/material";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";


const Modalpopup = () => {
    const [open, setOpen] = React.useState(false);
    const functionOpenPopup = () => {
        setOpen(true);
    }
    const functionClosePopup = () => {
        setOpen(false);
    }

    const[popUp,setPopUp]= useState(false);
    const[name,setName]= useState('');
    const[email,setEmail]= useState('');
    const[phone,setPhone]= useState('');
    const[address,setAddress]= useState('');
    const[pancard,setPancard]= useState('');



    console.log("name",name);
    console.log("email",email);
    console.log("phone",phone);
    console.log("address",address);
    console.log("pancard",pancard);

    return(
        <div style={{textAlign: 'center'}}>
            <h1>MUI-DIALOG</h1>
            <Button onClick={functionOpenPopup} color="primary" variant="contained">Open popup</Button>
            <Dialog open={open} onClose={functionClosePopup} fullWidth maxWidth="sm">
            <DialogTitle>User Registration<IconButton onClick={functionClosePopup} style={{float:'right'}}><CloseIcon color='primary'></CloseIcon></IconButton></DialogTitle>
            <DialogContent>
                <Stack spacing={2} margin={2}>
                <TextField label="Name" className='rounded-md' onChange={(e) => setName(e.target.value)} placeholder="Enter your name" variant="outlined" fullWidth/>
                <TextField label="Phone" className='rounded-md' onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone no" variant="outlined" fullWidth/>
                <TextField label="Email" className='rounded-md' onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" variant="outlined" fullWidth/>
                <TextField label="Address" className='rounded-md' onChange={(e) => setAddress(e.target.value)} placeholder="Enter your address" variant="outlined" fullWidth/>
                <TextField label="Pancard" className='rounded-md'onChange={(e) => setPancard(e.target.value)}  placeholder="Enter your pancard no" variant="outlined" fullWidth/>
                <FormControlLabel control={<CheckBox  color="primary"></CheckBox>} label="Agree terms and conditions"></FormControlLabel>
                <Button color="primary" variant="contained" >Submit</Button>
                </Stack>
            </DialogContent> 
            <DialogActions>
                {/*<Button onClick={functionClosePopup} color="error" variant="contained">Close</Button>*/}
            </DialogActions>
            </Dialog>
        </div>
    );
}


export default Modalpopup;