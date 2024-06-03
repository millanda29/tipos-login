import React, { useState } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';
import BackToHomeButton from "../BackToHomeButton";

const GoogleLoginComponent = () => {
    const [userData, setUserData] = useState(null);

    const handleLoginSuccess = (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);
        console.log('Login Success:', decoded);
        setUserData(decoded);
    };

    const handleLoginFailure = () => {
        console.log('Login Failed');
    };

    const handleLogout = () => {
        googleLogout();
        setUserData(null);
        console.log('Logged out');
    };

    return (
        <div className="login-container">
            <div className="login-form">
            <h2>Login with Google</h2>
            {!userData ? (
                    <div>
                        <GoogleLogin
                            onSuccess={handleLoginSuccess}
                            onError={handleLoginFailure}
                            useOneTap
                        />
                        <BackToHomeButton />
                    </div>

            ) : (
                <div className="user-info">
                    <h3>User Information</h3>
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    {userData.picture && <img src={userData.picture} alt="Profile"/>}
                    <button className="logout" onClick={handleLogout}>Logout</button>
                </div>
            )}
            </div>
        </div>
    );
};

export default GoogleLoginComponent;
