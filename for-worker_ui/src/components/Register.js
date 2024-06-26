import React, { useEffect, useState } from 'react';

import Header from "./Header.js";
import Footer from "./Footer.js"
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import WorkerDataService from "../services/worker.service";
var bcrypt = require('bcryptjs');
function Register() {
    const [inputFields, setInputFields] = useState({
        firstName: '', lastName: '', phoneNumber: '', email: '', password: '', confirmpass: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors(validateValues(inputFields));

        if (Object.keys(errors).length === 0) {
            try {
                WorkerDataService.create(inputFields)
                    .then(response => {
                        console.log('Registration successful:', response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            } catch (error) {
                console.error('Error registering:', error.response.data.error);
            }
        }

        setSubmitting(true);
    };

    const hashPassword = (password) => {
        const saltRounds = 10;
        return bcrypt.hashSync(password, saltRounds);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handelNameChange = (e) => {
        const value = e.target.value.replace(/[^A-Za-z]/ig, '');
        setInputFields({...inputFields, [e.target.name]: value});
    };

    const handelEmailChange = (e) => {
        setInputFields({...inputFields, [e.target.name]: e.target.value});
    };

    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.password.length < 4) {
            errors.password = "Password is too short";
        }
        if (inputValues.firstName.length === 0) {
            errors.firstName = "Please enter your first name";
        }
        return errors;
    };

    const handleChange = (e) => {
        setInputFields({...inputFields, [e.target.name]: e.target.value});
    };

    useEffect(() => {
        document.title = 'Register';
    }, []);

    return (
        <>
        <Header/>
        <div>
            <div className="row" style={{marginBottom: '192px',marginTop:'45px'}}>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 offset-sm-2 offset-md-3 offset-lg-4">
                    <h1 className="mb-3 text-center" style={{ color: 'black', marginTop: '40px' }}>Create a new account</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group col-12 col-sm-6">
                                <label htmlFor="firstName" style={{ color: 'black' }}>First name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="First name"
                                    name="firstName"
                                    value={inputFields.firstName}
                                    onChange={handelNameChange}
                                />
                            </div>
                            <div className="form-group col-12 col-sm-6">
                                <label htmlFor="lastName" style={{ color: 'black' }}>Last name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Last name"
                                    name="lastName"
                                    value={inputFields.lastName}
                                    onChange={handelNameChange}
                                />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="phoneNumber" style={{ color: 'black' }}>Phone:</label>
                            <input
                                type="tel"
                                className="form-control"
                                placeholder="05********"
                                name="phoneNumber"
                                value={inputFields.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" style={{ color: 'black' }}>Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="example@example.com"
                                name="email"
                                value={inputFields.email}
                                onChange={handelEmailChange}
                            />
                        </div>
                        <div className="form-group position-relative">
                            <label htmlFor="password" style={{ color: 'black' }}>Password:</label>
                            <div className="eye-icon position-absolute"
                                onClick={togglePasswordVisibility}
                                style={{ cursor: 'pointer', right: '10px', top: '50%', transform: 'translateY(10%)' }}
                            >
                                {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                            </div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="form-control pl-4"
                                placeholder="Enter Password"
                                value={inputFields.password}
                                onChange={handleChange}
                                name="password"
                            />
                        </div>
                        <div className="form-group position-relative">
                            <label htmlFor="confirmpass" style={{ color: 'black' }}>Confirm Password:</label>
                            <div className="eye-icon position-absolute"
                                onClick={toggleConfirmPasswordVisibility}
                                style={{ cursor: 'pointer', right: '10px', top: '50%', transform: 'translateY(10%)' }}
                            >
                                {showConfirmPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                            </div>
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                className="form-control pl-4"
                                placeholder="Confirm Password"
                                value={inputFields.confirmpass}
                                onChange={handleChange}
                                name="confirmpass"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mb-3"
                            style={{ backgroundColor: 'rgb(179, 131, 10)' }}>
                            Create account
                        </button>
                    </form>
                </div>        
            </div>
    </div>
    <Footer/>
    </>
);
};

export default Register;

