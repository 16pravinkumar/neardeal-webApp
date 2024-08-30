import { useState } from "react";
import "../App.css";
import SideBar from "../Components/SideBar";
import background from "../assets/background.svg";
import edit from "../assets/edit.svg";
import { motion } from "framer-motion";

const Transaction = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        console.log('Toggle state:', !isChecked);
    };
    return (
        <div style={{ display: 'flex' }}>
            <SideBar></SideBar>
            <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }} style={{ width: '80%' }}>
                <div></div>
                <img style={{ position: 'absolute', top: 0, zIndex: '-1' }} src={background}></img>

                <div className="container mainSec" id="bookingSec">
                    <h1 className="secHead">Payments</h1>
                    <div className="row mb-4 p-0">
                        <div className="col-lg-6 d-flex">
                            <button type="button" className="btn btn-outline-secondary border-0 active me-2">All</button>
                            <button type="button" className="btn btn-outline-secondary border-0 me-2">Succeeded</button>
                            <button type="button" className="btn btn-outline-secondary border-0 me-2">Refunded</button>
                            <button type="button" className="btn btn-outline-secondary border-0 me-2">Uncaptured</button>
                            <button type="button" className="btn btn-outline-secondary border-0 me-2">Failed</button>
                        </div>
                        <div className="col-lg-6 d-flex input-group justify-content-end ms-5" style={{ maxWidth: '45%' }}>
                            <input type="text" className="form-control" placeholder="Search..." />
                            <button className="btn btn-outline-secondary me-2 rounded-3" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>

                    <div className="payment-table-container">
                        <table className="payment-table">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th>Price</th>
                                    <th>Customer</th>
                                    <th>Package Name</th>
                                    <th>Invoice ID <span>&#x25BC;</span></th>
                                    <th>Date & Time</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>$499</td>
                                    <td>Mac</td>
                                    <td>Anti Ageing Facial</td>
                                    <td>INV-17067</td>
                                    <td>--</td>
                                    <td><span className="status uncaptured">Uncaptured</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>$499</td>
                                    <td>Ada</td>
                                    <td>Anti Ageing Facial</td>
                                    <td>INV-17067</td>
                                    <td>23 June 2024 10:00</td>
                                    <td><span className="status succeeded">Succeeded</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>$499</td>
                                    <td>Cherish</td>
                                    <td>Anti Ageing Facial</td>
                                    <td>INV-17067</td>
                                    <td>23 June 2024 9:00</td>
                                    <td><span className="status succeeded">Succeeded</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>$499</td>
                                    <td>Jimmy</td>
                                    <td>Anti Ageing Facial</td>
                                    <td>INV-17067</td>
                                    <td>23 June 2024 8:30</td>
                                    <td><span className="status succeeded">Succeeded</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </motion.div>
        </div>
    )
}

export default Transaction