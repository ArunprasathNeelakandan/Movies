
import { Switch,Route } from 'react-router-dom'
import Login from './Components/Login/index.jsx'
import Home from './Components/Home/index.jsx'
import ProtectedRoute from './Components/protectedRoute/index.jsx'
import './App.css'

function App() {
  

  return (
    <>
    <Switch>
      <Route exact path='/login' component={Login}/>
      <ProtectedRoute exact path='/' component={Home} />
    </Switch>   
    </>
  )
}

export default App
