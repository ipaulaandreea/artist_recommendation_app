import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchConcertsForSimilarArtists from './components/SearchConcertsForSimilarArtists/SearchConcertsForSimilarArtists.js'
import Welcome from './components/Welcome/Welcome.js'

export default function App() {
  return (
    <div>
      <Welcome/> 
      <SearchConcertsForSimilarArtists/>
    </div>
  )
}
