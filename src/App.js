import classes from './App.module.css'
import React, { useState, useEffect, useContext } from 'react'
import { styled } from '@mui/system'
import SearchResults from './components/SearchResults/SearchResults'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchForm from './components/SearchForm/SearchForm'
import axios from 'axios';
import SearchConcertsForSimilarArtists from './components/SearchConcertsForSimilarArtists/SearchConcertsForSimilarArtists.js'
import bckg from './bckg3.jpg'


export default function App() {

  const [displayResults, setDisplayResults] = useState(false)


  const displayResultsHandler = () => {
    console.log("Im in App.js")
    setDisplayResults(true)
  }

  const hideResultsHandler = () => {
    console.log('im in app hide')
    setDisplayResults(false)
  }
  

  return (
  
<div>
      <SearchConcertsForSimilarArtists onHideResults={hideResultsHandler} onDisplayResults={displayResultsHandler}/>
      </div>


  )
}

