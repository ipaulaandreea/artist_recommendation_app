import react from 'react'
import { Paper, Grid, Typography, Box } from '@mui/material'
import classes from '../../App.module.css'
import { AccessTime } from "@mui/icons-material"

const RecommendationCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={8}>
        <img
          className={classes['img']}
          src='https://www.billboard.com/wp-content/uploads/2022/11/blink-182-2001-billboard-1548.jpg?w=942&h=623&crop=1'
          alt=''
        />
        <Box padding={2}>
          <Typography variant='h5' component='h5' color='initial'>
            Artist name
          </Typography>
          <Box
        sx={{
            display: "flex",
            alignItems: "center"
        }}
        >
            <AccessTime sx = {{width: 12.5 }}/>
            <Typography variant="body2" component="p" marginLeft={0.5}>
                Number of listeners/month: 1000
            </Typography>

        </Box>
        <Box sx={{
            display: "flex",
            alignItems: "center"
        }}>
            <Typography variant="body2" component="p">
                Next concert: Bucharest
            </Typography>
        </Box>
        </Box>

      </Paper>
    </Grid>
  )
}

export default RecommendationCard
