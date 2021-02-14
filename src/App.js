import './App.css';
import React, { useState , useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const ResidentInfo = ({url})  => {
  const [character, setCharacter] = useState("");
  const [nombre, setNombre]= useState("");
  const [status, setEstado] = useState("");
  const [origin, setOrigin] = useState("");
  const [episode, setEpisode] = useState("");
   useEffect (() => {
    const promise = axios(url);

     promise.then((res) => {
      //  console.log(res.data.image);
       setCharacter(res.data.image);
     });
   });
   useEffect (() => {
    const promise = axios(url);

     promise.then((res) => {
      //  console.log(res.data.image);
       setNombre(res.data.name);
     });
   });
   useEffect (() => {
    const promise = axios(url);

     promise.then((res) => {
      //  console.log(res.data.image);
       setEstado(res.data.status);
     });
   });
   useEffect (() => {
    const promise = axios(url);

     promise.then((res) => {
      //  console.log(res.data.image);
       setOrigin(res.data.origin.name);
     });
   });
   useEffect (() => {
    const promise = axios(url);

     promise.then((res) => {
      //  console.log(res.data.image);
       setEpisode(res.data.episode.length);
     });
   });

  return (
    <div class="card info m-4">
      <div>
      <img src={character} class="card-img-top" alt={url}></img>
      <div class="card-body">
        <h5 class="card-title">{nombre}</h5>
        <p class="card-text">{status} - {origin} </p>
        <h5>{episode}</h5>
      </div>
      </div>
    </div>
  )
};

const LocationInfo = ({name, type, dimension, residents}) => {

  return(
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{type} -- {dimension}</p>
        <h5>Residents: {residents}</h5>
      </div>
    </div>
  )
}
const SearchBox = ({handleSearch}) => {
  const [searchTerm, setSearchTerm] = useState("")
return(
  <div>
    <input className=" mb-3 form-label" onChange={(e) => setSearchTerm(e.target.value)}/>
    <button class="btn btn-primary" onClick={() => handleSearch(searchTerm)}>Search</button>
  </div>
)
}

function App() {
  const [resident, setResident] = useState([]);
  const [location, setLocation] = useState([]);
  const [query, setQuery] = useState("");
  let index = Math.floor(Math.random()* 20);
  let indexTwo = Math.floor(Math.random()* 20);
  let indexTree = Math.floor(Math.random()* 20);
  let indexFour = Math.floor(Math.random()* 20);
  let indexFive = Math.floor(Math.random()* 20);
  let indexSix = Math.floor(Math.random()* 20);
  let indexSeven = Math.floor(Math.random()* 20);
  let indexEight = Math.floor(Math.random()* 20);
  let indexNine = Math.floor(Math.random()* 20);
  let indexTen = Math.floor(Math.random()* 20);
  
  useEffect (() => {
      if(query){
        const promise =  axios(`https://rickandmortyapi.com/api/location/?name=${query}`);
      promise.then((res) => {
      setResident(res.data.results.slice(0 , 15));
      setLocation(res.data.results);
      console.log(res.data.results);
    });
      }
  }, [query]);

  useEffect (() => {

  }, [resident]);

  useEffect (() => {
    console.log(location)
  }, [location]);

  const handleSearcgLocation = (value) => {
    setQuery(value)
  }
  return (
    <div className="App">
      <h1>RICK and MORTY</h1>
      <SearchBox handleSearch={handleSearcgLocation}/>
      {location.length > 0 &&(
        <LocationInfo name={location[0].name} type={location[0].type} dimension={location[0].dimension} residents={location[0].residents.length}/>
      )}
      <div className="container">
      {resident.length > 0  && (
      <>
      <ResidentInfo name={resident[0].residents[index]} url={resident[0].residents[index]}/>
      <ResidentInfo name={resident[0].residents[indexTwo]} url={resident[0].residents[indexTwo]}/>
      <ResidentInfo name={resident[0].residents[indexTree]} url={resident[0].residents[indexTree]}/>
      <ResidentInfo name={resident[0].residents[indexFour]} url={resident[0].residents[indexFour]}/>
      <ResidentInfo name={resident[0].residents[indexFive]} url={resident[0].residents[indexFive]}/>
      <ResidentInfo name={resident[0].residents[indexSix]} url={resident[0].residents[indexSix]}/>
      <ResidentInfo name={resident[0].residents[indexSeven]} url={resident[0].residents[indexSeven]}/>
      <ResidentInfo name={resident[0].residents[indexEight]} url={resident[0].residents[indexEight]}/>
      <ResidentInfo name={resident[0].residents[indexNine]} url={resident[0].residents[indexNine]}/>
      <ResidentInfo name={resident[0].residents[indexTen]} url={resident[0].residents[indexTen]}/>
      </>
      )}
      </div>
      
    </div>
  );
}


export default App;
