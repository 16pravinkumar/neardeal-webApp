
import { useEffect } from "react";
import "../App.css";
import SideBar from "../Components/SideBar";
import background from "../assets/background.svg";
import { motion } from 'framer-motion';
import Cookies from 'js-cookie'; // If using js-cookie library

const Booking = () => {
   

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
                    <h1 className="secHead">Booking</h1>
                    <div className="row mb-4 p-0">
                        <div className="col-lg-6 d-flex">
                            <button type="button" className="btn btn-outline-secondary border-0 active me-2">All</button>
                            <button type="button" className="btn btn-outline-secondary border-0 me-2">Today</button>
                            <button type="button" className="btn btn-outline-secondary border-0 me-2">Upcoming</button>
                            <button type="button" className="btn btn-outline-secondary border-0 me-2">Finished</button>
                            <button type="button" className="btn btn-outline-secondary border-0 me-2">Cancelled</button>
                        </div>
                        <div className="col-lg-6 d-flex input-group justify-content-end ms-5" style={{ maxWidth: '45%' }}>
                            <input type="text" className="form-control" placeholder="Search..." />
                            <button className="btn btn-outline-secondary me-2 rounded-3" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                            <button className="btn btn-outline-secondary ms-3 me-0 rounded-3" type="button">Filter Packages</button>
                        </div>
                    </div>
                    <motion.div >

                        <table className="table table-hover mt-5">
                            <tbody>
                                <tr className="align-middle">
                                    <td><i className="bi bi-play-fill"></i> Started</td>
                                    <td>Wed 12<br />10:00-10:30</td>
                                    <td>Anti Ageing Facial/Deep Relieve Massage + <span className="text-success">Lunch & Swimming Pool</span></td>
                                    <td>Terrence Lam</td>
                                    <td className="text-success">Attending</td>
                                    <td>
                                        <button className="btn btn-link"><i className="bi bi-pencil"></i></button>
                                    </td>
                                    <td><button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo"><i className="fa fa-pencil p-0 me-3" style={{ fontSize: 'large' }}></i></button></td>
                                </tr>
                                <tr className="align-middle">
                                    <td><i className="bi bi-check-circle"></i> Attend</td>
                                    <td>Wed 12<br />11:00-11:30</td>
                                    <td>Anti Ageing Facial/Deep Relieve Massage</td>
                                    <td>Bonnie Li</td>
                                    <td className="text-success">Attending</td>
                                    <td>
                                        <button className="btn btn-link"><i className="bi bi-pencil"></i></button>
                                    </td>
                                    <td><button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo"><i className="fa fa-pencil p-0 me-3" style={{ fontSize: 'large' }}></i></button></td>
                                </tr>
                                <tr className="align-middle">
                                    <td><i className="bi bi-x-circle"></i> Absent</td>
                                    <td>Wed 12<br />12:00-12:30</td>
                                    <td>Anti Ageing Facial/Deep Relieve Massage + <span className="text-success">SPA & Fitness Facility</span></td>
                                    <td>Terrence Lam</td>
                                    <td className="text-danger">Cancelled</td>
                                    <td>
                                        <button className="btn btn-link disabled"><i className="bi bi-pencil"></i></button>
                                    </td>
                                    <td><button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo"><i className="fa fa-pencil p-0 me-3" style={{ fontSize: 'large' }}></i></button></td>
                                </tr>
                                <tr className="align-middle">
                                    <td><i className="bi bi-dash-circle"></i> Absent</td>
                                    <td>Wed 12<br />11:00-11:30</td>
                                    <td>Japanese Sakura & Sake Spa Ritual for Couple</td>
                                    <td>Bonnie Li</td>
                                    <td className="text-success">Attending</td>
                                    <td>
                                        <button className="btn btn-link"><i className="bi bi-pencil"></i></button>
                                    </td>
                                    <td><button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo"><i className="fa fa-pencil p-0 me-3" style={{ fontSize: 'large' }}></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </motion.div>
                    <nav>
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" >Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="offcanvas offcanvas-end" id="demo">
                    <div className="offcanvas-header mb-0">
                        <h3 className="offcanvas-title">Edit Booking</h3>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div className="offcanvas-body">
                        <p className="offCanInvid">Invoice ID: <span id="invoiceNo">1234567890</span></p>
                        <p className="offCanCustName">Customer<br /><span id="custName">Qwerty</span></p>
                        <div className="card mt-4">
                            <div className="card-header offCanCardHead">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <p>Order Information</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <button type="button" className="btn btn-outline-dark offCanCardHeadBtn float-end mt-1">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pb-0">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <img style={{ borderRadius: '5px' }} src="https://avatars.githubusercontent.com/u/97161064?v=4" width="100%" alt="Package" />
                                    </div>
                                    <div className="col-lg-8">
                                        <p className="offCanOfferType">Regular</p>
                                        <p className="offCanPackageDetail">Japanese Sakura & Sake Spa Ritual for Couple /Japanese sake bath + Aromatherapy Massage + Suite + Cake&Tea + Sake + Gym</p>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-lg-6">
                                        <input id="datepicker" placeholder="Date" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input id="timepicker" placeholder="Time" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-4">
                            <div className="card-header offCanCardHead">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <p>Customer Information</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body ">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <img style={{ borderRadius: '50%' }} src="https://avatars.githubusercontent.com/u/97161064?v=4" width="100%" alt="Customer" />
                                    </div>
                                    <div className="col-lg-8 my-auto">
                                        <p id="custName">Qwerty</p>
                                    </div>
                                </div>
                                <div className="input-group mt-3 w-50">
                                    <input type="text" className="form-control" id="cName" defaultValue="9012345678" />
                                    <button className="btn btn-outline-secondary border-0" type="submit"><i className="fa fa-clone"></i></button>
                                </div>
                                <div className="input-group mb-3 mt-3 w-auto">
                                    <input type="text" className="form-control" id="cEmail" defaultValue="someone@something.com" />
                                    <button className="btn btn-outline-secondary border-0" type="submit"><i className="fa fa-clone"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Booking