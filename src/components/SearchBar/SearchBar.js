import React, { useState } from 'react'
import axios from 'axios'
import classes from './SearchBar.module.css'

// const SearchBar = ({ props, data }) => {
  const SearchBar = (props) => {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  const getSearchResults = async e => {
    let token = window.localStorage.getItem('token')

    const { data } = await axios.get(
      'https://api.spotify.com/v1/search',
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          q: e,
          type: 'artist'
        }
      }
    )
    const recommendations = data.artists.items.slice(0, 6)
    console.log(recommendations)
    return recommendations;
  }

  const handleFilter = async event => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    let result=[]
    if (searchWord === '') {
      setFilteredData([])
    } else {
      result = await getSearchResults(searchWord)
      
      console.log(result)

      setFilteredData(result)
      props.onSetSearchKey(wordEntered)
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchInputs}>
        <input
          type='text'
          placeholder='Search for your favorite artist...'
          value={wordEntered}
          onChange={e => handleFilter(e)}
        />
        {/* <div className="searchIcon">
            {filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div> */}
      </div>

        <div className={classes.dataResult}>
          {filteredData.map(item =>( 
              <a className={classes.dataItem}>
                <p>{item.name} </p>
              </a>
            ))
          }
        </div>

    </div>
  )
}

export default SearchBar
