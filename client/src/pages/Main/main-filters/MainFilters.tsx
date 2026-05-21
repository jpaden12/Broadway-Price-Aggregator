import { Box, Grid, ToggleButtonGroup, ToggleButton, Divider, Stack, Button } from "@mui/material";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import SunnyIcon from '@mui/icons-material/Sunny';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import UpdateIcon from '@mui/icons-material/Update';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ClearIcon from '@mui/icons-material/Clear';
import type { DummyShow } from "../../../api-layer/types";

type FilterProps = {
  categories: string,
  times: string[],
  date: string, 
  selectedShows: DummyShow[], 
  updateCategoriesFunction: (e: React.MouseEvent<HTMLElement>, newCategory: string) => void, 
  selectedShowIconClickHandler: (e: any) => void,
  updateTimesFunction: (e: any, times: string[]) => void
}

function MainFilters({categories, times, date, selectedShows, updateCategoriesFunction, selectedShowIconClickHandler, updateTimesFunction}: FilterProps) {
  return (
    
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
                <div className="categories">Filter by Category</div>
            </Grid>
            <Grid size={10} sx={{
                textAlign: 'left'
            }}>
                <ToggleButtonGroup
                    value={categories}
                    exclusive
                    size='medium'
                    sx={{ 
                        mr: 2 
                    }}
                    onChange={updateCategoriesFunction}>
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
                    onChange={updateTimesFunction}    
                    sx={{ 
                        mr: 2 
                    }}>
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
                        <Button variant='contained' endIcon={<ClearIcon id={show?.name} onClick={selectedShowIconClickHandler} />}>{show?.name}</Button>
                    ))}
                </Stack>
            </Grid>
        </Grid>
    </Box>
  )
}

export default MainFilters; 