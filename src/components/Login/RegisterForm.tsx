import React from 'react';

const RegisterForm: React.FC = () => {
    return (
        <form className="popup-form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterForm;