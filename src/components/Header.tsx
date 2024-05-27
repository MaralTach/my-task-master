import { Typography } from '@mui/material'
import { FcTodoList } from "react-icons/fc";
import React from 'react'

const Header = () => {
  return (
    <Typography color="error" variant="h3" component="h1" align='center'>
        Task Master <FcTodoList />
    </Typography>
  )
}

export default Header