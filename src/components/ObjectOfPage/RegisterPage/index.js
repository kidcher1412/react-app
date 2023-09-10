import React from "react";
import { Formik, Form, Field } from "formik";
import toast, { Toaster } from 'react-hot-toast';
import axios from "../../../axios";

const RegisterPage = () => {
    const initialValues = {
        username: '',
        pass: '',
        repass: '',
    };

    const handleSubmit = async values => {
        console.log(values)
        const register = async () => {
            try {
                const response = await axios.post('api/register', values);
                return response;
            } catch (error) {
                throw new Error("error register...!");
            }
        }

        toast.promise(register(), {
            loading: 'Checking...',
            success: <b>register Successfully...!</b>,
            error: <b>register Not Done!</b>
        });
    };
    return (
        <div className="register-login-section spad">
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="register-form">
                            <h2>Register</h2>
                            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                                <Form>
                                    <div className="group-input">
                                        <label htmlFor="username">Username or email address *</label>
                                        <Field type="text" name="username" id="username" />
                                    </div>
                                    <div className="group-input">
                                        <label htmlFor="pass">Password *</label>
                                        <Field type="password" name="pass" id="pass" />
                                    </div>
                                    <div className="group-input">
                                        <label htmlFor="con-pass">Confirm Password *</label>
                                        <Field type="password" name="repass" id="con-pass" />
                                    </div>
                                    <button type="submit" className="site-btn register-btn">REGISTER</button>
                                </Form>
                            </Formik>
                            <div className="switch-login">
                                <a href="./login.html" className="or-login">Or Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
