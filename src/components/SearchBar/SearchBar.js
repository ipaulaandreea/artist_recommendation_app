import React, { useState } from 'react'
import axios from 'axios'
import { classes } from './SearchBar.module.css'

const SearchBar = ({ data }) => {
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
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }

  return (
    <div className='search'>
      <div className='searchInputs'>
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

        <div className='dataResult'>
          {filteredData.map(item =>( 
              <a className='dataItem'>
                <p>{item.name} </p>
              </a>
            ))
          }
        </div>

    </div>
  )
}

export default SearchBar
