import React, { useState, useEffect } from 'react'
import SearchForm from '../SearchForm/SearchForm.js'
import SearchResults from '../SearchResults/SearchResults.js'
import Modal from '../UI/Modal/Modal.js'
import Login from '../Login/Login.js'

const SearchConcertsForSimilarArtists = props => {
  const [recommendationsState, setRecommendationsState] = useState([])
  const [displayModal, setDisplayModal] = useState(false)

  useEffect(() => { 
    console.log('state:',recommendationsState)
  }, [recommendationsState]);

  const handleState = recommendations => {
    setRecommendationsState(prevRecommendations=>recommendations)
  }

  const displayModalHandler = () => {
    setDisplayModal(true)

  }

  const hideModalHandler = () => {
    setDisplayModal(false)
  
    setRecommendationsState([])
  }

  return (
    <div>
      <Login/> 
      <SearchForm
        onChange={handleState}
        onDisplayModal={displayModalHandler}
      />
      {displayModal && (
        <Modal onClose={hideModalHandler}>
          <SearchResults recommendations={recommendationsState} />
        </Modal>
      )}
    </div>
  )
}
export default SearchConcertsForSimilarArtists
