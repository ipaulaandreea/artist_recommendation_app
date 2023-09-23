import react from 'react'
import classes from './RecommendationItem.module.css'
import RecommendationCard from '../RecommendationCard/RecommendationCard'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const RecommendationItem = props => {
  return (

      <Container className={classes.artist}>
        
        <Image className={classes.img} src={props.photo} />
        
<Container className={classes.text}>
        <h4>{props.name}</h4>
        <h6>{props.next_gig}</h6>
        <Container className={classes.actions}>
        <a href={props.spotify}>Go to Spotify</a>
        {props.gig_link}
        </Container>
      </Container>
      </Container>

  )
}

export default RecommendationItem
