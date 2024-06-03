import React, { useState } from 'react';
import BackToHomeButton from "../BackToHomeButton";

const EmailLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const hardcodedEmail = 'correoexample@dominio.com';
    const hardcodedPassword = '123456';

    const handleLogin = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError('Invalid email address');
            return;
        }
        console.log(`Email: ${email}, Password: ${password}`);
        // Aquí podrías agregar la lógica para autenticar al usuario.
        // En este ejemplo, comparamos los datos ingresados con los quemados.
        if (email === hardcodedEmail && password === hardcodedPassword) {
            // Si las credenciales son correctas, establecemos los datos del usuario.
            setUser({
                firstName: 'Nombre',
                lastName: 'Apellido',
                email: 'correoexample@dominio.com',
                profilePicture: 'urlfotouser'
            });
        } else {
            setError('Incorrect email or password');
        }
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleLogout = () => {
        setUser(null);
        setEmail('');
        setPassword('');
        setError('');
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Email Login</h2>
                {!user ? (
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <button type="submit">Login</button>
                        <br/>
                        <BackToHomeButton />
                    </form>
                ) : (
                    <div className="user-info">
                        <h3>User Information</h3>
                        <p><strong>First Name:</strong> {user.firstName}</p>
                        <p><strong>Last Name:</strong> {user.lastName}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        {user.profilePicture && <img src={user.profilePicture} alt="Profile"/>}
                        <button className="logout" onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>


        </div>
    );
};

export default EmailLogin;
