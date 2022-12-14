import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function LoginPage() {
    const history = useHistory();

    return (
        <div>
            <Header />
            <LoginForm className="center" />
            <center>
                Need an account?
                <button
                    className="btn_asLink"
                    onClick={() => {
                        history.push('/signup');
                    }}
                >
                    <u>Sign Up</u>
                </button>
            </center>
            <Footer />
        </div>
    );
}
