import React, { useState, useEffect, useRef  } from 'react'
import axios from 'axios'
import classes from './SearchBar.module.css'
import Spinner from 'react-bootstrap/Spinner';
import { BiSearch } from 'react-icons/bi';
import { MdClear } from 'react-icons/md';



  const SearchBar = (props) => {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')
  const [displayList, setDisplayList] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const inputRef = useRef(null);

  useEffect(() => {
    const timer=setTimeout(() => {
      handleFilter();
    }, 5000); 
    return ()=> clearTimeout(timer) 
  }, [wordEntered]);

    const handleFilter = async () => {  
      const searchWord= inputRef.current.value;
    // const searchWord = wordEntered;
    let result=[]
    if (!searchWord || searchWord === '') {
      setFilteredData([])
    } else {
      result = await getSearchResults(searchWord)
      setIsLoading(false)
      setDisplayList(true)
      setFilteredData(result)
      props.onSetSearchKey(searchWord)

    }
  }

  const clearInput = () => {
    inputRef.current.value=""
    setFilteredData([])
    setWordEntered('')
    
    setDisplayList(false)

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
  setIsLoading(true)
  setWordEntered(event.target.value)
  handleFilter()

}

const handleItemClick = (item) => {
  inputRef.current.value = item.name; 
  setWordEntered(item.name)
  
  // clearInput()
  console.log('inputRef',inputRef.current.value)
  handleFilter()
  setDisplayList(false)
};


const searchInput = (e) => {
  props.onSetSearchKey(e)
  props.onSearchInput(e)
  clearInput()
  console.log(e)
}

  return (
    <div className={classes.container}>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={classes.arrowDown} viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg> */}
        <p>Step 2 </p>



    <div className={classes.search}>
      <div className={classes.searchInputs}>
        <input
          type='text'
          placeholder='Search for your favorite artist...'
          ref={inputRef}
          // value={wordEntered}
          onChange={(e)=>handleInputChange(e)}
        />
        <div className={classes.searchIcon}>
            {filteredData.length === 0 ? (
              <BiSearch onClick={e=> searchInput(e)}/>
            ) 
            : (
              <div>
               <BiSearch onClick={e=> searchInput(e)}/>
              <MdClear id="clearBtn" onClick={clearInput} />
              </div>
            )
            }
          </div>
      </div>

    {(displayList && wordEntered!=="")  &&
        <div className={classes.dataResult}>
          {isLoading && 
          <Spinner className={classes.spinner} animation="border" role="status" >
    </Spinner>
      } 
          {filteredData.map(item =>( 
            <a className={classes.dataItem} onClick={()=> handleItemClick(item)}>
          {item.images && item.images[0] && item.images[0].url ? (
      <img src={item.images[0].url} alt='artist' style={{ height: 40, width: 40, borderRadius: 50 }}/>
    ) : (
        <div className={classes.noImageText} style={{ height: 40, width: 40, borderRadius: 50 }} ></div>
    )}  
                <p>{item.name}</p>
              </a>
            ))}
        </div>
  }
    </div>
    </div>
  )}

export default SearchBar
