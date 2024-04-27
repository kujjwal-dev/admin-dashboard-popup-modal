
import { CheckBox } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, IconButton, Stack, TextField } from "@mui/material";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";


const UploadContent = () => {
    const [open, setOpen] = React.useState(false);
    const functionOpenPopup = () => {
        setOpen(true);
    }
    const functionClosePopup = () => {
        setOpen(false);
    }

    const[popUp,setPopUp]= useState(false);
 
   



    return(
        <div style={{textAlign: 'center'}}>
            <Button onClick={functionOpenPopup} color="primary" variant="contained">Upload Content</Button>
            <Dialog open={open} onClose={functionClosePopup} fullWidth maxWidth="sm">
            <DialogTitle>Upload content<IconButton onClick={functionClosePopup} style={{float:'right'}}><CloseIcon color='primary'></CloseIcon></IconButton></DialogTitle>
            <DialogContent>
                <Stack spacing={2} margin={2}>
                <TextField label="Title" className='rounded-md'  placeholder="Enter your Title" variant="outlined" fullWidth/>
                <TextField label="Description" className='rounded-md'   placeholder="Enter your description" variant="outlined" fullWidth/>
                <TextField label="Video_url" className='rounded-md'  placeholder="Enter Video url" variant="outlined" fullWidth/>
                <TextField label="Video_thumbnail" className='rounded-md' placeholder="Enter Video thumbnail" variant="outlined" fullWidth/>
                <TextField label="Contetnt_source_type" className='rounded-md'  placeholder="Enter Contetnt source type" variant="outlined" fullWidth/>
                <TextField label="Class_grade" className='rounded-md'  placeholder="Enter Class grade" variant="outlined" fullWidth/>
                <TextField label="Content_category" className='rounded-md'  placeholder="Enter Content category" variant="outlined" fullWidth/>
                <TextField label="Content_type" className='rounded-md'  placeholder="Enter Content type" variant="outlined" fullWidth/>


                <input type='file' className="file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 file:px-6 file:py-3 file:m-5 file:border-none
                 file:rounded-full file:text-white file:cursor-pointer file:shadow-lg file:shadow-blue-600/50" />
              
                <Button color="primary" variant="contained" >Upload</Button>
                </Stack>
            </DialogContent> 
            <DialogActions>
                {/*<Button onClick={functionClosePopup} color="error" variant="contained">Close</Button>*/}
            </DialogActions>
            </Dialog>
        </div>
    );
}


export default UploadContent;


