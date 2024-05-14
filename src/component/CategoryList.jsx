import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function CategoryList() {
  const [open, setOpen] = React.useState(true);
  const [myData , setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const handleClick = () => {
    setOpen(!open);
  };

  async function get_main_category(){

    try{
      
      const main_category = await axios.get('https://edx-backend-git.onrender.com/api/v1/category/get_main_category');
      console.log("main category", main_category)
      setMyData(main_category);

    } catch(error){

      setIsError(error.message);  



    }

  }

  useEffect(()=> {
    get_main_category();
  } , []);


console.log(myData);





  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
         Main Category
        </ListSubheader>
      }
    >
      {myData.map((category) => {

        const {id,main_category} = category;



      <ListItemButton key={id}>
        <ListItemText>{main_category}</ListItemText>
      </ListItemButton>


      })}
      
      
      
    </List>
  );
}