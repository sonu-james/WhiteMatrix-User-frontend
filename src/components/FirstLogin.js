import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminSignin.css';
import logo from './assets/images/logo.png';

const AdminSignIn = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // For showing/hiding loader
    const navigate = useNavigate();

    // Dummy credentials
    const dummyCredentials = {
        name: 'admin',
        password: 'admin123',
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true); // Start loader

        // Simulate form validation with dummy data
        if (formData.name === dummyCredentials.name && formData.password === dummyCredentials.password) {
            setLoading(false); // Stop loader
            navigate('/home');
        } else {
            setError('Invalid username or password');
            setLoading(false); // Stop loader if there's an error
        }
    };

    return (
        <div className='asign-form-body'>
            <div className='asignup-form'>
                <div className='alogo-container'>
                    <img src={logo} alt="KIDGAGE" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
                </div>
                <form className='aform-sign-in' onSubmit={handleSubmit}>
                    <h2>Admin's Sign-In</h2>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Username"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                    />
                    <button primary type="submit">Sign In</button>

                    {loading && <p>Signing in...</p>}

                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default AdminSignIn;
