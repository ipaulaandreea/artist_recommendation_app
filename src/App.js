import classes from './App.module.css'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchConcertsForSimilarArtists from './components/SearchConcertsForSimilarArtists/SearchConcertsForSimilarArtists.js'
import Welcome from './components/Welcome/Welcome.js'

export default function App() {

  
  return (
<div className={classes.container}>
  <Welcome/> 
    <SearchConcertsForSimilarArtists/>
      
      </div>


  )
}

