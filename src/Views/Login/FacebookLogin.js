import React, { useCallback, useState } from 'react';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import BackToHomeButton from "../BackToHomeButton";

const FacebookLoginComponent = () => {
    const [profile, setProfile] = useState(null);

    const onLoginStart = useCallback(() => {
        console.log('Login start');
    }, []);

    const onLogoutSuccess = useCallback(() => {
        setProfile(null);
        console.log('Logout success');
    }, []);

    return (
        <div className="login-container">
            <div className="login-form">
            <h2>Login with Facebook</h2>
            {!profile ? (
                    <div>
                        <LoginSocialFacebook
                            appId="Facebook ID"
                            onLoginStart={onLoginStart}
                            onResolve={({ provider, data }) => {
                                console.log('Login success:', data);
                                setProfile(data);
                            }}
                            onReject={(err) => {
                                console.log('Login failed:', err);
                            }}
                        >
                            <FacebookLoginButton />
                        </LoginSocialFacebook>
                        <BackToHomeButton/>
                    </div>
            ) : (
                <div className="user-info">
                    <h3>User Information</h3>
                    <p><strong>Name:</strong> {profile.name}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    {profile.picture && <img src={profile.picture.data.url} alt="Profile"/>}
                    <button className="logout" onClick={onLogoutSuccess}>Logout</button>
                </div>
            )}
            </div>
        </div>
    );
};

export default FacebookLoginComponent;
