import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from '@mui/material';








function ModeratorTable() {

  const [users,setUsers] = useState([]);

  
const columns = [{

  name: 'id',
  label: "S.NO"
},{
  name: 'image',
  label: "Profile",
  options: {

    customBodyRender: (value) => (
      <img src={value} alt="pic" className='w-12 h-12 rounded-full p-3 bg-slate-700' />
    ),
    filter: false
  }
},{

   name: 'name',
   label: "Name",

},{

   name: 'age',
   label: "Age"

},
{
  name:'gender',
  label: "Gender",
  options:{
    customBodyRender:(value)=> <p className=  'captialize px-3 py-1 bg-blue-500 inline-block rounded-full'>
      {value}
      </p>
  }
  
},{
  name:'domain',
  label: "Domain",
  options:{
    customBodyRender:(value)=> (<a href ={'https://'+ value} 

    target='_blank'
    
    className='bg-red-600 px-3 py-1 rounded-md'>Open</a>),

    filter:false,
      
  }
},

];

    useEffect(() =>{
      
fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(data => {
  let local = data?.users?.map((user) => ({
    ...user,

    name: user?.firstName + ' ' + user?.lastName,
  }))
setUsers(local)}
   
   )
            





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
        title={"Moderators list"}
        data={users}
        columns={columns}
        options={options}
      />
        </ThemeProvider>
      
      </div>
    
    
  
  )
}

export default ModeratorTable
