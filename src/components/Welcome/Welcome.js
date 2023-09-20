import React from 'react'
import Box from '../Box/Box.js';
import SearchConcertsForSimilarArtists from '../SearchConcertsForSimilarArtists/SearchConcertsForSimilarArtists.js'
import Message from '../Message/Message.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Welcome.module.css'

const Welcome = () => {
  return (
    <Container className={classes.container2}> 
    <Row className={classes.row}>
    <Col md={6} className={classes.col}>
    <Message/>
      
</Col>
<Col md={6} className={classes.col}>
<Box>
<SearchConcertsForSimilarArtists/>
</Box>
</Col>
</Row>
</Container>


  )
}

export default Welcome
