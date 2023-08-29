import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col, Image, Card, Form, Button } from 'react-bootstrap'
import backgroundImage from '../../bckg3.jpg'
import { classes } from './Greeting.module.css'
import axios from 'axios'
import ArtistContext from '../store/artist-context'

const Greeting = props => {
  let artistCtx = useContext(ArtistContext)
  let artistName = artistCtx.name
  let artistId = artistCtx.id

  const CLIENT_ID = '6674cfd3c7f24b579bdf58acd6f13d95'
  const REDIRECT_URI = 'http://localhost:3000/'
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
  const RESPONSE_TYPE = 'token'

  const [token, setToken] = useState('')
  const [searchKey, setSearchKey] = useState('')
  const [artist, setArtist] = useState('')
  const [recommendedArtists, setRecommendedArtists]=useState('')

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
  }, [])

  const logout = () => {
    setToken('')
    window.localStorage.removeItem('token')
  }

  const searchArtists = async e => {
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
    // console.log(data.artists.items[0].name, data.artists.items[0].id);
    setArtist(data.artists.items[0].id)
    artistName = data.artists.items[0].name
    artistId = data.artists.items[0].id
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
    setRecommendedArtists(data)
    console.log(data)
  }

  return (
    <section
      className='bg-light text-center h-100 d-flex align-items-center justify-content-center'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: '800px',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className='container-fluid'>
        <div className='row text-center'>
          <div className='col-md-6 '>
            <h1 className='display-5 fw-bold p-5' style={{ color: 'White' }}>
              Find similar artists. See their gigs.
            </h1>
          </div>

          {!token ? (
            <a
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            >
              Login to Spotify
            </a>
          ) : (
            <button onClick={logout}>Logout</button>
          )}

          <div className='col-md-6'>
            <Form onSubmit={searchArtists}>
              <input type='text' onChange={e => setSearchKey(e.target.value)} />
              {/* <Form.Group className="p-5">
        <Form.Control className="rounded-pill" type="artist-name" placeholder="Artist name" />
      </Form.Group> */}
              <Button
                onClick={props.onDisplayResults}
                type='submit'
                style={{
                  fontSize: '1rem',
                  fontWeight: '700',
                  fontSize: '1rem',
                  border: '0',
                  borderRadius: '0',
                  background: '#ff3366',
                  padding: '16px 40px',
                  color: 'White'
                }}
              >
                SEARCH
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Greeting
