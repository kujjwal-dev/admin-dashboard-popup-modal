import React from 'react'
import UploadContent from './UploadContent'
import UploadTable from './UploadTable'


function Upload() {
  return (
    <div className='flex flex-col gap-10'>
      <UploadContent />
      <UploadTable/>
       </div>
  )
}

export default Upload