import React from 'react';
import './Signin.css';

const Signin = () => {
	return(
		<div className='login-center'>
			<form className='form-signin'>
				<img src='' alt='' width='72' height='72'/>
				<h1 className='h3 mb-3 font-weight-normal' >Please Signin</h1>
				<label htmlFor='inputEmail' className='sr-only'>Email address</label> 
				<input type='email' id='inputEmail' className='form-control' placeholder='Email address' required autoFocus />
				<label htmlFor='inputPassword' className='sr-only'>Password</label>
				<input type='password' id='inputPassword' className='form-control' placeholder='Password' />
				 <div className="checkbox mb-3">
    			<label>
     			 <input type="checkbox" value="remember-me" /> Remember me
    			</label>
    			</div>
    			<button className='btn btn-lg btn-primary btn-block' type='submit'>Sign in</button>
			</form>
		</div>
	)
}


export default Signin;