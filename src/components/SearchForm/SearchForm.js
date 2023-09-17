import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Card, Form, Button } from 'react-bootstrap'
import classes from './SearchForm.module.css'
import axios from 'axios'
import SearchResults from '../SearchResults/SearchResults.js'
import SearchBar from '../SearchBar/SearchBar.js'
import Login from '../Login/Login.js'

const slugify = str => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const SearchForm = props => {
  // const CLIENT_ID = '6674cfd3c7f24b579bdf58acd6f13d95'
  // const REDIRECT_URI = 'http://localhost:3000/'
  // const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
  // const RESPONSE_TYPE = 'token'
  const SEATGEEKCLIENT_ID = 'MzU4NDU3NTl8MTY5MzY1OTI0NS4wMzYyMTgy'

  // const [token, setToken] = useState('')
  const [searchKey, setSearchKey] = useState('')
  const [artist, setArtist] = useState('')
  const [recommendedArtists, setRecommendedArtists] = useState([])

  // useEffect(() => {
  //   const hash = window.location.hash
  //   let token = window.localStorage.getItem('token')
  //   if (!token && hash) {
  //     token = hash
  //       .substring(1)
  //       .split('&')
  //       .find(elem => elem.startsWith('access_token'))
  //       .split('=')[1]
  //     window.location.hash = ''
  //     window.localStorage.setItem('token', token)
  //   }
  //   setToken(token)
  // }, [recommendedArtists])

  // const logout = () => {
  //   setToken('')
  //   window.localStorage.removeItem('token')
  // }

  const submitHandler = async e => {
    props.onDisplayModal()

      // e.preventDefault()
 
      console.log(searchKey)
      // if (e="") return; 
    if (!searchKey) return;

    
    let token = window.localStorage.getItem('token')
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
    setSearchKey('')
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
    let slug = []
    const names = recommendations.map(item => item.name)
    console.log('names: ', names)
    const slugs = names.map(item => slugify(item))
    console.log('slugs: ', slugs)
    let result
    let promises = []
    for (let i = 0; i < slugs.length; i++) {
      promises.push(findGigs(slugs[i]))
    }

    result = await Promise.all(promises)
    for (let i = 0; i < recommendations.length; i++) {
      recommendations[i]['gigs'] = result[i]
    }
    console.log(recommendations)

    setRecommendedArtists(recommendations)
    props.onChange(recommendations)
  }

  const findGigs = async slug => {
    const { data } = await axios.get(
      `https://api.seatgeek.com/2/events?performers.slug=${slug}`,
      {
        headers: {
          Authorization:
            'Basic TXpVNE5EVTNOVGw4TVRZNU16WTFPVEkwTlM0d016WXlNVGd5OmJkMTgxMDM1YmQ1NjQzNGE3NWVhYjNjYjFmZDgzZjhlNGI1ZThkMDU0YjRhYTM1MmUwMWEyOGNmMzY5YjcxOTE='
        }
      }
    )
    let gig = ''
    let gigObject = {}
    if (!data.events[0]) {
      gigObject = {
        name: 'No upcoming event',
        state: '',
        city: '',
        date: '',
        tickets: ''
      }
      return gigObject
    } else {
      gig = data.events[0]
      gigObject = {
        name: gig['venue']['name'],
        state: gig['venue']['state'],
        city: gig['venue']['city'],
        date: gig['datetime_utc'],
        tickets: gig['venue']['url']
      }
      return gigObject
    }

  }

  const clearInput = () => {
    setArtist('')
    setRecommendedArtists([])
  }

  return (
    <div className='container'>
        {/* {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify{' '}
          </a>
        ) : (
          <button onClick={logout}>Logout</button>
        )} */}

             <SearchBar onSetSearchKey={e => setSearchKey(e)} onSearchInput={submitHandler}/>
      </div>
  
  )
}

export default SearchForm
