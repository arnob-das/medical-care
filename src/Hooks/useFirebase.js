import { useState, useEffect } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // handle google sign in
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // set user info after successful login
    // this is default behaviour of firebase google login
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])

    // handle google sign out user
    const googleSignOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message);
        });
    }

    return {
        user,
        error,
        signInUsingGoogle,
        googleSignOut
    }
}
export default useFirebase;