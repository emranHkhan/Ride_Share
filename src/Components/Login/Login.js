import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.Config';
import './Login.css';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIspasswordValid] = useState(true);
    const [mathchedPassword, setMatchedPassword] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isNewUser, setIsNewUser] = useState(false);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {

                const { displayName, email } = result.user;
                const signedInuser = { name: displayName, email: email };
                setLoggedInUser(signedInuser);
                history.replace(from);

            }).catch((error) => {
                console.log(error.Message);
            });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
       
        if (isNewUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((result) => {
                    console.log(result);
                    const updateUserInfo = { ...user };
                    updateUserInfo.error = "";
                    updateUserInfo.success = true;
                    setUser(updateUserInfo);

                 
                    const { displayName, email } = result.user;
                    const signedInuser = { name: displayName, email: email };
                    setLoggedInUser(signedInuser);
                    history.replace(from);
    

                })
                .catch((error) => {
                    const updateUserInfo = { ...user };
                    updateUserInfo.error = error.message;
                    updateUserInfo.success = false;
                    setUser(updateUserInfo);

                   
                });
        }

        if (!isNewUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((result) => {

                    const updateUserInfo = { ...user };
                    updateUserInfo.error = "";
                    updateUserInfo.success = true;
                    setUser(updateUserInfo);
                    
                    
                    const { displayName, email } = result.user;
                    const signedInuser = { name: displayName, email: email };
                    setLoggedInUser(signedInuser);
                    history.replace(from);
                   
    
                })
                .catch((error) => {
                    const updateUserInfo = { ...user };
                    updateUserInfo.error = error.message;
                    updateUserInfo.success = false;
                    setUser(updateUserInfo);

                    
                });
        }
    }

    const handleBlur = (e) => {


        let isFormValid;
        let passwordValidation;

        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+.\S+/.test(e.target.value);
            setIsEmailValid(isFormValid);
        }

        if (e.target.name === 'password') {
            isFormValid = e.target.value.length > 6 && /\d{1}/.test(e.target.value);
            isFormValid ? setConfirmPassword(e.target.value) : setConfirmPassword('');
            setIspasswordValid(isFormValid);
        }

        if (e.target.name === 'confirm-password') {
            passwordValidation = e.target.value === confirmPassword;
            setMatchedPassword(passwordValidation);
        }

        if (isFormValid && mathchedPassword) {
            const updateUserInfo = { ...user };
            updateUserInfo[e.target.name] = e.target.value;
            setUser(updateUserInfo);

        }
    }

    const toggleLogIn = () => {
        setIsLoggedIn(!isLoggedIn);
        setIsNewUser(!isNewUser);
        setUser({});
    }


    return (
        <div className="form mt-3">
            <h5 className="text-center">
                {
                    isLoggedIn ? 'Create an account' : 'Login'
                }
            </h5>

            <form onSubmit={handleSubmit}>
                {
                    isLoggedIn ? (
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" className="form-control" placeholder="Your Name" onBlur={handleBlur} required />

                        </div>
                    ) : null
                }

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onBlur={handleBlur} required />
                    {isEmailValid ? null : <small className="text-danger">Invalid Email</small>}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" name="password" onBlur={handleBlur} required />
                    {isPasswordValid ? null : <small className="text-danger">include at least one number and be at least 6 characters long</small>}
                </div>

                {
                    isLoggedIn ? (
                        <div>
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Password" name="confirm-password" onBlur={handleBlur} required />
                            {mathchedPassword ? null : <small className="text-danger">Password didn't match</small>}
                        </div>
                    ) : null
                }

                <div className="form-check d-flex justify-content-between mt-2">
                    <div>
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">Remember Me</label>
                    </div>
                    <div>
                        <p style={{ textDecoration: 'underLine' }}>Forgot Password</p>
                    </div>

                </div>



                {
                    isLoggedIn ? <button type='submit' className="btn btn-info btn-block">Register</button> :
                        <>
                            <button type="submit" className="btn btn-info btn-block">Log In</button>
                        </>
                }
            </form>

            <div className="mt-3">
                {
                    user.success ? <small className="text-success text-center">User {isNewUser ? 'created' : 'logged in'} successfully</small> : <small className="text-danger text-center">{user.error}</small>
                }
            </div>

            <div className="my-3 d-flex justify-content-between">
                <span>
                    {
                        isLoggedIn ? 'Already have an account?' : "Don't have an account?"
                    }
                </span>

                <span style={{ textDecoration: 'underLine' }} onClick={toggleLogIn}>
                    {
                        isLoggedIn ? 'Log In' : 'Register'
                    }
                </span>
            </div>

            <div>
                <h2 style={{ textAlign: 'center' }}>Or</h2>
                <button className="btn btn-outline-primary btn-block" onClick={handleGoogleSignIn}>Continue With Google</button>
            </div>

        </div>
    );
};

export default Login;