import React, { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import classes from './Login.module.css'

const Login = props => {
  const [token, setToken] = useState('')

  useEffect(() => {
    const hash = window.location.hash
    let token
    if (!token && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find(elem => elem.startsWith('access_token'))
        .split('=')[1]
      window.location.hash = ''
      window.localStorage.setItem('token', token)
    }

    setToken(prevToken => token)
    if (token !== undefined) {
      props.onLogin()
    }
  }, [])

  const logout = () => {
    setToken('')
    props.onLogout()
    window.localStorage.removeItem('token')
  }

  return (
    <Container className={classes.container6}>
      <p>Step 1 </p>

      {!props.isLoggedIn ? (
        <Button
          className={classes.btn}
          href={`${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}`}
        >
          Login to Spotify{' '}
        </Button>
      ) : (
        <Button className={classes.btn} onClick={logout}>
          Logout{' '}
        </Button>
      )}
    </Container>
  )
}

export default Login
