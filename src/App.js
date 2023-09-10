import classes from './App.module.css'
import React, { useState, useEffect, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchConcertsForSimilarArtists from './components/SearchConcertsForSimilarArtists/SearchConcertsForSimilarArtists.js'

export default function App() {

  const [displayResults, setDisplayResults] = useState(false)

  const displayResultsHandler = () => {
    setDisplayResults(true)
  }

  const hideResultsHandler = () => {
    setDisplayResults(false)
  }
  
  return (
<div>
      <SearchConcertsForSimilarArtists onHideResults={hideResultsHandler} onDisplayResults={displayResultsHandler}/>
      </div>


  )
}

