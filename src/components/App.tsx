import React, { useState } from 'react';
import Header from './Login/Header';
import LoginForm from './Login/LoginForm';
import RegisterForm from './Login/RegisterForm';
import '../App.css';

const App: React.FC = () => {
    const [loginVisible, setLoginVisible] = useState(false);
    const [registerVisible, setRegisterVisible] = useState(false);

    const toggleLogin = () => {
        setLoginVisible(true);
        setRegisterVisible(false); // Close register form
    };

    const toggleRegister = () => {
        setRegisterVisible(true);
        setLoginVisible(false); // Close login form
    };

    return (
        <div className="App">
            <Header />
            <div className="forms">
                <button onClick={toggleLogin}>Login</button>
                <button onClick={toggleRegister}>Register</button>
                {loginVisible && <LoginForm />}
                {registerVisible && <RegisterForm />}
            </div>
        </div>
    );
}

export default App;
