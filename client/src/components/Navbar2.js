import React from 'react'
import { NavLink } from 'react-router-dom'; // Example import statement

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
import Dashboard from './Dashboard';


function Navbar2() {

  
  const [nav,setNav]=React.useState(null);
  

  const handleOpenNav=(event)=>{
    setNav(event.currentTarget);
  }

  const handleCloseNav=(event)=>{
    setNav(null);
  }
  
  return (

    <AppBar>
      <Conatiner maxWidth='xl'>
        <Toolbar sx={{fontFamily:'inherit'}}>

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
                  

                 
                  <MenuItem component={NavLink} to="/Dashboard.js" onClick={handleCloseNav}>
                    Dashboard
                  </MenuItem>
                  <MenuItem component={NavLink} to="/Home.js" onClick={handleCloseNav}>
                    Home
                  </MenuItem>
                  
                  
                  
                </Menu>
        </Box>

        


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
                    xs:'flex',
                    md:'none'

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
              
              <NavLink className="nav-link" to="/Dashboard" style={{ textDecoration: 'none' }}>
                      Dashboard
              </NavLink>
              <NavLink className="nav-link" to="/Home" style={{ textDecoration: 'none' }}>
                      Home
              </NavLink>
              
              </Typography>
        </Box>
        <StoreIcon sx={{display:{xs:'flex',md:'none'},mr:1}}></StoreIcon>
        <Typography
              //CSS

              sx={{
                  textDecoration:'none',
                  fontFamily:'inherit',
                  display:{
                    xs:'none',
                    md:'flex'
                  }
              }}
        >
            Rohit
        </Typography>
        </Toolbar>
      </Conatiner>
    </AppBar>
  )
}

export default Navbar2
