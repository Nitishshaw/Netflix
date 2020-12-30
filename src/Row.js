import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import axios from './axios';
import './Row.css';
import movieTrailer from "movie-trailer";

const base_url ="https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl,isLargeRow}) {
    const [movies, setMovies] =useState([]);
    const[trailerUrl,setTrailerUrl] =useState("");

    useEffect(()=>{
       async function fetchData(){
         const request = await axios.get(fetchUrl);
         setMovies(request.data.results);
        
       }
       fetchData(); 
    },[fetchUrl]);

    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        // movie?.title || movie?.name || movie?.original_name || " "
        autoplay: 1,
      },
    }; 
    const hadleClick = (movie) =>{
      if(trailerUrl){
        setTrailerUrl('');
      }else{
        movieTrailer( movie?.title || movie?.name || movie?.original_name || " ")
        .then(url => {
         const urlparams =new URLSearchParams(new URL(url).search);
        setTrailerUrl( urlparams.get("v"));

        }).catch(error=> console.log(error));
      }
    }

    return (
        <div className="row">
          <h2> {title} </h2>
          <div className="row__posters">
              {movies.map(movie =>(
                  <img className={`row__poster ${isLargeRow && "row__LargePoster"}`} 
                   key={movie.id} 
                   src ={`${base_url}${isLargeRow ?movie.poster_path :movie.backdrop_path}`}
                   alt={movie.name}
                   onClick={() =>hadleClick(movie)}/>
              ))}
          </div>
          { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} 

        </div>
    );
}

export default Row
