import React, { useEffect, useState } from 'react'
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
    <div className={classes.container}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={classes.arrowDown} viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg>
        <p>Step 1 </p>
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        Login to Spotify{' '}
      </a>
    </div>
  )
}

export default Login
