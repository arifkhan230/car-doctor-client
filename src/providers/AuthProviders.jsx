
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProviders =({children})=> {
    const [user,setUser] = useState()
    const [loading,setLoading] = useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }


    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            console.log(currentUser)
        })
        return()=>{
            unSubscribe()
        }
    },[])
        
          
        

    const authInfo ={
        user,
        loading,
        createUser,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProviders.propTypes = {
    children: PropTypes.node,
    
};

export default AuthProviders;