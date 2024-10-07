import { useState } from 'react'
import MovieLogo from '../MovieLogo'
import './index.css'

const Login =(props) => {
   const [username,setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [errorMsg, setIsErrorMsg] = useState('')

   const success = () => {
      const {history} = props
      console.log(history)
      history.replace('/')
   }

   const failure = (data) =>{
      
      setUsername('')
      setPassword('')
      setIsErrorMsg(data)
   }


   const submitData =async(event) => {
      event.preventDefault()

      const url = 'https://apis.ccbp.in/login'
      const options = {
         method: 'POST',
         body : JSON.stringify({username,password})
      }

      const response = await fetch(url,options)
      const data = await response.json()
      console.log(response.ok)

      if (response.ok === true) {
          success()
      }

      else {
         console.log(data)
         failure(data.error_msg)
      }
   }

   const usernameControle = (event) => {
      setUsername(event.target.value)
   }

   const passwordControle = (event) => {
      setPassword(event.target.value)
   }

   return(
      <div className="login-bg">
         <MovieLogo/>
         <form onSubmit={submitData} className='form-container'>
            <h1 className='login-head'>Login</h1>
            <div className='input-container'>
               <label htmlFor='username'>USERNAME</label>
               <br/>
               <input type='text' placeholder='Username' id='username' onChange={usernameControle} value={username}/>
               </div>
               <div className='input-container'>
               <label htmlFor='password'>PASSWORD</label>
               <br/>
               <input type='password' placeholder='Password' id='Password' onChange={passwordControle}value={password}  />
            </div>

            <button className='login-btn' type='submit'>Login</button>
            <p className="error-msg">{errorMsg}</p>
         </form>
      </div>
   )
}

export default Login