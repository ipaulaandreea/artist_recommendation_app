import react from 'react'
import classes from './RecommendationItem.module.css'
import RecommendationCard from '../RecommendationCard/RecommendationCard'
import { Container, Image, Button }  from 'react-bootstrap'

const RecommendationItem = props => {
  return (
    <Container fluid='lg' className={classes.artist}>
      <Image className={classes.img} src={props.photo} />
      <Container className={classes.text}>
        <h4>{props.name}</h4>
        <h6>{props.next_gig}</h6>
        <Container className={classes.actions}>
          <Button className={classes.spotifybtn} href={props.spotify}>Go to Spotify</Button>
          {props.gig_link}
        </Container>
      </Container>
    </Container>
  )
}

export default RecommendationItem
