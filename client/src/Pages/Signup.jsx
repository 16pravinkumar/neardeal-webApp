import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.svg"
import spa from "../assets/spa.svg"
import salon from "../assets/salon.svg"
import yoga from "../assets/yoga.svg"
import gym from "../assets/gym.svg"

const SignUp = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        storeName: "",
        password: "",
        confirmPassword: "",
        dob: "",
        contact: "",
        category: "All",
        storeAddress: "",
        city: "",
        country: "",
        zip: "",
        storeLogo: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prevFormData => ({
                    ...prevFormData,
                    storeLogo: reader.result // Base64 encoded string
                }));
            };
            reader.readAsDataURL(file);
        }
    };
    

    const selCategory = (id) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            category: id,
        }));
    };

    const handleSubmit = (step) => {
        setCurrentStep(step); // Move to the next step
    };

    const launchMerchant = async () => {
        setLoading(true);
        try {
            const payload = {
                email: formData.email,
                storeName: formData.storeName,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
                dob: formData.dob,
                contact: formData.contact,
                category: formData.category,
                storeAddress: formData.storeAddress,
                city: formData.city,
                country: formData.country,
                zip: formData.zip,
                storeLogo: formData.storeLogo // Base64 string
            };
    
            const response = await axios.post("http://localhost:3000/api/v1/signup", payload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("Form submitted successfully:", response.data);
            toast.success('Merchant account created successfully');
            navigate('/login');
        } catch (error) {
            if (error.response) {
                console.error("Error submitting form:", error.response.data.message);
                toast.error(error.response.data.message);
            } else if (error.request) {
                console.error("Network error:", error.request);
            } else {
                console.error("Error:", error.message);
            }
        } finally{
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
                    <button className="btn px-0 float-end" type="button" style={{ color: "rgba(0, 0, 0, 0.50)" }}>
                        Go to Website
                    </button>
                </div>
            </nav>

            <div className="container-fluid" id="form">
                <div className="row px-5">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 col-sm-12 px-5">
                        {currentStep === 1 && (
                            <div id="signup1">
                                <h2 className="form-header">Account Credentials</h2>
                                <input
                                    type="email"
                                    className="form-control-plaintext formFields my-2"
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="text"
                                    className="form-control-plaintext formFields mt-3"
                                    placeholder="Store Name"
                                    id="store_name"
                                    name="storeName"
                                    value={formData.storeName}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="password"
                                    className="form-control-plaintext formFields my-2"
                                    placeholder="Password"
                                    id="pass"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="password"
                                    className="form-control-plaintext formFields my-2"
                                    placeholder="Confirm Password"
                                    id="conpass"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    required
                                />
                                <div className="d-grid mt-3">
                                    <button type="button" className="btn btn-dark btn-block" onClick={() => handleSubmit(2)}>
                                        Submit Credentials
                                    </button>
                                </div>
                                <div className="mx-auto alert w-auto p-0 mt-3" id="credAlert" style={{ display: "none" }}>
                                    <p className="mt-2" id="credMsg"></p>
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div id="signup2">
                                <h2 className="form-header">Merchant Account Created</h2>
                                <div className="d-grid mt-3">
                                    <button type="button" className="btn btn-dark btn-block" onClick={() => handleSubmit(3)}>
                                        Verification Done
                                    </button>
                                </div>
                            </div>
                        )}

                        {currentStep === 3 && (
                            <div id="signup3">
                                <h2 className="form-header">Store Information</h2>
                                <input
                                    type="date"
                                    className="form-control-plaintext formFields my-2"
                                    placeholder="Date of opening"
                                    id="dob"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="tel"
                                    className="form-control-plaintext formFields my-2"
                                    placeholder="Contact No."
                                    id="contact"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="hidden"
                                    className="form-control-plaintext formFields my-2"
                                    placeholder="Category"
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                />
                                <div className="d-grid mt-3">
                                    <button type="button" className="btn btn-dark btn-block" onClick={() => handleSubmit(4)}>
                                        Continue
                                    </button>
                                </div>
                            </div>
                        )}

                        {currentStep === 4 && (
                            <div id="signup4">
                                <div className="row p-0">
                                    <h2 className="form-header">Service(s) Category</h2>
                                    <div className="col-lg-6 col-sm-12" style={{ paddingRight: "1%" }}>
                                        <div className="card mb-2" onClick={() => selCategory("Spa")} id="Spa">
                                            <div className="row g-0">
                                                <div className="col-md-6 m-auto">
                                                    <div className="card-body">
                                                        <p className="card-text">Spa</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-5 p-2">
                                                    <img src={spa} className="img-fluid rounded-start" alt="Spa" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12" style={{ paddingLeft: "1%" }}>
                                        <div className="card mb-2" onClick={() => selCategory("Salon")} id="Salon">
                                            <div className="row g-0">
                                                <div className="col-md-6 m-auto">
                                                    <div className="card-body">
                                                        <p className="card-text">Salon</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-5 p-2">
                                                    <img src={salon} className="img-fluid rounded-start" alt="Salon" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12" style={{ paddingRight: "1%" }}>
                                        <div className="card mb-2" onClick={() => selCategory("yoga")} id="yoga">
                                            <div className="row g-0">
                                                <div className="col-md-6 m-auto">
                                                    <div className="card-body">
                                                        <p className="card-text">Yoga</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-5 p-2">
                                                    <img src={yoga} className="img-fluid rounded-start" alt="yoga" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12" style={{ paddingRight: "1%" }}>
                                        <div className="card mb-2" onClick={() => selCategory("gym")} id="gym">
                                            <div className="row g-0">
                                                <div className="col-md-6 m-auto">
                                                    <div className="card-body">
                                                        <p className="card-text">Gym</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-5 p-2">
                                                    <img src={gym} className="img-fluid rounded-start" alt="gym" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-grid mt-3">
                                    <button type="button" className="btn btn-dark btn-block" onClick={() => handleSubmit(5)}>
                                        Proceed to Final Step
                                    </button>
                                </div>
                            </div>
                        )}

                        {currentStep === 5 && (
                            <div id="signup5">
                                <h2 className="form-header">Store Address</h2>
                                <textarea
                                    className="form-control-plaintext formFields mt-3"
                                    placeholder="Full Store Address"
                                    id="store_address"
                                    name="storeAddress"
                                    value={formData.storeAddress}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                                <input
                                    type="text"
                                    className="form-control-plaintext formFields mt-3"
                                    placeholder="City"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="text"
                                    className="form-control-plaintext formFields mt-3"
                                    placeholder="Country"
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="text"
                                    className="form-control-plaintext formFields mt-3"
                                    placeholder="Zip Code"
                                    id="zip"
                                    name="zip"
                                    value={formData.zip}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="file"
                                    className="form-control-plaintext formFields mt-3"
                                    id="storeLogo"
                                    name="storeLogo"
                                    onChange={handleFileChange}
                                    required
                                />
                                {formData.storeLogo && (
                                    <div className="mt-3">
                                        <img
                                            src={URL.createObjectURL(formData.storeLogo)}  // Show preview of selected image
                                            alt="Store Logo Preview"
                                            style={{ maxWidth: '100px', maxHeight: '100px' }}
                                        />
                                    </div>
                                )}
                                <div className="d-grid mt-3">
                                    <button type="button" className="btn btn-dark btn-block" onClick={launchMerchant}>
                                        Launch Merchant Account
                                        {
                                            loading && (
                                                <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>
                                            )
                                        }
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
