import React from "react";
import Cookies from 'js-cookie';

import toast, { Toaster } from 'react-hot-toast';
import { useFormik, Formik, Form, Field } from "formik";
import axios from "../../../axios";
import $ from "jquery"
const LoginPage = () => {
    const tokenSave = Cookies.get('token');
    const usernameLoged = localStorage.getItem('usernameLoged') || "";
    const passwordLoged = localStorage.getItem('passwordLoged') || "";
    
    
    const LoginData = useFormik({
        initialValues: {
            username: usernameLoged,
            pass: passwordLoged,
            savePass: passwordLoged===''?false:true,
        },
        validateOnBlur: false,
        onSubmit: async values => {
            try {
                const response = await axios.post('api/login', values);
                Cookies.set('token', response.data.token);
                localStorage.setItem('usernameLoged', values.username);
                if (values.savePass) localStorage.setItem('passwordLoged', values.pass);
                $(".login-panel").text("Xin  chào " + response.data.username)
                toast.success("Login Successfully...!");
            } catch (error) {
                console.log(error);
                toast.error("Login Fail...!");
            }
        }
    });

    return (
        <div className="register-login-section spad">
            {tokenSave && <p>{tokenSave}</p>}
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <Formik {...LoginData} onSubmit={LoginData.handleSubmit}>
                            <Form>
                                <div className="login-form">
                                    <h2>Login</h2>
                                    <div className="group-input">
                                        <label htmlFor="username">Username or email address *</label>
                                        <input {...LoginData.getFieldProps('username')} id="username" type="text" placeholder='Username' />
                                    </div>
                                    <div className="group-input">
                                        <label htmlFor="pass">Password *</label>
                                        <input {...LoginData.getFieldProps('pass')} id="pass" type="password" placeholder='Password' />
                                    </div>
                                    <div className="group-input gi-check">
                                        <div className="gi-more">
                                            <label htmlFor="save-pass">
                                                Save Password
                                                <input type="checkbox" name="savePass" checked={LoginData.values.savePass} onChange={LoginData.handleChange} id="save-pass" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <a href="#" className="forget-pass">Forget your Password</a>
                                        </div>
                                    </div>
                                    <button type="submit" className="site-btn login-btn">Sign In</button>
                                    <div className="switch-login">
                                        <a href="./register.html" className="or-login">Or Create An Account</a>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
