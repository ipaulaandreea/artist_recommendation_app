import  RecommendationsContext from './recommend-context'
import { useReducer } from 'react';

const RecommendationsProvider = props =>{

const addRecommendationsHandler = (arr) => {};


  const recommendationsContext={
    artists: [],
    addRecommendations: addRecommendationsHandler
};

return (
  <RecommendationsContext.Provider value={recommendationsContext}>
    {props.children}
  </RecommendationsContext.Provider>
)

}


export default RecommendationsProvider;