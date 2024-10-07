import { useState } from 'react'
import { Switch,Route } from 'react-router-dom'
import Login from './Components/Login/index.jsx'
import Home from './Components/Home/index.jsx'
import './App.css'

function App() {
  

  return (
    <>
    <Switch>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/' component={Home} />
    </Switch>   
    </>
  )
}

export default App
