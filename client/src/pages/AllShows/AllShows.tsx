import { Container, Grid, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Header from "../../components/Header/Header";
import './AllShows.css';

const shows = [
  {
    title: 'Chicago',
    color: 'red',
  },
  {
    title: 'Death Becomes Her',
    color: 'purple',
  },
  {
    title: 'MJ The Musical',
    color: 'white',
  },
  {
    title: 'The Outsiders',
    color: 'green',
  },
  {
    title: 'Cabaret',
    color: 'black',
  },
  {
    title: 'Cats: The Jellicle Ball',
    color: 'yellow',
  },
  {
    title: 'Wicked',
    color: 'teal',
  },
  {
    title: 'Just in Time',
    color: 'blue',
  },
];

function AllShows() {


    return (
        <div>
            {/* Header Navbar - 10% of page */}
            <Header></Header>

            {/* Title and Selection Buttons - 20% of page */} 
            <Container
                maxWidth={false}
                style={{
                    backgroundColor: '#e6e6e6',
                    height: '20vh',
                    display: 'grid',
                    placeItems: 'center'
            }}>
                <h2 className="allshowstitle">All Available Shows</h2>
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
                        {shows.map((show) => (
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