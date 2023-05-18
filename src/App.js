
import{BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'
import './App.css';
import './index.css'
import Movie from './Movie/Movie';
import MovieGrid from './MovieGrid/MovieGrid';
import Nav from './Nav/Nav';
import About from './about/About';
import SingleMovie from './singlemovie/SinglMovie';

function App() {
 
  return (
    <>


    {/* <Movie/> */}
    {/* <MovieGrid/> */}
<Router>
<Nav/>

  <Routes>
  <Route path='/About' element={<About/>}/>
  <Route path='/SingleMovie/:Title' element={<SingleMovie/>}/>
  <Route path='/Home' element={<MovieGrid/>}/>
  </Routes>
 
    </Router>
    </>
  );
}

export default App;
