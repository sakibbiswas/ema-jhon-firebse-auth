import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';

const Authprovider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)
    const createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return signOut(auth)
    }
    // observer user auth state
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentuser => {
            setuser(currentuser)
            setloading(false)
        })
        // stop observing
        return () => unsubcribe()
    }, [])
    const AuthInfo = {
        user,
        loading,
        createuser,
        signIn,
        logout,

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;