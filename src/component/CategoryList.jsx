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

export default function CategoryList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

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
      <ListItemButton>
        
        <ListItemText primary="Inspirational" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Educational" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Devotional" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="General" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemText primary="Mythology" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="History/Politics" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Cultural Science" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Technology" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Standard" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Tools" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Finance" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Career Growth" />
      </ListItemButton>
    </List>
  );
}