import { Autocomplete, Box, Button, Divider, Grid, IconButton, InputAdornment, Menu, MenuItem, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
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
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

import './Main.css';
import React from 'react';
import { ShowType } from '../../api-layer/types';



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
    type: ShowType.MUSICAL,
  },
  {
    value: 'Ragtime',
    label: 'Ragtime',
    type: ShowType.MUSICAL,
  },
  {
    value: 'MJ The Musical',
    label: 'MJ The Musical',
    type: ShowType.MUSICAL,
  },
  {
    value: 'The Outsiders',
    label: 'The Outsiders',
    type: ShowType.MUSICAL,
  },
  {
    value: 'Hamilton',
    label: 'Hamilton',
    type: ShowType.MUSICAL,
  },
  {
    value: 'Wicked',
    label: 'Wicked',
    type: ShowType.MUSICAL,
  },
  {
    value: 'Aladdin',
    label: 'Aladdin',
    type: ShowType.MUSICAL,
  },
  {
    value: 'Matilda the Musical',
    label: 'Matilda the Musical',
    type: ShowType.MUSICAL,
  },
];

const allShowsArr = ['Chicago', 'Ragtime', 'The Outsiders', 'Matilda the Musical', 'Hamilton', 'Wicked', 'Aladdin', 'MJ The Musical'];




function Main() {

    const [categories, setCategories] = React.useState(() => ['']);
    const [times, setTimes] = React.useState(() => ['']);
    const [date, setDate] = React.useState(() => '');
    const [filters, setFilters] = React.useState(() => {});

    const [selectedShows, setSelectedShows] = React.useState(() => []);
    const [filteredShows, setFilteredShows] = React.useState(() => ['Chicago', 'Ragtime', 'The Outsiders', 'Matilda the Musical', 'Hamilton', 'Wicked', 'Aladdin', 'MJ The Musical']);
    const [sites, setSites] = React.useState(() => []);

    

    const changeCategories = (
        event: React.MouseEvent<HTMLElement>,
        newFormats: string[],
    ) => {
        setCategories(newFormats);
    };

    const changeTimes = (
        event: React.MouseEvent<HTMLElement>,
        newTimes: string[],
    ) => {
        setTimes(newTimes)
        console.log(newTimes);
    };

    const handleIconClick = (e: any) => {
        
        const newShows = selectedShows.filter((show) => {
            return show != e.currentTarget.id;
        });
        console.log(newShows);
        setSelectedShows(newShows);
    }

    const showSearchInputChange = (e: any) => {
        if (e.target.value.length == 0) {
            setFilteredShows([]);
        } else {
            const newShows = allShowsArr.filter((show) => {
                return show.includes(e.target.value);
            });
            console.log(e.target.value);
            setFilteredShows(newShows);
        }
    }

    const showSearchValueChange = (e: any, v: any) => {
        
        if (v.length > 0 && !selectedShows.includes(v)) {
            setSelectedShows([...selectedShows, v])
        }
    }

    return (
        <div className='page-background'>

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
                    <Autocomplete 
                        options={filteredShows} 
                        filterOptions={(x) => x}
                        onInputChange={showSearchInputChange}
                        onChange={showSearchValueChange}
                        popupIcon={<SearchIcon />}
                    
                        
                        renderInput={ (params) => 
                            <TextField sx={{
                                width: '30%',
                                backgroundColor: 'white'
                            }}
                            {...params}
                            label="Add Up to Five Shows"
                            fullWidth />} />
                        
                </Box>

                {/* // Category and Date Filters - 15% */}
                <Box sx={{
                    height: '15vh',
                    alignContent: 'center',
                    padding: 0,
                    textAlign: 'center',
                   backgroundColor: '#e6e6e6',
                }}>
                    <Grid container rowSpacing={2} columnSpacing={2}>
                        
                        <Grid size={2} sx={{
                            textAlign: 'right'
                        }}> 
                            <div className="categories">Categories</div>
                        </Grid>
                        <Grid size={10} sx={{
                            textAlign: 'left'
                        }}>
                            <ToggleButtonGroup
                                value={categories}
                                size='medium'
                                sx={{ 
                                    mr: 2 
                                }}
                                onChange={changeCategories}>
                                <ToggleButton 
                                    value="Play"
                                    sx={{ 
                                        width: 150,
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
                                        width: 150,
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
                                size='medium'
                                onChange={changeTimes}    
                                sx={{ 
                                    mr: 2 
                                }}
                            >
                                <ToggleButton 
                                    value="Evening"
                                    sx={{
                                        width: 150,
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
                                        width: 150,
                                        backgroundColor: 'white',
                                        border: '3px solid #99e6ff'
                                    }}>
                                    <SunnyIcon />
                                    Matinee
                                </ToggleButton>
                            </ToggleButtonGroup>
                             <ToggleButtonGroup 
                                value={times}
                                exclusive
                                size='medium'
                                onChange={changeTimes}    
                            >
                                <ToggleButton 
                                    value="Broadway"
                                    sx={{
                                        width: 150,
                                        backgroundColor: 'white',
                                        border: '3px solid #99e6ff'
                                    }}>
                                    <NightlightRoundIcon />
                                    Broadway
                                </ToggleButton>
                                <Divider orientation="vertical" flexItem />
                                <ToggleButton 
                                    value="Off-Broadway"
                                    sx={{
                                        width: 150,
                                        backgroundColor: 'white',
                                        border: '3px solid #99e6ff'
                                    }}>
                                    <SunnyIcon />
                                    Off-Brdwy
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>

                        <Grid size={2} sx={{
                            textAlign: 'right'
                        }}>
                            <div className="categories">Date</div>
                        </Grid>
                        <Grid size={10} sx={{
                            textAlign: 'left'
                        }}>
                            <ToggleButtonGroup
                                value={date}
                                exclusive
                                size='medium'
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
                        </Grid>

                        { /* Visible only if there are shows selected from the search bar  */}
                        <Grid size={2} sx={{
                            textAlign: 'right'
                        }}> 
                            <div className="categories">Shows Selected</div>
                        </Grid>
                        <Grid size={10}>
                            <Stack spacing={2} direction="row">
                                {selectedShows.map((show) => (
                                    <Button variant='contained' endIcon={<ClearIcon id={show} onClick={handleIconClick} />}>{show}</Button>
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                            
                    
                </Box>
                

                {/* // Main Price Grid - 40% + 20% of padding */}
                <Box sx={{
                    height: '40vh',
                    backgroundColor: '#e6e6e6',
                    paddingTop: '20vh',
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