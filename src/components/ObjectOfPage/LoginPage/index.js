import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useFormik,Formik,Form,Field } from "formik";
import axios from "axios";
import { useAuthStore } from "../../../store/store"

const LoginPage =()=>{

    // const { username } = useAuthStore(state => state.auth)
    // const setUsername = useAuthStore(state => state.setUsername); //để set vào
    // setUsername(values.username);


    const tokenSave = localStorage.getItem('token');
    const usernameLoged = localStorage.getItem('usernameLoged') || "";
    const LoginData = useFormik({
        initialValues: {
            username: usernameLoged,
            pass: '', // Sử dụng mảng rỗng hoặc mảng các giá trị ban đầu nếu có
            savePass: false, // Sử dụng mảng rỗng hoặc mảng các giá trị ban đầu nếu có
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            const Login = async () => {
                try {
                    const response = await axios.post('http://localhost:8080/api/login', values);
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('usernameLoged', values.username);
                    return response;
                } catch (error) {
                    console.log(error)
                    throw new Error("error login...!");
                }
            }
            toast.promise(Login(), {
                loading: 'Checking...',
                success: <b>Login Successfully...!</b>,
                error: <b>Login Fail...!</b>
            });
        }
    });
    return(
        <div className="register-login-section spad">
            {tokenSave && <p>{tokenSave}</p>}
            <Toaster position='top-center' reverseOrder={false}></Toaster>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">

                        <Formik {...LoginData} onSubmit={LoginData.handleSubmit} onChange={LoginData.handleChange}>
                                <Form>
                                    <div className="login-form">
                                        <h2>Login</h2>
                                            <div className="group-input">
                                                <label htmlFor="username">Username or email address *</label>
                                                <input {...LoginData.getFieldProps('username')} id="username" type="text" placeholder='Username' />
                                            </div>
                                            <div className="group-input">
                                                <label htmlFor="pass">Password *</label>
                                                <input {...LoginData.getFieldProps('pass')} id="pass" type="text" placeholder='Password' />
                                            </div>
                                            <div className="group-input gi-check">
                                                <div className="gi-more">
                                                    <label htmlFor="save-pass">
                                                        Save Password
                                                <input type="checkbox" name="savePass" value={LoginData.values.savePass} onChange={LoginData.handleChange} id="save-pass" />
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

    )
}
export default LoginPage;