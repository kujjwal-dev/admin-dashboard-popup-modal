import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";
import { BiSolidSend } from "react-icons/bi";
import { Card, CardContent, Grid, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Modalpopup from './Popper';
import Users from './Users';

function Profile(){








    return (<div className='h-screen flex flex-col items-center gap-6 '>

        <h1 className='text-5xl font-bold mt-4'>Admin</h1>
        <Modalpopup/>
        <Users />


       
    </div>)
        


}

export default Profile;