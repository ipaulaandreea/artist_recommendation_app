import React from 'react'

const ArtistContext = React.createContext({
  name:'',
  id:'',
  addArtist: artist => {}
 
})

export default ArtistContext
