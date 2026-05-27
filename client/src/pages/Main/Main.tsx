import { Autocomplete, Box, Button, Divider, Grid, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import type { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import './Main.css';
import React from 'react';
import { ShowType, type DummyShow } from '../../api-layer/types';
import MainTable from './main-table/MainTable';
import MainFilters from './main-filters/MainFilters';
import { getListings } from '../../api-layer/fetch-logic';



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

const allShowsArr: DummyShow[] = [
    {
        name: 'Chicago',
        type: 'Musical',
    },
    {
        name: 'Ragtime',
        type: 'Musical'
    },
    {
        name: 'The Outsiders',
        type: 'Musical'
    },
    {
        name: 'Hamilton',
        type: 'Musical'
    },
    {
        name: 'Wicked',
        type: 'Musical'
    },
    {
        name: 'Aladdin',
        type: 'Musical'
    },
    {
        name: 'MJ The Musical',
        type: 'Musical'
    },
    {
        name: 'Stranger Things',
        type: 'Play'
    },
    {
        name: 'Proof',
        type: 'Play'
    }
]; 

const allPlaysObj: DummyShow[] = [{name: "All Plays", type: "Play"}];
const allMusicalsObj: DummyShow[] = [{name: "All Musicals", type: "Musical"}];



function Main() {

    const [categories, setCategories] = React.useState(() => '');
    const [times, setTimes] = React.useState(() => ['']);
    const [date, setDate] = React.useState(() => '');
    const [filters, setFilters] = React.useState(() => {});

    // Selected shows - Shows that are chosen from the search bar and appear in "selected shows" and/or in the grid
    const [selectedShows, setSelectedShows] = React.useState<DummyShow[]>(() => []);

    // Filtered shows - Shows that appear under the search bar
    const [filteredShows, setFilteredShows] = React.useState<DummyShow[]>(() => allShowsArr);
    const [sites, setSites] = React.useState(() => []);

    

    const changeCategories = (
        event: React.MouseEvent<HTMLElement>,
        newCategory: string,
    ) => {
        console.log("New category: " + newCategory);
        if (newCategory != null) {
            setCategories(newCategory);
        } else {
            setCategories('');
        }

        let selectedShows: DummyShow[];
        if (newCategory == "Musical") {
            selectedShows = allMusicalsObj;
        } else if (newCategory == "Play") {
            selectedShows = allPlaysObj
        } else {
            selectedShows = [];
        }
        
        // let filteredShows: DummyShow[] = filterShowsFromPage("ShowType", newCategory);
        setSelectedShows(selectedShows);
    };

    const changeTimes = (
        event: React.MouseEvent<HTMLElement>,
        newTimes: string[],
    ) => {
        setTimes(newTimes)
        // console.log("New time " + newTimes);
    };

    const handleIconClick = (e: any) => {   
        console.log(e.currentTarget.id);
        if (e.currentTarget.id == "All Musicals" || e.currentTarget.id == "All Plays") {
            setSelectedShows([]);
            setCategories('');
        } else {
            const newShows = selectedShows.filter((show) => {
                return show.name != e.currentTarget.id;
            });
            setSelectedShows(newShows);
        }
    }

    const showSearchInputChange = (e: any) => {
        if (e.target.value == undefined || e.target.value.length == 0) {
            // Change filtered shows to exclude currently seelcted shows
            const allButSelected = allShowsArr.filter((show) => {
                return !selectedShows.includes(show);
            });
            setFilteredShows(allButSelected);
        } else {
            const newShows = allShowsArr.filter((show) => {
                return show.name.includes(e.target.value);
            });
            setFilteredShows(newShows);
        }
    }

    const showSearchValueChange = (e: any, v: DummyShow) => {
        console.log("Value " + JSON.stringify(v));
        console.log("Selected shows " + JSON.stringify(selectedShows));
        if (selectedShows == allPlaysObj || selectedShows == allMusicalsObj) {
            setSelectedShows([v]);
        } else {
            if (v?.name.length > 0 && !selectedShows.includes(v)) {
                setSelectedShows([...selectedShows, v])
            }
        }
    }

    const filterShowsFromPage = (filterName: string, filter: string): DummyShow[] => {
        if (filterName == "ShowType") {
            const filteredShows = allShowsArr.filter((show) => {
                return show.type.includes(filter);
            });
            // console.log(filteredShows)
            return filteredShows;
        }
        return [];
    }

    getListings();

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
                        getOptionLabel={(show) => show.name}
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
                    <MainFilters categories={categories} times={times} date={date} selectedShows={selectedShows}
                        updateCategoriesFunction={changeCategories} selectedShowIconClickHandler={handleIconClick}
                        updateTimesFunction={changeTimes} ></MainFilters>

                </Box>

                {/* // Main Price Grid - 40% + 20% of padding */}
                <MainTable rows={rows} cols={cols}></MainTable>

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