import axios from 'axios';
import { useState } from 'react';
import logo from '../assets/logo.svg';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
    // State hooks for managing form values and loading state
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = async () => {
        try {
            setLoading(true);
            const res = await axios.post('http://localhost:3000/api/v1/login', {
                email,
                password
            });
            const data = res.data;
            console.log(data);
            // Example success message
            
            toast.success('Login successful!');
            Cookies.set('user_token', res.data.token);
            window.location.href = '/';
            // Handle successful login logic here
        } catch (error) {
            console.error(error);
            // Example error message
            toast.error('Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-grad">
            <nav className="navbar navbar-expand-sm navbar-light p-4">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <img src={logo} className="logo-img" alt="logo" />
                        <ul className="navbar-nav me-auto"></ul>
                    </div>
                    <button className="btn px-0" type="button" style={{ color: 'rgba(0, 0, 0, 0.50)' }}>
                        Go to Website
                    </button>
                </div>
            </nav>

            <div className="container-fluid" id="form">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 col-sm-12 px-5">
                        <h2 className="form-header">Merchant Login</h2>
                        <input
                            type="email"
                            className="form-control-plaintext formFields mt-3"
                            placeholder="Email"
                            id="emailLogin"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            className="form-control-plaintext formFields my-2"
                            placeholder="Password"
                            id="passLogin"
                            name="pass"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div className="d-grid">
                            <button
                                type="button"
                                id="loginSubmit"
                                className="btn btn-dark btn-block"
                                onClick={handleSubmit}
                                disabled={loading} // Disable button while loading
                            >
                                Login
                                {
                                    loading && <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>
                                }
                            </button>
                        </div>
                        <div id="google-ic">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                <path d="M12.5 2.50001C14.7902 2.49677 17.0116 3.28291 18.79 4.72601C18.9023 4.81697 18.9936 4.93118 19.0575 5.06079C19.1214 5.1904 19.1565 5.33233 19.1603 5.47679C19.1641 5.62126 19.1365 5.76483 19.0795 5.89762C19.0225 6.03042 18.9374 6.14927 18.83 6.24601L17.32 7.60801C17.1485 7.76247 16.9288 7.85284 16.6982 7.86378C16.4676 7.87471 16.2404 7.80555 16.055 7.66801C15.0382 6.92071 13.8118 6.51299 12.55 6.50283C11.2882 6.49266 10.0553 6.88057 9.02661 7.6114C7.99794 8.34222 7.22587 9.37875 6.82019 10.5736C6.4145 11.7685 6.39584 13.0608 6.76687 14.2669C7.1379 15.4729 7.87972 16.5313 8.88686 17.2915C9.894 18.0517 11.1152 18.4751 12.3767 18.5013C13.6383 18.5276 14.8761 18.1555 15.914 17.4378C16.9519 16.7202 17.7371 15.6936 18.158 14.504L18.159 14.5H14.499C14.2542 14.4997 14.0181 14.4097 13.8353 14.247C13.6524 14.0842 13.5356 13.8601 13.507 13.617L13.5 13.5V11.5C13.5 11.2348 13.6054 10.9804 13.7929 10.7929C13.9804 10.6054 14.2348 10.5 14.5 10.5H21.445C21.6912 10.5 21.9287 10.5908 22.1121 10.755C22.2955 10.9192 22.4119 11.1453 22.439 11.39C22.479 11.757 22.5 12.127 22.5 12.5C22.5 18.023 18.023 22.5 12.5 22.5C6.977 22.5 2.5 18.023 2.5 12.5C2.5 6.97701 6.977 2.50001 12.5 2.50001Z" fill="black" />
                            </svg>
                        </div>
                        <div className="d-grid">
                            <button
                                type="button"
                                className="btn btn-outline-dark btn-block my-4"
                            >
                                <Link style={{ textDecoration: 'none' }} to="/signup">Sign Up</Link>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;
