import { Box, Grid } from "@mui/material";
import './Header.css';


function Header() {
    
    return (
        <div className="wrapper-box">
            <Box>
                <Grid container spacing={1}>
                    <Grid size={3}><h2 className='title'>Broadway Cheapskate</h2></Grid>
                    <Grid size={1}></Grid>
                    <Grid size={4}>
                        <h2 className='nav-buttons'>Home</h2> 
                        <h2 className='nav-buttons'>All Shows</h2>
                        <h2 className='nav-buttons'>Admin</h2>
                    </Grid>
                    <Grid size={1}></Grid>
                    <Grid size={3}><h2>Dark Mode</h2></Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Header; 