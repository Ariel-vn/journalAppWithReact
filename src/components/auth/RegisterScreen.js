import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithNameEmailPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import { useForms } from '../../hooks/useForms';

export const RegisterScreen = () => {
    const dispatch=useDispatch()
    const {msgError}=useSelector(state=>state.ui);
    console.log(msgError);
    const [formValues, handleInputChange] = useForms({
        name:'Ariel',
        email: 'nando@gmail.com',
        password: '123456',
        password2:'123456'
    });
    const { name, email, password, password2 } = formValues;

    const handleRegister=(e)=>{
        e.preventDefault();
        if(isFormValid()){
            dispatch(startRegisterWithNameEmailPassword(name,email,password));
        }
    }
    const isFormValid=()=>{
        if(name.trim().length===0){
            dispatch(setError("Name is required"));
            console.log();
            return false;
        }else if(!validator.isEmail(email)){
            dispatch(setError("Email isn't valid"));
            return false;
        }else if(password!==password2 || password.length<5){
            dispatch(setError("Ingrese con una contraseña con mas de 6 caracteres"));
            return false;
        }
        dispatch(removeError());
        return true;
    }
    return (
        <>
            <h3 className="auth__title mb-5">Register</h3>
            <form onSubmit={handleRegister}>
                {
                    msgError&&
                        (<div className="auth__alert-error">
                            {msgError}
                        </div>)
                }
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={name}
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={email}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={password}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={password2}

                />
                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                >
                    Register
                </button>
                <Link className="link mt-5" to="/auth/login">
                    Already registered?
                </Link>
                
            </form>

        </>
    )
}
