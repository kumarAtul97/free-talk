// LoginForm.tsx
import React from 'react';

const LoginForm: React.FC = () => {
    return (
        <form className="popup-form">
            <input type="number" placeholder="Mobile Number" required/>
            <input type='email' placeholder='Email Id' required/>
            <input type="password" placeholder="Password" required/>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
