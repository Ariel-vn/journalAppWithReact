import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
} from "react-router-dom";
import { firebase} from "../firebase/firebase-config";


import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRouter';
import { PrivateRoute } from './PrivateRouter';

export const AppRouter = () => {
    const dispatch=useDispatch();
    const [cheking, setCheking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user)=>{
            if (user?.uid) {
                dispatch(login(user.uid,user.displayName));
                setIsLoggedIn(true);
            }else{
                setIsLoggedIn(false);
            }
            setCheking(false);
        });

        
    }, [dispatch,setCheking]);

    if(cheking){
        return (
        <h1>Espere...</h1>)
    }

    return (
        <Router>
            <Switch>
                <PublicRoute
                    path="/auth"
                    component={AuthRouter}
                    isLoggedIn={isLoggedIn}
                />
                <PrivateRoute
                    exact
                    path="/"
                    component={JournalScreen}
                    isLoggedIn={isLoggedIn}
                />
                <Redirect to='auth/login'/>

            </Switch>
            
        </Router>
    )
}
