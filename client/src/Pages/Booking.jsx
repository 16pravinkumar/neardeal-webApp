import "../App.css";
import SideBar from "../Components/SideBar";
import background from "../assets/background.svg";
import { motion } from 'framer-motion';
import started from "../assets/started.svg";
import tick from "../assets/tick.svg";
import dotedCircle from "../assets/dotedCircle.svg";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';

const Booking = () => {

    const jwtUserToken = Cookies.get("user_token");
    const userData = JSON.parse(jwtUserToken);
    const [bookingData, setBookingData] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleSubmit = async () => {
        console.log('dsgbd');

        try {
            setLoading(true);

            // Make sure to use POST if you're sending a body with your request
            const response = await fetch('https://wellness.neardeal.me/WAPI/bookingsTry.php', {
                method: 'POST', // Correct method for sending data
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "vendorid": userData.ID,
                    "bookingFilter": "Today"
                })
            });

            // Parse JSON data from the response
            const data = await response.json();

            console.log(data.data);
            setBookingData(data.data);

            // const transformedArray = [
            //     {
            //         BookingID: data.message.BookingID,
            //         BookingStatus: data.message.BookingStatus,
            //         BookingStartDate: data.message.BookingStartDate,
            //         BookingEndDate: data.message.BookingEndDate,
            //         InventoryName: data.message.InventoryName,
            //         AssignedTo: data.message.AssignedTo,
            //         PaymentStatus: data.message.PaymentStatus
            //     }
            // ];
            // console.log(transformedArray);
            // setBookingData(transformedArray);

        } catch (error) {
            console.error('Error:', error);
            // toast.error('Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        console.log(jwtUserToken);
        handleSubmit()
    }, [bookingData])
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
                            <button data-bs-toggle="offcanvas" data-bs-target="#filter-package" className="btn btn-outline-secondary ms-3 me-0 rounded-3" type="button">Filter Packages</button>
                        </div>
                    </div>
                    <motion.div >

                        <table className="table table-hover mt-5">
                            <tbody>
                                {
                                    bookingData.map((data) => {
                                        return <>
                                            <tr className="align-middle">
                                                <>
                                                    {data.BookingStatus === "Started" ? <td style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}><img style={{ width: '41%', margin: 'auto' }} src={started} /> <span>Started</span></td> : data.BookingStatus === "Absent" ? <td style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}><img style={{ width: '41%', margin: 'auto' }} src={dotedCircle} /> <span>Absent</span></td> : <td style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}><img style={{ width: '41%', margin: 'auto' }} src={tick} /> <span>Attend</span></td>}
                                                </>
                                                {/* <td style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}><img style={{ width: '41%', margin: 'auto' }} src={tick} /> <span>Attend</span></td> */}
                                                <td>{data.BookingStartDate}</td>
                                                <td>{data.InventoryName}</td>
                                                <td>{data.AssignedTo}</td>
                                                <>
                                                    {data.PaymentStatus === "Paid" ? <td className="text-success">{data.PaymentStatus}</td> : <td className="text-danger">{data.PaymentStatus}</td>}
                                                </>
                                                <td>
                                                    <button className="btn btn-link"><i className="bi bi-pencil"></i></button>
                                                </td>
                                                <td><button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo"><i className="fa fa-pencil p-0 me-3" style={{ fontSize: 'large' }}></i></button></td>
                                            </tr>
                                        </>
                                    })
                                }
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
                                        <p>Order Status</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <button type="button" className="btn btn-outline-dark offCanCardHeadBtn float-end mt-1">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pb-0">
                                <div className="row">
                                    <select style={{ padding: '10px', borderRadius: '5px' }}>
                                        <option>Attend</option>
                                        <option>Cancel</option>
                                        <option>Absent</option>
                                        <option>Started</option>
                                    </select>
                                </div>
                                <div style={{ marginTop: '10px' }} className="row">
                                    <select style={{ padding: '10px', borderRadius: '5px' }}>
                                        <option>Paid</option>
                                        <option>Pending</option>
                                    </select>
                                </div>
                            </div>

                        </div>

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
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0px' }}>
                                    <input type="date" style={{ borderRadius: '7px', width: '48%', textAlign: 'center' }} id="datepicker" placeholder="Date" />
                                    <input type="time" style={{ borderRadius: '7px', width: '48%', textAlign: 'center' }} id="timepicker" placeholder="Time" />
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
                <div className="offcanvas offcanvas-end" id="filter-package">
                    <div className="offcanvas-header mb-0">
                        <h3 className="offcanvas-title">Filter Packagee</h3>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div className="offcanvas-body">
                        <button className="remove-btn">Remove all filters</button>
                        <div className="nav">
                            <button className="booking-nav-active">Featured</button>
                            <button>Spa</button>
                            <button>Massage</button>
                            <button>Sonna</button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Booking