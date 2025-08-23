import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export default function Loader() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' , height: '100%', width: '100%'}}>
      <CircularProgress color="secondary" />
    </Box> 
  )
}
