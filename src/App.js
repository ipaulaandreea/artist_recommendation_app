import classes from './App.module.css'
import React, { useState } from 'react'
import { Container, Typography, Grid } from '@mui/material'
import { styled } from '@mui/system'
import SearchResults from './components/SearchResults/SearchResults'
import Header from './components/Header/Header'
import RecommendationCard from './components/RecommendationCard/RecommendationCard'
import 'bootstrap/dist/css/bootstrap.min.css'
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

function App() {
  const CLIENT_ID = '6674cfd3c7f24b579bdf58acd6f13d95'
  const REDIRECT_URI = 'http://localhost:3000/'
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
  const RESPONSE_TYPE = 'token'

  const [displayResults, setDisplayResults] = useState(false)

  const displayResultsHandler = () => {
    setDisplayResults(true)
  }

  const hideResultsHandler = () => {
    setDisplayResults(false)
  }

  return (
    <Background>
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        Login to Spotify>
      </a>
      {displayResults && <SearchResults onHideResults={hideResultsHandler} />}
      <Greeting onDisplayResults={displayResultsHandler} />
    </Background>
  )
}

export default App
