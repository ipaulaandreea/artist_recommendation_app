import React, { useState, useEffect } from 'react'
import axios from 'axios'
import classes from './SearchBar.module.css'

// const SearchBar = ({ props, data }) => {
  const SearchBar = (props) => {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')


  useEffect(() => {
    const timer=setTimeout(() => {
      handleFilter();
    }, 2500); 
    return ()=> clearTimeout(timer) 
  }, [wordEntered]);



  const handleFilter = async () => {  
    const searchWord = wordEntered;

    let result=[]
    if (!searchWord || searchWord === '') {
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

const handleInputChange=(event)=>{
  setWordEntered(event.target.value)

}

const handleItemClick = (item) => {
  console.log('Item selected:', item.name);
  setWordEntered(item.name)

};


  return (
    <div className={classes.search}>
      <div className={classes.searchInputs}>
        <input
          type='text'
          placeholder='Search for your favorite artist...'
          value={wordEntered}
          onChange={e=>handleInputChange(e)}
          // onChange={handleFilter}
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
            <a className={classes.dataItem} onClick={() => handleItemClick(item)}>
                <p>{item.name}</p>
                {/* adauga si imaginea */}
              </a>
            ))
          }
      
        </div>

    </div>
  )
}

export default SearchBar