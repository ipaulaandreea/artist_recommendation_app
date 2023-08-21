import classes from './App.module.css'
import React from 'react'
import { Container, Typography, Grid } from '@mui/material'
import { styled } from '@mui/system'

import Header from './components/Header/Header'
import RecommendationCard from './components/RecommendationCard/RecommendationCard'
import {Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import Greeting from './components/Greeting/Greeting'

const Background = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: 'black'
})

function App () {
  
  return (

    <Background>
      {/* <Header/> */}
      <Greeting/>
      <Container>
        <Grid container spacing={5}>
          <RecommendationCard  />
           <RecommendationCard /> 
           <RecommendationCard />
          <RecommendationCard />
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
