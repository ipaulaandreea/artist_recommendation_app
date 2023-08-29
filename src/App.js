import classes from './App.module.css'
import React, { useState, useEffect } from 'react'
// import { Container, Typography, Grid } from '@mui/material'
import { styled } from '@mui/system'
import SearchResults from './components/SearchResults/SearchResults'
import Header from './components/Header/Header'
import RecommendationCard from './components/RecommendationCard/RecommendationCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import Greeting from './components/Greeting/Greeting'
import axios from 'axios';
import ArtistProvider from './components/store/ArtistProvider';

const Background = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: 'black'
})

function App() {



  const [displayResults, setDisplayResults] = useState(false)


  
  const displayResultsHandler = () => {
    setDisplayResults(true)
  }

  const hideResultsHandler = () => {
    setDisplayResults(false)
  }


  return (
    <Background>
     
      {displayResults && <SearchResults onHideResults={hideResultsHandler} />}
      <Greeting onDisplayResults={displayResultsHandler} />
      
    </Background>
  )
}

export default App
