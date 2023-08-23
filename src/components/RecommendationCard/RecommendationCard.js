import react from 'react'
import { Button } from 'react-bootstrap';
import classes from './RecommendationCard.module.css'
import dummyImg from '../../bckg2.jpg'

const RecommendationCard = (props) => {
  return (
    <div className={classes.card}>
    {props.children}
      </div>
  )
}

export default RecommendationCard
