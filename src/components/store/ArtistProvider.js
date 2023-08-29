import  ArtistContext from './artist-context'
import { useReducer } from 'react';

const defaultArtist={
  name:'m',
  id:'6'
}

const artistReducer=(state, action ) => {
    let updatedName='';
    let updatedId='';
    if (action.type==='SEARCH_ARTIST') {
      let updatedName=state.artist.name;
      let updatedId=state.artist.id;
    }
    return {
        name: updatedName,
        id: updatedId
      }
}
const ArtistProvider=(props)=>{
    const [artistState, dispatchArtist] = useReducer(artistReducer, defaultArtist)

    const searchArtistHandler = artist => {
        dispatchArtist({ type: 'SEARCH_ARTIST', artist: artist})
      }

      const artistContext = {
        name: artistState.name,
        id: artistState.id,
        searchArtist: searchArtistHandler
      }



return (
    <ArtistContext.Provider value={artistContext}>
      {props.children}
    </ArtistContext.Provider>
  )
}
export default ArtistProvider;