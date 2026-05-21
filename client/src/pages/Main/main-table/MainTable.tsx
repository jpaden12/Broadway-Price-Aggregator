import { Box, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef, GridRowsProp } from '@mui/x-data-grid';

type TableProps = {
  rows: GridRowsProp; 
  cols: GridColDef[];
} 

function MainTable({rows, cols}: TableProps) {
  
  return (
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
  )
}

export default MainTable; 