import React, { useState, useEffect, useContext } from 'react';
import SearchForm from '../SearchForm/SearchForm.js'
import SearchResults from '../SearchResults/SearchResults.js'
import Modal from '../UI/Modal/Modal.js'

const SearchConcertsForSimilarArtists = props => {

    let [recommendationsState, setRecommendationsState] = useState([]);

    const handleState = (recommendations) => {
        setRecommendationsState(recommendations);
        console.log("I am in Search...", recommendationsState);
    }
    const [displayModal, setDisplayModal] = useState(false)


    const displayResultsHandler = () => {
        setDisplayModal(true);
        console.log("Im in searchConcerts")
        props.onDisplayResults();
    }
  
    const hideResultsHandler = () => {
        setDisplayModal(false);
        console.log("Im in hide")
        props.onHideResults()
    }

return (
    <div>
    <SearchForm onChange = {handleState} onDisplayResults={displayResultsHandler}/> 
    { displayModal && <Modal onClose={hideResultsHandler}>
    <SearchResults onHideResults={hideResultsHandler} recommendations={recommendationsState} />
    </Modal>}
    </div>
)
}

export default SearchConcertsForSimilarArtists;