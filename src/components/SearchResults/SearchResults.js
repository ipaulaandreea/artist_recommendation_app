import react from 'react'
import classes from './SearchResults.module.css'
import RecommendationItem from '../RecommendationItem/RecommendationItem'
import Spinner from 'react-bootstrap/Spinner'
import {Row, Col, Container, CardGroup,  Card} from 'react-bootstrap'

//TODO: IF results=0, da un mesaj cu no results to show;
const SearchResults = ({ recommendations }) => {
  return (
    <div>
      <Container className={classes.container9}>
      <Row className={classes.row}>
        {Object.keys(recommendations).length === 0 ? (
          <Spinner
            className={classes.spinner}
            animation='border'
            role='status'
            id='spinner'
          ></Spinner>
        ) : ( recommendations.map((artist, index) => (
          <Col className={classes.col} key={artist.id} sm={6}>
            <CardGroup>
            <Card className={classes.card}>
              <RecommendationItem
                id={artist.id}
                photo={
                  artist.images && artist.images.length > 0
                    ? artist.images[0].url
                    : ''
                }
                name={artist.name}
                next_gig={`${artist.gigs.name} ${artist.gigs.city} ${artist.gigs.state} ${artist.gigs.date}`}
                spotify={artist.external_urls.spotify}
                gig_link={
                  artist.gigs.tickets !== '' && (
                    <a href={artist.gigs.tickets}>Buy gig tickets</a>
                  )
                }
              />
            </Card>
            </CardGroup>
          </Col>
        ))
      )}
    </Row>
  </Container>
</div> 
  )
}

export default SearchResults
