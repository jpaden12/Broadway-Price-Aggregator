import { Container, Divider, Grid, ImageList, ImageListItem, ImageListItemBar, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Header from "../../components/Header/Header";
import './AllShows.css';
import React from "react";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { ShowType } from "../../api-layer/types";


const allShows: object[] = [
  {
    title: 'Chicago',
    color: 'red',
    type: ShowType.MUSICAL
  },
  {
    title: 'Death Becomes Her',
    color: 'purple',
    type: ShowType.MUSICAL,
  },
  {
    title: 'Oh, Mary',
    color: 'white',
    type: ShowType.PLAY,
  },
  {
    title: 'The Outsiders',
    color: 'green',
    type: ShowType.MUSICAL,
  },
  {
    title: 'Death of a Salesman',
    color: 'black',
    type: ShowType.PLAY,
  },
  {
    title: 'Cats: The Jellicle Ball',
    color: 'yellow',
    type: ShowType.MUSICAL,
  },
  {
    title: 'Wicked',
    color: 'teal',
    type: ShowType.MUSICAL,
  },
  {
    title: 'Stranger Things',
    color: 'blue',
    type: ShowType.PLAY,
  },
];

function AllShows() {
    const [categories, setCategories] = React.useState(() => ['Play']);
    console.log("Initial categories: " + categories);
    const [currentShows, setCurrentShows] = React.useState(() => allShows);

    const changeCategories = (
            event: React.MouseEvent<HTMLElement>,
            newCategories: string[],
        ) => {
            // console.log("New categories after click: " + newCategories);
            
            setCategories(newCategories);
            updateShows(newCategories)
        };
    
    const numbers = [1, 2, 3, 4];

    const updateShows = (categories: string[]) => {
        console.log(categories);

        if (categories.length == 0 || categories.length == 2) {
            setCurrentShows(allShows)
        } else {
            const newShows = allShows.filter((show) => {
                console.log("Type: " + show.type);
                return show.type == categories[0];
            });
            setCurrentShows(newShows);
            console.log("Current shows: " + newShows)
        }
       
        
    }


    return (
        <div>
            {/* Header Navbar - 10% of page */}
            <Header></Header>

            {/* Title and Selection Buttons - 20% of page */} 
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
                            border: '3px solid #99e6ff'
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
                            border: '3px solid #99e6ff'
                        }}>
                        <MusicNoteIcon />
                        Musical
                    </ToggleButton>
                </ToggleButtonGroup>
            </Container>

            {/* Grid - 55% of page */} 
            <div style={{
                backgroundColor: '#e6e6e6',
                // height: '70vh'
                textAlign: 'center',
            }}>
                <Grid container spacing={0.4}>
                    <Grid size={2}></Grid>
                    <Grid size={8}>
                        <ImageList cols={3}>
                        {currentShows.map((show) => (
                            <ImageListItem key={show.title}>
                                <div style={{
                                    backgroundColor: show.color, 
                                    width: '250px',
                                    height: '250px',
                                    display: 'inline-block',
                                    textAlign: 'center',
                                    marginLeft: 'auto',
                                    marginRight: 'auto'
                                }}
                                ></div>
                                <ImageListItemBar 
                                    title={show.title}
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

            {/* Footer 10% of page */} 
        </div>
    )
}

export default AllShows;