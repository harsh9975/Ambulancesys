import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'


const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [Loading, setLoading] = useState(true)

    //signin process
    function login(email, password){
        return auth.signInWithEmailAndPassword(email,password)
    }

    //signup process
    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email,password)
    }

    //logout
    function logout(){
        auth.signOut()
    }

    //reset password
    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user=>{
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value={
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        
    }

    return (
        <AuthContext.Provider value={value}>
            { !Loading && children}
        </AuthContext.Provider>
    )
}
