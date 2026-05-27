import { Container, Divider, Grid, ImageList, ImageListItem, ImageListItemBar, ToggleButton, ToggleButtonGroup } from "@mui/material";
import './AllShows.css';
import React, { useEffect } from "react";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { ShowType, type ShowInfo } from "../../api-layer/types";


const allShows: object[] = [
  {
    title: 'Chicago',
    color: 'red',
    type: ShowType.MUSICAL,
    theatre: 'Ambassador Theatre'
  },
  {
    title: 'Death Becomes Her',
    color: 'purple',
    type: ShowType.MUSICAL,
    theatre: 'Lunt Fontanne Theatre'
  },
  {
    title: 'Oh, Mary',
    color: 'white',
    type: ShowType.PLAY,
    theatre: 'Lyceum Theatre'
  },
  {
    title: 'The Outsiders',
    color: 'green',
    type: ShowType.MUSICAL,
    theatre: 'Bernard B. Jacobs Theatre'
  },
  {
    title: 'Death of a Salesman',
    color: 'black',
    type: ShowType.PLAY,
    theatre: 'Winter Garden Theatre'
  },
  {
    title: 'Cats: The Jellicle Ball',
    color: 'yellow',
    type: ShowType.MUSICAL,
    theatre: 'Broadhurst Theatre'
  },
  {
    title: 'Wicked',
    color: 'teal',
    type: ShowType.MUSICAL,
    theatre: 'Gershwin Theatre'
  },
  {
    title: 'Stranger Things',
    color: 'blue',
    type: ShowType.PLAY,
    theatre: 'Marquis Theatre'
  },
];

const colors = ['blue', 'red', 'teal', 'orange', 'black', 'green', 'aqua', 'yellow', 'pink', 'white', 'light blue', 'gold', 'violet'];
const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
}


function AllShows() {
    const [categories, setCategories] = React.useState(() => ['Play', 'Musical']);
    const [currentShows, setCurrentShows] = React.useState(() => []);
    const [availableShows, setAvailableShows] = React.useState(() => []);

    useEffect(() => {
        const listings = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/get-all-shows', {
                    method: "GET", 
                    headers: {
                        "Content-Type": "application/json"
                    }
                }); 
                const result = await response.json();
                console.log(result);
                setAvailableShows(result);
                setCurrentShows(result);
                console.log(currentShows);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        }
        listings();  
    }, [])

    const changeCategories = (
            event: React.MouseEvent<HTMLElement>,
            newCategories: string[],
        ) => {
            // console.log("New categories after click: " + newCategories);
            
            setCategories(newCategories);
            updateShows(newCategories)
        };

    const updateShows = (categories: string[]) => {
        if (categories.length == 0 || categories.length == 2) {
            setCurrentShows(availableShows)
        } else {
            const newShows = availableShows.filter((show) => {
                return show.type == categories[0];
            });
            setCurrentShows(newShows);
        } 
    }


    return (
        <div>
            {/* <Header></Header> */}

            {/* Title and Selection Buttons - 25% of page */} 
            <Container
                maxWidth={false}
                style={{
                    backgroundColor: '#e6e6e6',
                    height: '25vh',
                    display: 'grid',
                    placeItems: 'center',
            }}>
                <h2 className="allshowstitle">All Available Shows</h2>
                <ToggleButtonGroup
                    value={categories}
                    size='small'
                    sx={{ 
                        mr: 2, 
                        marginBottom: '5vh'
                    }}
                    onChange={changeCategories}>
                    <ToggleButton 
                        value="Play"
                        sx={{ 
                            width: 170,
                            backgroundColor: 'white', 
                            border: '3px solid #99e6ff',
                            '&: hover': {
                                border: '3px solid #99e6ff'
                            }
                        }}>
                        <TheaterComedyIcon />
                        Play
                    </ToggleButton>
                    <Divider orientation="vertical" flexItem />
                    <ToggleButton 
                        value="Musical"
                        sx={{ 
                            width: 170,
                            backgroundColor: 'white',
                            border: '3px solid #99e6ff',
                            '&: hover': {
                                border: '3px solid #99e6ff'
                            }
                        }}>
                        <MusicNoteIcon />
                        Musical
                    </ToggleButton>
                </ToggleButtonGroup>
            </Container>

            {/* Grid - 55% of page */} 
            <div style={{
                backgroundColor: '#e6e6e6',
                height: 'fit-content',
                minHeight: '50vh',
                textAlign: 'center',
            }}>
                <Grid container spacing={0.4}>
                    <Grid size={2}></Grid>
                    <Grid size={8}>
                        <ImageList cols={3}>
                        {currentShows.map((show: ShowInfo) => (
                            <ImageListItem key={show.show_name}>
                                <div style={{
                                    backgroundColor: randomColor(), 
                                    width: '250px',
                                    height: '250px',
                                    display: 'inline-block',
                                    textAlign: 'center',
                                    marginLeft: 'auto',
                                    marginRight: 'auto'
                                }}
                                ></div>
                                <ImageListItemBar 
                                    title={show.show_name}
                                    subtitle={<div><span>{show.venue} </span><div>Closing XYZ</div></div>}
                                    position="below"
                                />
                            </ImageListItem>
                        ))}
                        </ImageList>
                    </Grid>
                    <Grid size={2}></Grid>
                </Grid>
            </div>
            
            {/* Pagination - 5% of page */}
            <div style={{
                backgroundColor: '#e6e6e6',
                height: '10vh'
            }}></div>

            {/* Footer 5% of page */} 
            <div style={{
                backgroundColor: '#e6e6e6',
                height: '5vh'
            }}></div>
        </div>
    )
}

export default AllShows;