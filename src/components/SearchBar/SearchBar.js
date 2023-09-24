import React, { useState, useRef } from 'react'
import axios from 'axios'
import classes from './SearchBar.module.css'
import { BiSearch } from 'react-icons/bi'
import { MdClear } from 'react-icons/md'
import { Container } from 'react-bootstrap'
import { debounce } from 'lodash'


const SearchBar = props => {
  const [results, setResults] = useState([])
  const [displayList, setDisplayList] = useState(false)
  const searchInputRef = useRef(null)

  const handleItemClick = async item => {
    searchInputRef.current.value = item.name
    setDisplayList(false)
    const recommendations = await getRecommendations(item.name)
    setResults(recommendations)
  }

  const getRecommendations = async value => {
    if (!value) {
      return
    }
    let token = window.localStorage.getItem('token')

    const { data } = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: value,
        type: 'artist'
      }
    })

    let recommendations = data.artists.items.slice(0, 6)
    return recommendations
  }

  const clearInput = () => {
    searchInputRef.current.value = ''
    setResults([])
    setDisplayList(false)
  }

  const searchInput = () => {
    console.log('searchInputRef.current.value', searchInputRef.current.value)
    props.onSearchInput(searchInputRef.current.value)
    clearInput()
  }

  const handleInputChange = debounce(async e => {
    console.log(searchInputRef.current.value)
    try {
      const recommandations = await getRecommendations(
        searchInputRef.current.value
      )
      console.log(recommandations)

      setResults(recommandations)
      console.log(results)
      setDisplayList(true)
      console.log(displayList)
    } catch (error) {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 400)
      ) {
        console.log('Unauthorized. Redirecting to reauthentication')

        window.location.href = `${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}`
      } else {
        console.log('Error:', error)
      }
    }
  }, 1000)

  return (
    <Container className={classes.container7}>
      <Container className={classes.search}>
        <div style={{ display: 'flex', width: '100%' }}>
          <div className={classes.searchInputs}>
            <input
              type='text'
              placeholder='Search for your favorite artist...'
              ref={searchInputRef}
              onChange={e => handleInputChange(e.target.value)}
            />
          </div>
          <div className={classes.searchIcon}>
            {results && results.length === 0 ? (
              <BiSearch onClick={searchInput} />
            ) : (
              <div>
                <BiSearch onClick={searchInput} />
                <MdClear id='clearBtn' onClick={clearInput} />
              </div>
            )}
          </div>
        </div>
      </Container>

      {displayList && searchInputRef.current.value !== '' && (
        <Container className={classes.dataResult}>
          {results.map(item => (
            <a
              className={classes.dataItem}
              onClick={() => handleItemClick(item)}
            >
              {item.images && item.images[0] && item.images[0].url ? (
                <img
                  src={item.images[0].url}
                  alt='artist'
                  style={{ height: 40, width: 40, borderRadius: 50 }}
                />
              ) : (
                <div
                  className={classes.noImageText}
                  style={{ height: 40, width: 40, borderRadius: 50 }}
                ></div>
              )}
              <p>{item.name}</p>
            </a>
          ))}
        </Container>
      )}
    </Container>
  )
}

export default SearchBar
