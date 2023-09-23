import React, { useState, useRef } from 'react';
import axios from 'axios';
import classes from './SearchBar.module.css';
import { BiSearch } from 'react-icons/bi';
import { MdClear } from 'react-icons/md';
import { Container } from 'react-bootstrap';
import { debounce } from 'lodash';

const SearchBar = (props) => {
  const [results, setResults] = useState([]);
  const [displayList, setDisplayList] = useState(false);
  const searchInputRef = useRef(null); 

  const getRecommandations = async (value) => {
    if (!value) {
      return;
    }
    let token = window.localStorage.getItem('token');

    const { data } = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: value,
        type: 'artist',
      },
    });

    let recommendations = data.artists.items.slice(0, 6);
    return recommendations;
  }

  const clearInput = () => {
    searchInputRef.current.value="";
    setResults([]);
    setDisplayList(false);
  };

  const handleItemClick = (item) => {
    searchInputRef.current.value=item.name;
    setDisplayList(false);
  };

  const searchInput = () => {
    console.log('searchInputRef.current.value', searchInputRef.current.value)
    props.onSearchInput(searchInputRef.current.value);
    clearInput();
  };

  const handleInputChange = debounce(async (e) => {
    console.log(searchInputRef.current.value);
    const recommandations = await getRecommandations(searchInputRef.current.value);
    console.log(recommandations);
    setResults(recommandations);
    console.log(results);
    setDisplayList(true);
    console.log(displayList);
  }, 1000);

  return (
    <Container className={classes.container7}>
      <p>Step 2</p>
      <Container className={classes.search}>
        <div className={classes.searchInputs}>
          <input
            type="text"
            placeholder="Search for your favorite artist..."
            ref={searchInputRef}
            onChange={(e) => handleInputChange(e.target.value)}
          />
          <div className={classes.searchIcon}>
            {results && results.length === 0 ? (
              <BiSearch onClick={searchInput} />
            ) : (
              <div>
                <BiSearch onClick={searchInput} />
                <MdClear id="clearBtn" onClick={clearInput} />
              </div>
            )}
          </div>
        </div>

        {displayList && searchInputRef.current.value !== '' && (
          <Container className={classes.dataResult}>
            {results.map((item) => (
              <a className={classes.dataItem} onClick={() => handleItemClick(item)}>
                {item.images && item.images[0] && item.images[0].url ? (
                  <img
                    src={item.images[0].url}
                    alt="artist"
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
    </Container>
  );
};

export default SearchBar;
