import  RecommendContext from './recommend-context'
import { useReducer } from 'react';

const defaultRecommendation={
    artists: []
}

const recommendationReducer=(state, action ) => {
    let updatedArtists=[];
 
    if (action.type==='DISPLAY_RECOMMENDATION') {
      let updatedArtists=state.artists;
    }
    return {
        artists: updatedArtists
      }
}
const RecommendationProvider=(props)=>{
    const [recommendationState, dispatchRecommendation] = useReducer(recommendationReducer, defaultRecommendation)

    const displayRecommendationHandler = artists => {
        dispatchRecommendation({ type: 'DISPLAY_RECOMMENDATION', artists: artists})
      }

      const RecommendationContext = {
        artists: recommendationState.artists,
  
       displayRecommendation: displayRecommendationHandler
      }



return (
    <RecommendationContext.Provider value={recommendationContext}>
      {props.children}
    </RecommendationContextt.Provider>
  )
}
export default RecommendationProvider;