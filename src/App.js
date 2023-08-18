import React from 'react'
import { Container, Typography } from '@mui/material'

function App () {
  return (
    <Container>
      <Typography
        variant='h1'
        sx={{ my: 4, textAlign: 'center', color: 'primary.main' }}
      >
        Hello, World
      </Typography>
      <Typography
        variant='h2'
      >
        Hello, World
      </Typography>
    </Container>
  )
};

export default App
