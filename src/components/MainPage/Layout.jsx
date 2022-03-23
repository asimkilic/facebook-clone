import { Grid } from '@mui/material'
import React from 'react'
import LeftSide from './LeftSidePanel/LeftSide'
import './Mainpage.css'
const Layout = () => {
  return (
    <div className="mainpage__container">
        <Grid container>
            <Grid item xs={3}> 
                <LeftSide />
            </Grid>
            <Grid item xs={6}> MIDDLE</Grid>
            <Grid item xs={3}> RIGHT</Grid>

        </Grid>
    </div>
  )
}

export default Layout