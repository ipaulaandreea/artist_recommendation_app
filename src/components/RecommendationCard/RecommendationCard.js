import react from 'react'
import { Button } from 'react-bootstrap';
import classes from './RecommendationCard.module.css'
import Card from 'react-bootstrap/Card';

const RecommendationCard = (props) => {
  return (
    <Card className={classes.card}>
    <Card.Body className={classes.cardbody}>{props.children}</Card.Body>
  </Card>
  )
}

export default RecommendationCard;