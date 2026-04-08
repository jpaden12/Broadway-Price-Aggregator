import { Box, Grid } from "@mui/material";
import './Header.css';
import { Link } from "react-router-dom";


function Header() {
    
    return (
        <div className="wrapper-box">
            <Box>
                <Grid container spacing={1}>
                    <Grid size={3}><h2 className='title'>Broadway Cheapskate</h2></Grid>
                    <Grid size={1}></Grid>
                    <Grid size={4}>
                        <Link to="/home"> <h2 className='nav-buttons'>Home</h2> </Link>
                        <Link to="/allshows"> <h2 className='nav-buttons'>All Shows</h2> </Link>
                        {/* <Link to="/"> <h2 className='nav-buttons'>Admin</h2></Link> {" "} */}
                    </Grid>
                    <Grid size={1}></Grid>
                    <Grid size={3}><h2>Dark Mode</h2></Grid>
                </Grid>
            </Box>
        </div>        
    )
}

export default Header; 