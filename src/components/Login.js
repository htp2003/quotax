import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/login', formData);
            const { token, user } = response.data;

            // Lưu thông tin người dùng vào localStorage
            localStorage.setItem('userData', JSON.stringify(user));
            localStorage.setItem('token', token);

            toast.success(`Welcome back, ${user.username}!`, { autoClose: 2000 });
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (error) {
            console.error('Error logging in:', error);
            toast.error('Invalid username or password. Please try again.');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2>Login Page</h2>
                <form onSubmit={handleLogin}>
                    <label className='input-field'>
                        Username:
                        <input type="text" name='username' onChange={handleChange} required />
                    </label>
                    <br />
                    <label className='input-field'>
                        Password:
                        <input type="password" name='password' onChange={handleChange} required />
                    </label>
                    <br />
                    <button type="submit" className="btn login-btn">Login</button>
                </form>
                <p>
                    Don't have an account? <Link to="/register">Register here</Link>.
                </p>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;
