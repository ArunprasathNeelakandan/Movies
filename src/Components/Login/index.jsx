import MovieLogo from '../MovieLogo'
import './index.css'

const Login =() => {
   const submitData =(event) => {
      event.preventDefault()
   }

   return(
      <div className="login-bg">
         <MovieLogo/>
         <form onSubmit={submitData} className='form-container'>
            <h1 className='login-head'>Login</h1>
            <div className='input-container'>
               <label>USERNAME</label>
               <br/>
               <input type='text' placeholder='Username' id='username' />
               </div>
               <div className='input-container'>
               <label>PASSWORD</label>
               <br/>
               <input type='password' placeholder='Password' id='Password' />
            </div>

            <button className='login-btn'>Login</button>
         </form>
      </div>
   )
}

export default Login