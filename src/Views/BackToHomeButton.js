import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Login1.css'

const BackToHomeButton = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <button onClick={handleBackToHome}>
            Regresar al Inicio
        </button>
    );
};

export default BackToHomeButton;
