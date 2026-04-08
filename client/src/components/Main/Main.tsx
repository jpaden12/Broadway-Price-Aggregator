import { Autocomplete, Box, Container, Divider, Grid, IconButton, InputAdornment, ToggleButton, ToggleButtonGroup } from '@mui/material';
import type { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import { TextField } from '@mui/material';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import SunnyIcon from '@mui/icons-material/Sunny';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import UpdateIcon from '@mui/icons-material/Update';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SearchIcon from '@mui/icons-material/Search';
import './Main.css';
import React from 'react';
import { theme } from '../../assets/theme';
import { getListings } from '../../api-layer/fetch-logic';
import Header from '../Header/Header';



const cols: GridColDef[] = [
    { field: 'name', headerName: 'Show Name', width: 250 }, 
    { field: 'date', headerName: 'Show Date', width: 200 },
    { field: 'time', headerName: 'Time', width: 150 },
    { field: 'rush', headerName: 'Rush', width: 150 }, 
    { field: 'tkts', headerName: 'TKTS', width: 150 }, 
    { field: 'official', headerName: 'Official Site', width: 150 }, 
    { field: 'headout', headerName: 'Headout', width: 150 }, 
]

const rows: GridRowsProp = [
    { id: 1, name: 'Chicago', 'date': "02-12-2025", 'time': 1900, 'rush': 45, 'tkts': 79, 'official': 120, 'headout': 110 }, 
    { id: 2, name: 'Operation Mincemeat', 'date': "02-11-2025", 'time': 1900, 'rush': 55, 'tkts': 89, 'official': 200, 'headout': 140 }, 
    { id: 3, name: 'Six', 'date': "02-12-2025", 'time': 2000, 'rush': 40, 'tkts': 79, 'official': 120, 'headout': 110 }, 
    { id: 4, name: 'Ragtime', 'date': "02-10-2025", 'time': 1900, 'rush': 60, 'tkts': 129, 'official': 3000, 'headout': 200 }
] 

const shows = [
  {
    value: 'Chicago',
    label: 'Chicago',
  },
  {
    value: 'Ragtime',
    label: 'Ragtime',
  },
  {
    value: 'MJ The Musical',
    label: 'MJ The Musical',
  },
  {
    value: 'The Outsiders',
    label: 'The Outsiders',
  },
];

function searchButtonHandler() {
    console.log("Button clicked!!");
}

function Main() {
    console.log(window.innerWidth);

    const [categories, setCategories] = React.useState(() => ['']);
    const [times, setTimes] = React.useState(() => ['']);
    const [date, setDate] = React.useState(() => '');
    const [shows, setShows] = React.useState(() => []);
    const [sites, setSites] = React.useState(() => []);

    const changeCategories = (
        event: React.MouseEvent<HTMLElement>,
        newFormats: string[],
    ) => {
        setCategories(newFormats);
        console.log(newFormats);
    };

    const changeTimes = (
        event: React.MouseEvent<HTMLElement>,
        newTimes: string[],
    ) => {
        setTimes(newTimes)
        console.log(newTimes);
    };

    getListings();

    return (
        <div className='page-background'>
            {/* <Container    
                maxWidth={false}
                sx={{
                // backgroundColor: theme.background,
                color: 'rgba(0, 0, 0, 0.87)'
            
                }}> */}

                    
                {/* // Header Navbar - 10% of page */}
                {/* <Header></Header> */}

                <Divider orientation='horizontal' sx={{
                    color: 'black'
                }}></Divider>

                {/* // Search Box - 20% of page */}
                <Box sx={{
                   height: '30vh',
                   alignContent: 'center',
                   textAlign: 'center',
                   paddingBlockStart: '2vh',
                   paddingBlockEnd: '3vh',
                   backgroundColor: '#e6e6e6',
                }}>
                    <div className='tagline-box'>
                        <h2 className='tagline'>Discover cheap Broadway tickets across multiple sites.</h2>
                    </div>
                    {/* <Autocomplete 
                        options={shows} 
                        renderInput={ (params) => 
                            <TextField sx={{
                                width: '40%',
                            }}
                            {...params}
                            label="Search Show Name"
                            // slotProps={{
                            //     input: {
                            //         startAdornment: (
                            //             <InputAdornment position='start'>
                                            
                            //             </InputAdornment>
                            //         ),
                            //         endAdornment: (
                            //             <InputAdornment position='end'>
                            //                 <SearchIcon />
                            //             </InputAdornment>
                            //         )

                            //     }
                            // }}
                            fullWidth />} /> */}

                    <TextField 
                        variant='outlined'
                        label='Add Up To 5 Shows'
                        sx={{
                            width: '30%',
                            backgroundColor: 'white'
                        }}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton onClick={searchButtonHandler}>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }
                        }}
                    fullWidth />

                </Box>

                {/* // Category and Date Filters - 15% */}
                <Box sx={{
                    height: '15vh',
                    alignContent: 'center',
                    padding: 0,
                    textAlign: 'center',
                   backgroundColor: '#e6e6e6',
                }}>
                    <div></div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        placeItems: 'center',
                        paddingBottom: '1%',
                        paddingTop: '1%'
                    }}>
                        {/* // Replace wit Broadway and Off Broadway */}
                        <div className="categories">Categories</div>
                        <ToggleButtonGroup
                            value={categories}
                            size='large'
                            sx={{ 
                                mr: 2 

                            }}
                            onChange={changeCategories}>
                            <ToggleButton 
                                value="Play"
                                sx={{ 
                                    width: 200,
                                    backgroundColor: 'white', 
                                    border: '3px solid #99e6ff'
                                }}>
                                <TheaterComedyIcon />
                                Play
                            </ToggleButton>
                            <Divider orientation="vertical" flexItem />
                            <ToggleButton 
                                value="Musical"
                                sx={{ 
                                    width: 200,
                                    backgroundColor: 'white',
                                    border: '3px solid #99e6ff'
                                }}>
                                <MusicNoteIcon />
                                Musical
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <ToggleButtonGroup 
                            value={times}
                            exclusive
                            size='large'
                            onChange={changeTimes}    
                        >
                            <ToggleButton 
                                value="Evening"
                                sx={{
                                    width: 200,
                                    backgroundColor: 'white',
                                    border: '3px solid #99e6ff'
                                }}>
                                <NightlightRoundIcon />
                                Evening
                            </ToggleButton>
                            <Divider orientation="vertical" flexItem />
                            <ToggleButton 
                                value="Matinee"
                                sx={{
                                    width: 200,
                                    backgroundColor: 'white',
                                    border: '3px solid #99e6ff'
                                }}>
                                <SunnyIcon />
                                Matinee
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        placeItems: 'center'
                    }}>
                        <div className="categories">Date</div>
                        <ToggleButtonGroup
                            value={date}
                            exclusive
                            size='large'
                            sx={{ mr: '2'}}>
                            <ToggleButton
                                value="Today"
                                sx={{
                                    backgroundColor: 'white', 
                                    border: '3px solid #99e6ff'
                                }}>
                                <PriorityHighIcon />
                                Today
                            </ToggleButton>
                            <Divider orientation="vertical" flexItem />
                            <ToggleButton
                                value="Tomorrow"
                                sx={{
                                    backgroundColor: 'white', 
                                    border: '3px solid #99e6ff'
                                }}>
                                <UpdateIcon />
                                Tomorrow
                            </ToggleButton>
                            <Divider orientation="vertical" flexItem />
                            <ToggleButton
                                value="This Weekend"
                                sx={{
                                    backgroundColor: 'white', 
                                    border: '3px solid #99e6ff'
                                }}>
                                <DateRangeIcon />
                                This Weekend
                            </ToggleButton>
                            <Divider orientation="vertical" flexItem />
                            <ToggleButton
                                value="Select Date"
                                sx={{
                                    backgroundColor: 'white', 
                                    border: '3px solid #99e6ff'
                                }}>
                                    <CalendarMonthIcon />
                                    Select Date
                            </ToggleButton>

                        </ToggleButtonGroup>
                    </div>
                    <div style={{
                        
                    }}>
                        { /* Visible only if there are shows from the search bar  */}
                        <div className="categories">Shows Selected</div>
                    </div>
                    {/* <Grid container spacing={1}>
                        <Grid size={1}></Grid>
                        <Grid size={4}>
                        </Grid>
                        <Grid size={1}></Grid>
                        <Grid size={2}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker label="Show Date" />
                            </LocalizationProvider>
                        </Grid>
                        <Grid size={4}></Grid>
                    </Grid> */}
                </Box>

                { /*/ Site Filters - 15% */}
                <Box sx={{
                    height: '15vh',
                    alignContent: 'center',
                    padding: 0,
                    backgroundColor: '#e6e6e6',
                }}>
                    {/* <h3>Date</h3> */}

                </Box>

                {/* // Main Price Grid - 40%  */}
                <Box sx={{
                    height: '40vh',
                    backgroundColor: '#e6e6e6',
                }}>
                    <Grid container spacing={0.2}>
                        <Grid size={0.5}></Grid>
                        <Grid size={11}>
                            <DataGrid rows={rows} columns={cols}/>
                        </Grid>
                        <Grid size={0.5}></Grid>
                    </Grid>
                </Box>

                {/* // Footer - 10%  */}
                <Box sx={{
                   height: '10vh',
                   alignContent: 'center',
                   backgroundColor: '#e6e6e6'
                }}>
                </Box>
            {/* </Container> */}
        </div>
    )
}

export default Main;