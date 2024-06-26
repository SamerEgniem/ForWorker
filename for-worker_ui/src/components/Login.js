import React, { useEffect, useState } from 'react';
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
//import Layout from "./Layout";
import Header from "./Header"
import Footer from "./Footer"
const Login = () => {
    const [formData, setFormData] = useState({
        Phone: '',
        Password: '',
    });

    const [visible, setVisible] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const togglePasswordVisibility = () => {
        setVisible(!visible);
    };

    const handleLogin = () => {
        if (formData.Phone && formData.Password) {
            // Submit the data to the backend for authentication
        } else {
            alert('Both fields are required!');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
        console.log('Form data submitted:', formData);
    };

    useEffect(() => {
        document.title = 'Login';
    }, []);

    return (
        <>
        <Header/>
            <div className="login-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <h1 className="mb-3 text-center" style={{ color: '#1a1a1a' }}>Log in</h1>
                <form action="/submit" className="mb-3" onSubmit={handleSubmit} method="post" style={{ width: '100%', maxWidth: '400px' }}>
                    <div className="form-group">
                        <label htmlFor="Phone" style={{ color: '#1a1a1a'  }}>Phone: </label>
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="05*-*******"
                            name="Phone"
                            id="Phone"
                            value={formData.Phone}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" style={{ color: '#1a1a1a' }}>Password:</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={visible ? "text" : "password"}
                                className="form-control"
                                placeholder="enter your password"
                                name="Password"
                                id="password"
                                value={formData.Password}
                                onChange={handleInputChange}
                                required
                            />
                            <div
                                style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
                                onClick={togglePasswordVisibility}
                            >
                                {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" style={{ backgroundColor: 'rgb(0, 158, 158)', width: '100%' }}>Login</button>
                </form>
                <div className="text-center">
                    <p style={{ color: '#1a1a1a', textAlign: 'center' }}>or</p>
                    <a href="./Register" className="btn btn-success" style={{ backgroundColor: 'rgb(179, 131, 10)' }}>Create account</a>
                    <p className="small">
                        <a href="#">Have you forgotten your account details?</a>
                    </p>
                </div>
            </div>
        <Footer/>
        </>
    );
};

export default Login;
