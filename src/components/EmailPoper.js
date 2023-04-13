import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import EmailIcon from "@material-ui/icons/Email";
import IconButton from '@mui/material/IconButton';

export default function SimplePopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <IconButton aria-describedby={id} type="button" onClick={handleClick}>
        
        <EmailIcon/>
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          liyangg@umich.edu
        </Box>
      </Popper>
    </div>
  );
}