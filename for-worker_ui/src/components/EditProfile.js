import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";
import Layout from "./Layout";

const EditProfile = () => {
    const [formData, setFormData] = useState({
        first_name: '', last_name: '', company: '', email: '', userName: '', password: '', // not sure if to keep the password
    })
    const [showPassword, setShowPassword] = useState(false);
    const [visible, setVisible] = useState(false);
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            formData, [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };
    useEffect(() => {
        document.title = 'Edit Profile';
    }, []);

    return (<Layout>
            <h1 style={{marginTop: '15px', marginBottom: '15px', color: 'black'}}>Edit Profile</h1>

            <div className="row">

                <div className="col-md-3">
                    <div className="text-center" style={{marginTop: '20px', marginBottom: '20px'}}>
                        <img src="//placehold.it/100" className="avatar img-circle" alt="avatar"/>
                        <h5>edit your profile picture.</h5>

                        <input type="file" className="form-control"/>
                    </div>
                </div>

                <div className="col-md-9 personal-info">

                    <h3>Personal informations.</h3>

                    <form className="form-horizontal" role="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="col-lg-3 control-label">First name:</label>
                            <div className="col-lg-8">
                                <input id="first_name" placeholder={"enter your first name"} value={formData.first_name}
                                       className="form-control" type="text" onChange={handleInputChange}
                                       required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-3 control-label">Last name:</label>
                            <div className="col-lg-8">
                                <input id="last_name" name="last_name" placeholder={"enter your last name."}
                                       value={formData.last_name} className="form-control" type="text"
                                       onChange={handleInputChange}
                                       required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-3 control-label">Company:</label>
                            <div className="col-lg-8">
                                <input placeholder={"enter your company or job name "} id="company" name={'company'}
                                       className="form-control" type="text" value={formData.company}
                                       onChange={handleInputChange}
                                       required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-3 control-label">Email:</label>
                            <div className="col-lg-8">
                                <input id='email' placeholder={"enter yout email."} className="form-control" type="text"
                                       value={formData.email} onChange={handleInputChange}
                                       required/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-3 control-label">Username:</label>
                            <div className="col-md-8">
                                <input placeholder={"enter your user name"} id="userName" className="form-control"
                                       type="text" value={formData.userName} onChange={handleInputChange}
                                       required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label">Password:</label>
                            <div className="col-md-8">
                                <input className="form-control" type={visible ? "text" : "password"}
                                       placeholder={"enter your password to confirm changes."} value={formData.password}
                                       onChange={handleInputChange}
                                       required/>
                                <div className="p-2" onClick={() => setVisible(!visible)}>
                                    {visible ? <EyeOutlined/> : <EyeInvisibleOutlined/>}
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label"></label>
                            <div className="col-md-8">
                                <input type="button" className="btn btn-primary" value="Save Changes"/>
                                <span></span>
                                <input type="reset" className="btn btn-default" value="Cancel"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>

    );
};
export default EditProfile;


