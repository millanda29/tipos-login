import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Inicio.css';

function InicioView() {
    return (
        <div className="container">
            <div className="content">
                <h1>Diferentes tipos de inicio de sesión</h1>
                <h2>El manejo adecuado de los inicio de sesión BD y terceros (Facebook, Google)</h2>
                <p>Selecciona que tipo de inicio de sesión deseas probar.</p>
                <div className="protocols-container">
                    <Link to="/button1" className="protocol-card">
                        <img src="https://as1.ftcdn.net/v2/jpg/02/17/96/00/1000_F_217960025_hLzTELXMEkPMOLwvrVxBo9Wi5IGerxVO.jpg" alt="BasicLogin" />
                        <div className="protocol-name">Basic</div>
                    </Link>
                    <Link to="/button2" className="protocol-card">
                        <img src="https://i.pinimg.com/564x/4b/6a/bc/4b6abcc7950843b816664622b006efce.jpg" alt="EmailLogin" />
                        <div className="protocol-name">Email</div>
                    </Link>
                    <Link to="/button3" className="protocol-card">
                        <img src="https://i.pinimg.com/564x/da/17/c0/da17c04cde4bc67f66a5d46a7189a4e6.jpg" alt="TwoFactor" />
                        <div className="protocol-name">TwoFactor</div>
                    </Link>
                    <Link to="/button4" className="protocol-card">
                        <img src="https://i.pinimg.com/564x/84/c7/00/84c7007eb6ac4374f77394d1e4954a96.jpg" alt="GoogleLogin" />
                        <div className="protocol-name">Google</div>
                    </Link>
                    <Link to="/button5" className="protocol-card">
                        <img src="https://i.pinimg.com/564x/67/5c/af/675cafde751be69ba38a16504cb93e39.jpg" alt="FacebookLogin" />
                        <div className="protocol-name">Facebook</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default InicioView;
