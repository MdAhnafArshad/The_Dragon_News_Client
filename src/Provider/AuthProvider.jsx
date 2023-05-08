import React, { useState, useEffect , createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);



const AuthProvider = ({ children }) => {

    // user state .... 
    const [user, setUser]=  useState(null);
    const [loading, setLoading] = useState(true);

    // create an user account
    const signUp = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in with user
    const signIn = (email, password) => {
        setLoading(false);
       return signInWithEmailAndPassword(auth, email, password);
    }



    // sign out user
    const logOut = () => {
       return signOut(auth);
    }



    // on auth state change user
    useEffect(() => {

       const unSubscribe =  onAuthStateChanged(auth, loggedUser => {
            console.log('auth state changed', loggedUser);
            setUser(loggedUser);
            setLoading(false);
        })

        return unSubscribe();


    }, [])




    const authInfo = {
        user,
        signUp,
        signIn,
        logOut,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;