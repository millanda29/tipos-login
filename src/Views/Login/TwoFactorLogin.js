import React, { useState } from 'react';
import BackToHomeButton from '../BackToHomeButton';

const TwoFactorLogin = () => {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState(null);
    const [loginError, setLoginError] = useState('');
    const hardcodedUsername = 'usuario';
    const hardcodedEmail = 'correoexample@dominio.com';
    const hardcodedPassword = '1234567';
    const hardcodedCode = '123456';


    const handleLogin = (e) => {
        e.preventDefault();
        if (step === 1) {
            // Verificar email/username y contraseña
            if (
                (emailOrUsername === hardcodedUsername || emailOrUsername === hardcodedEmail) &&
                password === hardcodedPassword
            ) {
                console.log('Username/Email and Password verified successfully');
                // Simula la solicitud de 2FA
                setStep(2);
            } else {
                console.log('Invalid Username/Email or Password');
                setLoginError('Invalid Username/Email or Password');
            }
        } else {
            // Verificar el código 2FA
            if (code === hardcodedCode) { // Simula un código de verificación válido
                console.log('2FA Code verified successfully');
                // Aquí podrías agregar la lógica para autenticar al usuario
                // Simula un inicio de sesión exitoso
                const userData = {
                    name: 'Nombre Apellido',
                    email: 'correoexample@dominio.com',
                    profilePicture: 'urlfotouser'
                };
                setUserData(userData);
                setStep(3); // Cambia al siguiente paso si la verificación es exitosa
            } else {
                console.log('Invalid 2FA Code');
                setLoginError('Invalid 2FA Code');
            }
        }
    };

    const handleLogout = () => {
        // Aquí podrías agregar la lógica para cerrar sesión
        setUserData(null);
        setEmailOrUsername('');
        setPassword('');
        setCode('');
        setStep(1);
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Two-Factor Authentication Login</h2>
                {!userData ? (
                    <>
                        <form onSubmit={handleLogin}>
                            {step === 1 ? (
                                <>
                                    <div className="form-group">
                                        <label>Email/Username:</label>
                                        <input
                                            type="text"
                                            value={emailOrUsername}
                                            onChange={(e) => setEmailOrUsername(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </>
                            ) : (
                                <div>
                                    <label>2FA Code:</label>
                                    <input
                                        type="text"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                    />
                                </div>
                            )}
                            {loginError && <p style={{color: 'red'}}>{loginError}</p>}
                            <button type="submit">Login</button>
                            <BackToHomeButton/>
                        </form>
                    </>
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

export default TwoFactorLogin;
