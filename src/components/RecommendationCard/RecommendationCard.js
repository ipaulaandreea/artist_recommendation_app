import react from 'react'

import classes from './RecommendationCard.module.css'
import dummyImg from '../../bckg2.jpg'

const RecommendationCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes["card-body"]}>
        <img className={classes['card']['img']} src={dummyImg} alt="artist-img"></img>
        <div className={classes['card']['textarea']}>Text</div>


      </div>
    </div>
  )
}

export default RecommendationCard
