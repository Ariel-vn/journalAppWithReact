import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForms } from '../../hooks/useForms';

export const LoginScreen = () => {
    const dispatch = useDispatch()

    const [formValues,handleInputChange]=useForms({
        email:'nando@gmail.com',
        password:'123456'
    });
    const {email,password}=formValues;

    const handleLogin=(e)=>{
        e.preventDefault();
        dispatch(startLoginEmailPassword(email,password))
    }
    const handleGoogleLogin=()=>{
        dispatch(startGoogleLogin());
    }
    const {loading}=useSelector(state=>state.ui)

    return (
        <>
            <h3 className="auth__title mb-5">Login</h3>
            <form onSubmit={handleLogin} >
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    disabled={loading}
                >
                    Login
                </button>
                
                <div className="auth__social-network">
                    <p>Login with social networks</p>
                    <div
                        className="google-btn mb-5"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                    <Link className="link" to="/auth/register">
                        Create a new account
                    </Link>
                </div>
            </form>
            
        </>
    )
}
