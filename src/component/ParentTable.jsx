import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme, Button } from '@mui/material';
import ChildrenPopper from './ChildrenPopper';








function ParentTable() {

  const [users,setUsers] = useState([]);
const [childData, setChildData] = useState([]);
  
const columns = [{

  name: 'father_name',
  label: "FatherName"
},{
  name:'mother_name',
  label: "MotherName"
},{
  name:'father_phone_number',
  label: "Father_Phone_Number"
},{
  name:'mother_phone_number',
  label: "Mother_Phone_Number"
},{
  name:'father_email',
  label: "Father_Email"
},{
  name:'mother_email',
  label: "Mother_Email"
},{
  name:'started_at',
  label: "Started_at"
},{
  name:'ended_at',
  label: "Ended_at"
},{
  name:'children',
  label: "Children",
  options: {

    customBodyRender: (value) => ( <ChildrenPopper />

),
     /*<Button variant='outlined' onClick={() => {
      console.log(value?.child_id,  childData
        ?.filter(child => child.id === value?.child_id)
        ?.map(child1 => child1)
        )
      childData
      ?.filter(child => child.id === value?.child_id)
     
     }}>
      View
    </Button>*/

   


    filter: false
  }
},
];

    useEffect(() =>{
      
fetch('https://mocki.io/v1/5000fbd8-9434-4578-b3d6-b0df3ba25f70')
.then(res => res.json())
.then(data => {
  let local = data?.users?.map((user) => ({
    ...user,

  }))
setUsers(local)}
   
   )

   fetch('https://mocki.io/v1/4479600e-ffa5-4723-b5ba-2dac2ec96a24')
   .then(res => res.json())
   .then(data => {
      let local = data?.children?.map((children) => ({
        ...children,
      }))
      setChildData(local)});  
            





    },[])





   
   const options = {
     selectableRows: false,
     elevation: 0,
     rowsPerPage: 5,
     rowsPerPageOptions: [5,10,20,30],
   };

  const getMuiTheme = () => createTheme({
    typography: { fontFamily: 'Poppins'},

    palette: {background:{ paper: "#1e293b", default: "#0f162a"},

    mode: "dark",

  },
  components: {
    MuiTableCell:{
      styleOverrides:{
        head:{
          padding:"10px 4px",

        },
        body:{
          padding:"7px 15px",
          color: "#e2e8f0",
        }
      }
    }
  }

  })

  return (
    
      <div className=''>

        <ThemeProvider theme={getMuiTheme()}>

        

          <MUIDataTable
        title={"Parents list"}
        data={users}
        columns={columns}
        options={options}
      />
        </ThemeProvider>
      
      </div>
    
    
  
  )
}

export default ParentTable
