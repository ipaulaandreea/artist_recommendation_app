import classes from './App.module.css'
import React from 'react'
import { Container, Typography, Grid } from '@mui/material'
import { styled } from '@mui/system'
import backgroundImage from './bckg.jpg'
import Header from './components/Header/Header'
import RecommendationCard from './components/RecommendationCard/RecommendationCard'

const Background = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
})

function App () {
  return (
    <Background>
      {/* <Header></Header> */}
      <Container>
        <Grid container spacing={5}>
          <RecommendationCard  />
           <RecommendationCard /> 
           <RecommendationCard />
          <RecommendationCard />
           <RecommendationCard />
        </Grid>
      </Container>
    </Background>
  )
}

export default App
