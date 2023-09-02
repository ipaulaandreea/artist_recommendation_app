import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col, Image, Card, Form, Button } from 'react-bootstrap'
import backgroundImage from '../../bckg3.jpg'
import classes from './SearchForm.module.css'
import axios from 'axios'
import SearchResults from '../SearchResults/SearchResults.js'

const SearchForm = props => {
  const CLIENT_ID = '6674cfd3c7f24b579bdf58acd6f13d95'
  const REDIRECT_URI = 'http://localhost:3000/'
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
  const RESPONSE_TYPE = 'token'

  const [token, setToken] = useState('')
  const [searchKey, setSearchKey] = useState('')
  const [artist, setArtist] = useState('')
  const [recommendedArtists, setRecommendedArtists] = useState([])

  let recommendations = []

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem('token')
    if (!token && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find(elem => elem.startsWith('access_token'))
        .split('=')[1]
      window.location.hash = ''
      window.localStorage.setItem('token', token)
    }
    setToken(token)
  }, [recommendations])

  const logout = () => {
    setToken('')
    window.localStorage.removeItem('token')
  }

  const submitHandler = async e => {
    e.preventDefault()
    const { data } = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: searchKey,
        type: 'artist'
      }
    })
    setArtist(data.artists.items[0].id)
    let artistName = data.artists.items[0].name
    let artistId = data.artists.items[0].id
    console.log('artist name', artistName, 'artist id', artistId)
    recommendArtist(artistId)
    
  }

  const recommendArtist = async id => {
    let token = window.localStorage.getItem('token')
    console.log(token)
    let artistId = id
    const { data } = await axios.get(
      `https://api.spotify.com/v1/artists/${artistId}/related-artists`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    const recommendations = data.artists.slice(0, 6)
    setRecommendedArtists(recommendations)
    props.onChange(recommendations);
    props.onDisplayResults();
   

  }

  return (
    <div>
      <h1 className='display-5 fw-bold p-5' style={{ color: 'White' }}>Find similar artists. See their gigs.</h1>
      <div>
        {!token ? (
          <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
            Login to Spotify </a>) : (<button onClick={logout}>Logout</button>)}
        <div className='col-md-6'>
          <Form onSubmit={submitHandler}>
            <input type='text' onChange={e => setSearchKey(e.target.value)} />
            <Button className={classes.button} type='submit'>SEARCH</Button>
          </Form>
        
        </div>
      </div>
    </div>
  )
}

export default SearchForm