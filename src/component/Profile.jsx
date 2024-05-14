import React, { useState } from 'react'
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