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
          alt='artist-img'
        ></img>
        <h3 className={classes['artist']['name']}>{props.name}</h3>
        <p className={classes['artist']['nextgig']}>{props.next_gig}</p>
        <div className={classes.actions}>
          <button type='submit'>Listen on Spotify</button>
          <button type='submit'>Buy tickets</button>
        </div>
    
    </div>
    </RecommendationCard>
  )
}

export default RecommendationItem
