import React from 'react';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar'
import Conatiner from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import StoreIcon from '@mui/icons-material/Store'


function Navbar3({ routes }) {
  const [nav,setNav]=React.useState(null);
  

  const handleOpenNav=(event)=>{
    setNav(event.currentTarget);
  }

  const handleCloseNav=(event)=>{
    setNav(null);
  }
  
  return (
    <AppBar position="static">
        <Conatiner maxWidth='xl'>
      <Toolbar sx={{fontFamily:'inherit'}}>
{/* for Mobile version ********************************************************** */}
      <Box sx={{ flexGrow: 0.40, display: { xs: 'flex', md: 'none' } }}>
            
            <IconButton color="inherit" onClick={handleOpenNav} aria-label="Open Menu">
              <MenuIcon />
            </IconButton>
            <Menu
                id="menu"
                anchorEl={nav}
                open={Boolean(nav)}
                onClose={handleCloseNav}
            >

            {routes.map((route) => (
              <MenuItem key={route.path} component={NavLink} to={route.path} onClick={handleCloseNav}>
                {route.label}
              </MenuItem>
            ))}
              
              
              
            </Menu>
       </Box>

       <StoreIcon sx={{display:{xs:'flex',md:'none'}}}></StoreIcon>
        <Typography
              //CSS
              sx={{
                  textDecoration:'none',
                  fontFamily:'revert-layer',
                  mr:3,
                  ml:2,
                  fontWeight:400,
                  display:{
                    xs:'flex',
                    md:'none'

                  }
                  ,order:1
              }}
              
        >
          Rohit 
        </Typography>
        

        {/* for XL screeen *****************************************************/}


        <StoreIcon sx={{display:{xs:'none',md:'flex'}}}></StoreIcon>
        <Typography
              //CSS
              sx={{
                  textDecoration:'none',
                  fontFamily:'revert-layer',
                  mr:3,
                  ml:2,
                  fontWeight:400,
                  display:{
                    xs:'none',
                    md:'flex'

                  }
                  ,order:1
              }}
              
        >
          Rohit 
        </Typography>
        <Box sx={{display: { xs: 'none', md: 'flex' } ,order:2}}>
              <Typography sx={{
                textDecoration:'none',
                fontFamily:'revert-layer',
                mr:0,
                fontWeight:400,
              }}>
                {routes.map((route) => (
                    <Button
                        key={route.path}
                        color="inherit"
                        component={Link}
                        to={route.path}
                        style={{ textDecoration: 'none', color: 'white' }}
                    >
                        {route.label}
                    </Button>
                ))}
              
              
              </Typography>
        </Box>
        
      </Toolbar>
      </Conatiner>
    </AppBar>
  );
}

export default Navbar3;
