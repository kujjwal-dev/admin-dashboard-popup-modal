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
import Moderator from './Moderator';
import ModeratorTable from './ModeratorTable';

function Profile(){








    return (<div className='relative flex flex-col items-center gap-6 '>
<div className='flex flex-col gap-4'>
<h1 className='text-5xl text-center font-bold mt-4'>Admin</h1>
        <Modalpopup/>
        <Users />
</div>
      <div className='flex flex-col gap-4'>
      <h1 className='text-5xl text-center font-bold mt-4 '>Moderator</h1>
        <Moderator />
        <ModeratorTable />
      </div>
       


       
    </div>)
        


}

export default Profile;