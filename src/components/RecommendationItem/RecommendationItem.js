import react from 'react'
import classes from './RecommendationItem.module.css'
import RecommendationCard from '../RecommendationCard/RecommendationCard'

const RecommendationItem = props => {
  return (
    <RecommendationCard>
      <div className={classes['artist']}>
        <img
          className={classes['artist']['img']}
          src={props.photo}
          alt='  '
        ></img>

        <span className={classes['name']}>{props.name}</span>
        <span className={classes['nextgig']}>Next gig: {props.next_gig}</span>
        <div className={classes.actions}>
        </div>
      </div>
    </RecommendationCard>
  )
}

export default RecommendationItem
