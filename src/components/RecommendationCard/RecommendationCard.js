import react from 'react'
import { Card, CardMedia, Paper, Grid, Typography, Box, createTheme, ThemeProvider } from '@mui/material'
import classes from '../../App.module.css'
import { AccessTime } from "@mui/icons-material"


const RecommendationCard = () => {
  return (

    <Grid item xs={3}>
      <Card 
  variant="outlined"
  sx={{
    display: 'flex',
    p: 1,
    mt: 4,
    flexDirection: {
      xs: 'column', // mobile
      sm: 'row', // tablet and up
    },
  }}
>
  <CardMedia
    component="img"
    width="100"
    height="100"
    alt="Artist-pic"
    src='https://www.billboard.com/wp-content/uploads/2022/11/blink-182-2001-billboard-1548.jpg?w=942&h=623&crop=1'
    sx={{
      borderRadius: 0.5,
      width: { xs: '100%', sm: 100 },
      mr: { sm: 1.5 },
      mb: { xs: 1.5, sm: 0 },
    
    }}
  />
  <Box sx={{ alignSelf: 'center', ml: 2, mt:4 }}>
    <Typography variant="body2" color="text.secondary">
      Artist Name
    </Typography>
    <Typography component="div" fontWeight="bold">
      1000 listeners/month
    </Typography>
    <Box
      sx={{
        ml: -1,
        mt: 0.75,
        px: 1,
        py: 0.5,
        borderRadius: 1,
        display: 'flex',
        typography: 'caption',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? 'primary.900' : 'primary.50',
        color: (theme) =>
          theme.palette.mode === 'dark' ? '#fff' : 'primary.700',
      }}
    >
      {/* <InfoRounded sx={{ fontSize: 16, mr: 0.5, mt: '1px' }} /> */}
      Next Gig: Bucharest
    </Box>
  </Box>
</Card>

    </Grid>
    
  )
}

export default RecommendationCard
