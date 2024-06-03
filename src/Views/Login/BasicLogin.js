import React, { useState } from 'react';
import BackToHomeButton from "../BackToHomeButton";
import '../CSS/Login1.css';

const BasicLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const hardcodedUsername = 'usuario';
    const hardcodedPassword = '123456';

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(`Username: ${username}, Password: ${password}`);
        // Aquí podrías agregar la lógica para autenticar al usuario.
        // En este ejemplo, comparamos los datos ingresados con los quemados.
        if (username === hardcodedUsername && password === hardcodedPassword) {
            // Si las credenciales son correctas, establecemos los datos del usuario.
            setUser({
                firstName: 'Nombre',
                lastName: 'Apellido',
                email: 'correoexample@dominio.com',
                profilePicture: 'urlfotouser'
            });
        } else {
            alert('Incorrect username or password');
        }
    };

    const handleLogout = () => {
        setUser(null);
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Basic Login</h2>
                {!user ? (
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Username:</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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
                        <button type="submit">Login</button>
                        <BackToHomeButton/>
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

export default BasicLogin;
