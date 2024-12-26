import { Typography } from '@mui/material'
import { FcTodoList } from "react-icons/fc";
import { deepPurple } from '@mui/material/colors';
import React from 'react'

const Header = () => {
  return (
    <Typography color={deepPurple[600]} variant="h3" component="h1" align='center' display="flex" justifyContent="center" gap="0.5rem" textAlign="center" 
    mt={4} fontWeight={600}
 >
       What's your plan? <FcTodoList />
  
    </Typography>
  )
}

export default Header