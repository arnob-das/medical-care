import { useState, useEffect } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

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

    //handle registration with email and password
    const handleRegisterWithEmailPassword = (auth, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // handle sign in with email and password
    const handleSignInWithEmailPass = (auth, email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // handle reset password with email password reset link
    const handleResetPasswordWithEmailLink = (email="contact.arnobdas@gmail.com") => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    handleResetPasswordWithEmailLink()

    return {
        auth,
        user,
        error,
        setUser,
        setError,
        signInUsingGoogle,
        googleSignOut,
        handleRegisterWithEmailPassword,
        handleSignInWithEmailPass
    }
}
export default useFirebase;