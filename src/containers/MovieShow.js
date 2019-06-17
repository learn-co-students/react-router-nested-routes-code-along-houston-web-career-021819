import React from 'react';

const MovieShow = ({match, movies}) =>{
  return(
      <div>
          {console.log("You reached me", match)}
          <h3>{movies[match.params.movieId].title}</h3>
      </div>
  )
}

export default MovieShow;