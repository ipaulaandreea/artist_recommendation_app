import react, { useState, useContext } from 'react'
import classes from './SearchResults.module.css'
import Modal from '../UI/Modal/Modal'
import RecommendationCard from '../RecommendationCard/RecommendationCard'
import RecommendationItem from '../RecommendationItem/RecommendationItem'
import photo1 from '../../photo1.jpg'
import photo2 from '../../photo2.jpg'
import photo3 from '../../photo3.jpg'
import photo4 from '../../photo4.jpg'
import photo5 from '../../photo5.jpg'
import photo6 from '../../photo6.jpg'

export const DUMMY_DATA = [
  {
    id: 1,
    name: 'Queens of the Stone Age',
    photo: photo1,
    next_gig: 'Bucharest, 12th April 2024'
  },
  {
    id: 2,
    name: 'Arctic Monkeys',
    photo: photo2,
    next_gig: 'Budapest, 1st August 2024'
  },
  {
    id: 3,
    name: 'The Killers',
    photo: photo3,
    next_gig: 'Cluj-Napoca, 15th July 2024'
  },
  {
    id: 4,
    name: 'Florence + The Machine',
    photo: photo4,
    next_gig: 'Sofia, 11th May 2024'
  },

  {
    id: 5,
    name: 'Nothing But Thieves',
    photo: photo5,
    next_gig: 'Los Angeles, 18th May 2024'
  },
  {
    id: 6,
    name: 'MGMT',
    photo: photo6,
    next_gig: 'Vancouver, 18th February 2024'
  }
]
const SearchResults =({recommendations}) => {
 






  return (
<div>
      <div className={classes.container}>
        <div className={classes.parent}>
          {recommendations.map(artist => (
            <div>
              <RecommendationItem
                id={artist.id}
                key={artist.id}
                photo={artist['images'][0]['url']}
                name={artist.name}
                next_gig='not yet'
              />
            </div>
          ))}
        </div>
      </div>
      </div>

  )
}

export default SearchResults;