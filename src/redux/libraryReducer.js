const initialState = {
  songs:[],
};

const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SONG":
      console.log(`imprimimos lo que vamos a agregar:`);
      console.log( action.payload);

      if (state.songs.find(song => song.idTrack === action.payload.idTrack)) return state;
      console.log(` imprimimos el state`);
      
      const newStore ={...state, songs: [...state.songs, action.payload],}
      console.log(newStore);

      return newStore;
      //return [...state, action.payload];
      
    case "REMOVE_SONG":
      return {...state,
        songs: state.songs.filter(song => song.idTrack !== action.payload)
      }
    default:
      return state;
  }
};

export default libraryReducer;