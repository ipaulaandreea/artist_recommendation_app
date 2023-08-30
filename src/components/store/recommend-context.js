import React from 'react'

const RecommendationsContext = React.createContext({
    artists: [],
    addRecommendations: (arr) => {}

 
})

export default RecommendationsContext;
