import React, { useState, useEffect } from 'react'
import SearchForm from '../SearchForm/SearchForm.js'
import SearchResults from '../SearchResults/SearchResults.js'
import Modal from '../UI/Modal/Modal.js'
import Login from '../Login/Login.js'
import Container from 'react-bootstrap/Container';
import classes from './SearchConcerts.module.css'

const SearchConcertsForSimilarArtists = props => {
  const [recommendationsState, setRecommendationsState] = useState([])
  const [displayModal, setDisplayModal] = useState(false)
  const [isLoggedIn, setIsLoggedIn]=useState(false)


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

  const loginHandler =()=>{
    setIsLoggedIn(true);
  }
  
  const logoutHandler = () => {
    setIsLoggedIn(false);
    window.localStorage.removeItem('token')
  }

  return (
    <div>
      <Container className={classes.container5}>
        <Login isLoggedIn={isLoggedIn} onLogin={loginHandler} onLogout={logoutHandler} />
        {/* {isLoggedIn && ( */}
          <>
            <SearchForm onChange={handleState} onDisplayModal={displayModalHandler} />
            {displayModal && (
              <Modal onClose={hideModalHandler}>
                <SearchResults recommendations={recommendationsState} />
              </Modal>
            )}
          </>
        {/* )} */}
      </Container>
    </div>
  );
};
export default SearchConcertsForSimilarArtists
