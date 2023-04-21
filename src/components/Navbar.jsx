import React from 'react'
import { NavLink } from 'react-router-dom'
import { Avatar, Box , Stack } from '@mui/material';

const Navbar = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      padding: '20px',
      }}	>
      <Avatar/>
      <Box>
        <NavLink to='/'>Home</NavLink>
      </Box>
      <Box>
        <NavLink to='about'>About</NavLink>
      </Box>
      <Box>
        <NavLink to='contact'>Contact</NavLink>
      </Box>
    </Box>
  )
}

export default Navbar
