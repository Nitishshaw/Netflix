import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';


function App() {

  return (
    <div className="app">
      {/* <h1>Nitish  </h1> */}
      <Nav />
      <Banner/>
      <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
      {/* <Row title="Trending Now"/> */}
    </div>
  );
}

export default App;
