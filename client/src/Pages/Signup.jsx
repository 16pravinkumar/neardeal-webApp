import { useState } from "react";
import axios from 'axios';

const SignUp = () => {
    const [currentStep, setCurrentStep] = useState(1);
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
        console.log(`Updating ${name} with value: ${value}`); // Debugging line
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        console.log("File selected:", e.target.files[0]); // Debugging line
        setFormData(prevFormData => ({
            ...prevFormData,
            storeLogo: e.target.files[0], // Save the file object
        }));
    };

    const selCategory = (id) => {
        console.log("Category selected:", id); // Debugging line
        setFormData(prevFormData => ({
            ...prevFormData,
            category: id,
        }));
    };

    const handleSubmit = (step) => {
        setCurrentStep(step); // Move to the next step
    };

    const launchMerchant = async () => {
        console.log(formData); // Debugging line
    
        try {
            // Create a FormData object to handle form data and file uploads
            // const formDataToSend = new FormData();
    
            // Append form fields
            // Object.keys(formData).forEach(key => {
            //     if (formData[key] instanceof File) {
            //         formDataToSend.append(key, formData[key]); // Append file as is
            //     } else {
            //         formDataToSend.append(key, formData[key]);
            //     }
            // });
            
            // Send the POST request with the form data
            const response = await axios.post("http://localhost:3000/api/v1/signup", formData);
    
            // Handle the response
            console.log("Form submitted successfully:", response.data);
            // Optionally, reset the form or navigate to another page
    
        } catch (error) {
            if (error.response) {
                // Server responded with a status other than 2xx
                console.error("Error submitting form:", error.response.data.message);
            } else if (error.request) {
                // Request was made but no response received
                console.error("Network error:", error.request);
            } else {
                // Something happened in setting up the request
                console.error("Error:", error.message);
            }
        }
    };
    

    return (
        <div className="bg-grad">
            <nav className="navbar navbar-expand-sm navbar-light p-4">
                <div className="container-fluid">
                    <img src="../assets/image 10logo.png" className="logo-img" alt="logo" />
                    <h1 className="header-logo float-start">neardeal</h1>
                    <div className="collapse navbar-collapse" id="mynavbar">
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
                                                    <img src="../assets/spa.png" className="img-fluid rounded-start" alt="Spa" />
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
                                                    <img src="../assets/salon.png" className="img-fluid rounded-start" alt="Salon" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12" style={{ paddingRight: "1%" }}>
                                        <div className="card mb-2" onClick={() => selCategory("All")} id="All">
                                            <div className="row g-0">
                                                <div className="col-md-6 m-auto">
                                                    <div className="card-body">
                                                        <p className="card-text">All</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-5 p-2">
                                                    <img src="../assets/all.png" className="img-fluid rounded-start" alt="All" />
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
