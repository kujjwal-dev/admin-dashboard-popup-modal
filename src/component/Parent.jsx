import React from 'react'
import ParentTable from './ParentTable';


function Parent() {
  return (
    <div className='h-screen flex flex-col items-center gap-6 '>

        <h1 className='text-5xl font-bold mt-4'>Parent</h1>
        <ParentTable />
        </div>
   
  )
}

export default Parent;