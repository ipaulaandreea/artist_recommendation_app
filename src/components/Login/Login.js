import React, { useEffect, useState } from 'react'
import {Container, Button }  from 'react-bootstrap';
import classes from './Login.module.css'


const Login = (props) => {
  const CLIENT_ID = '6674cfd3c7f24b579bdf58acd6f13d95'
  const REDIRECT_URI = 'http://localhost:3000/'
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
  const RESPONSE_TYPE = 'token'

  const [token, setToken] = useState('')

  useEffect(() => {
    const hash = window.location.hash
    let token;
    // let token = window.localStorage.getItem('token') 
    if (!token && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find(elem => elem.startsWith('access_token'))
        .split('=')[1]
      window.location.hash = ''
      window.localStorage.setItem('token', token)
    }
    setToken(prevToken=>token)
  }, [])

  

  const logout = () => {
    setToken('')
    window.localStorage.removeItem('token')
  }

  return (
<Container className={classes.container6}>

        <p>Step 1 </p>
        <Button className={classes.btn}>
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        Login to Spotify{' '}
      </a>
      </Button>
    </Container>
  )
}

export default Login
