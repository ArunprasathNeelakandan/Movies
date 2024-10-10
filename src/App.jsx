
import { Switch,Route } from 'react-router-dom'
import Login from './Components/Login/index.jsx'
import Home from './Components/Home/index.jsx'
import ProtectedRoute from './Components/protectedRoute/index.jsx'
import PopularMovies from './Components/PopularMovies/index.jsx'
import SearchPage from './Components/SearchPage/index.jsx'
import DetaileMovieItem from './Components/DetaileMovieItem/index.jsx'
import Account from './Components/Account'
import NotFound from './Components/NotFound'
import './App.css'

function App() {
  

  return (
    <>
    <Switch>
      <Route exact path='/login' component={Login}/>
      <ProtectedRoute exact path='/' component={Home} />
      <ProtectedRoute exact path='/popular-movies' component={PopularMovies}/>
      <ProtectedRoute exact path='/search' component = {SearchPage} />
      <ProtectedRoute exact path='/movies/:id' component={DetaileMovieItem}/>
      <ProtectedRoute exact path='/account' component ={Account} />
      <Route to='/not-found'component={NotFound}/>
    </Switch>   
    </>
  )
}

export default App
