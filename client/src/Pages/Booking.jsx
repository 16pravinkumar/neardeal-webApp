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
    const [active, setActive] = useState('All');
    const [loading, setLoading] = useState(false);

    const isActive = (path) => {
        return active === path ? 'btn' : '';
    };

    const handleSubmit = async (filter) => {
        setBookingData([]);
        try {
            setLoading(true);
            const response = await fetch('https://wellness.neardeal.me/WAPI/bookingsTry.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "vendorid": userData.ID,
                    "bookingFilter": filter
                })
            });

            const data = await response.json();
            console.log(data);
            
            setBookingData(data.data);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleSubmit(active);
    }, [active]);

    return (
        <div style={{ display: 'flex' }}>
            <SideBar />
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }} style={{ width: '80%' }}>
                <img style={{ position: 'absolute', top: 0, zIndex: '-1' }} src={background} />
                <div className="container mainSec" id="bookingSec">
                    <h1 className="secHead">Booking</h1>
                    <div className="row mb-4 p-0">
                        <div className="col-lg-6 d-flex">
                            <button type="button" className={`${isActive('All')} btn-outline-secondary border-0 active me-2`} onClick={() => setActive("All")}>All</button>
                            <button type="button" className={`${isActive('Today')} btn-outline-secondary border-0 active me-2`} onClick={() => setActive("Today")}>Today</button>
                            <button type="button" className={`${isActive('Upcoming')} btn-outline-secondary border-0 active me-2`} onClick={() => setActive("Upcoming")}>Upcoming</button>
                            <button type="button" className={`${isActive('Finished')} btn-outline-secondary border-0 active me-2`} onClick={() => setActive("Finished")}>Finished</button>
                            <button type="button" className={`${isActive('Cancelled')} btn-outline-secondary border-0 active me-2`} onClick={() => setActive("Cancelled")}>Cancelled</button>
                        </div>
                        <div className="col-lg-6 d-flex input-group justify-content-end ms-5" style={{ maxWidth: '45%' }}>
                            <input type="text" className="form-control" placeholder="Search..." />
                            <button className="btn btn-outline-secondary me-2 rounded-3" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                            <button data-bs-toggle="offcanvas" data-bs-target="#filter-package" className="btn btn-outline-secondary ms-3 me-0 rounded-3" type="button">Filter Packages</button>
                        </div>
                    </div>
                    {active === 'All' && (
                        <motion.div>
                            <table className="table table-hover mt-5">
                                <tbody>
                                    {bookingData.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="text-center">No booking available</td>
                                        </tr>
                                    ) : (
                                        bookingData.map((data) => (
                                            <tr className="align-middle" key={data.BookingID}>
                                                <td style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                                                    {data.BookingStatus === "Started" ? (
                                                        <>
                                                            <img style={{ width: '30%', margin: 'auto' }} src={started} />
                                                            <span>Started</span>
                                                        </>
                                                    ) : data.BookingStatus === "Absent" ? (
                                                        <>
                                                            <img style={{ width: '41%', margin: 'auto' }} src={dotedCircle} />
                                                            <span>Absent</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <img style={{ width: '41%', margin: 'auto' }} src={tick} />
                                                            <span>Attend</span>
                                                        </>
                                                    )}
                                                </td>
                                                <td>{data.BookingStartDate}</td>
                                                <td>{data.InventoryName}</td>
                                                <td>{data.AssignedTo}</td>
                                                <td className={data.PaymentStatus === "Paid" ? "text-success" : "text-danger"}>
                                                    {data.PaymentStatus}
                                                </td>
                                                <td>
                                                    <button className="btn btn-link"><i className="bi bi-pencil"></i></button>
                                                </td>
                                                <td>
                                                    <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                                                        <i className="fa fa-pencil p-0 me-3" style={{ fontSize: 'large' }}></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </motion.div>
                    )}

                    {active === 'Today' && (
                        <motion.div>
                            <table className="table table-hover mt-5">
                                <tbody>
                                    {bookingData.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="text-center">No booking available</td>
                                        </tr>
                                    ) : (
                                        bookingData.map((data) => (
                                            <tr className="align-middle" key={data.BookingID}>
                                                <td style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                                                    {data.BookingStatus === "Started" ? (
                                                        <>
                                                            <img style={{ width: '41%', margin: 'auto' }} src={started} />
                                                            <span>Started</span>
                                                        </>
                                                    ) : data.BookingStatus === "Absent" ? (
                                                        <>
                                                            <img style={{ width: '41%', margin: 'auto' }} src={dotedCircle} />
                                                            <span>Absent</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <img style={{ width: '41%', margin: 'auto' }} src={tick} />
                                                            <span>Attend</span>
                                                        </>
                                                    )}
                                                </td>
                                                <td>{data.BookingStartDate}</td>
                                                <td>{data.InventoryName}</td>
                                                <td>{data.AssignedTo}</td>
                                                <td className={data.PaymentStatus === "Paid" ? "text-success" : "text-danger"}>
                                                    {data.PaymentStatus}
                                                </td>
                                                <td>
                                                    <button className="btn btn-link"><i className="bi bi-pencil"></i></button>
                                                </td>
                                                <td>
                                                    <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                                                        <i className="fa fa-pencil p-0 me-3" style={{ fontSize: 'large' }}></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </motion.div>
                    )}

                    {active === 'Upcoming' && (
                        <motion.div>
                            <table className="table table-hover mt-5">
                                <tbody>
                                    {bookingData.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="text-center">No booking available</td>
                                        </tr>
                                    ) : (
                                        bookingData.map((data) => (
                                            <tr className="align-middle" key={data.BookingID}>
                                                <td style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                                                    {data.BookingStatus === "Started" ? (
                                                        <>
                                                            <img style={{ width: '41%', margin: 'auto' }} src={started} />
                                                            <span>Started</span>
                                                        </>
                                                    ) : data.BookingStatus === "Absent" ? (
                                                        <>
                                                            <img style={{ width: '41%', margin: 'auto' }} src={dotedCircle} />
                                                            <span>Absent</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <img style={{ width: '41%', margin: 'auto' }} src={tick} />
                                                            <span>Attend</span>
                                                        </>
                                                    )}
                                                </td>
                                                <td>{data.BookingStartDate}</td>
                                                <td>{data.InventoryName}</td>
                                                <td>{data.AssignedTo}</td>
                                                <td className={data.PaymentStatus === "Paid" ? "text-success" : "text-danger"}>
                                                    {data.PaymentStatus}
                                                </td>
                                                <td>
                                                    <button className="btn btn-link"><i className="bi bi-pencil"></i></button>
                                                </td>
                                                <td>
                                                    <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                                                        <i className="fa fa-pencil p-0 me-3" style={{ fontSize: 'large' }}></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </motion.div>
                    )}

                    {active === 'Finished' && (
                        <motion.div>
                            <table className="table table-hover mt-5">
                                <tbody>
                                    {bookingData.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="text-center">No booking available</td>
                                        </tr>
                                    ) : (
                                        bookingData.map((data) => (
                                            <tr className="align-middle" key={data.BookingID}>
                                                <td style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                                                    {data.BookingStatus === "Started" ? (
                                                        <>
                                                            <img style={{ width: '41%', margin: 'auto' }} src={started} />
                                                            <span>Started</span>
                                                        </>
                                                    ) : data.BookingStatus === "Absent" ? (
                                                        <>
                                                            <img style={{ width: '41%', margin: 'auto' }} src={dotedCircle} />
                                                            <span>Absent</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <img style={{ width: '41%', margin: 'auto' }} src={tick} />
                                                            <span>Attend</span>
                                                        </>
                                                    )}
                                                </td>
                                                <td>{data.BookingStartDate}</td>
                                                <td>{data.InventoryName}</td>
                                                <td>{data.AssignedTo}</td>
                                                <td className={data.PaymentStatus === "Paid" ? "text-success" : "text-danger"}>
                                                    {data.PaymentStatus}
                                                </td>
                                                <td>
                                                    <button className="btn btn-link"><i className="bi bi-pencil"></i></button>
                                                </td>
                                                <td>
                                                    <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                                                        <i className="fa fa-pencil p-0 me-3" style={{ fontSize: 'large' }}></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </motion.div>
                    )}

                    {active === 'Cancelled' && (
                        <motion.div>
                            <table className="table table-hover mt-5">
                                <tbody>
                                    {bookingData.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="text-center">No booking available</td>
                                        </tr>
                                    ) : (
                                        bookingData.map((data) => (
                                            <tr className="align-middle" key={data.BookingID}>
                                                <td style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                                                    {data.BookingStatus === "Started" ? (
                                                        <>
                                                            <img style={{ width: '41%', margin: 'auto' }} src={started} />
                                                            <span>Started</span>
                                                        </>
                                                    ) : data.BookingStatus === "Absent" ? (
                                                        <>
                                                            <img style={{ width: '41%', margin: 'auto' }} src={dotedCircle} />
                                                            <span>Absent</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <img style={{ width: '41%', margin: 'auto' }} src={tick} />
                                                            <span>Attend</span>
                                                        </>
                                                    )}
                                                </td>
                                                <td>{data.BookingStartDate}</td>
                                                <td>{data.InventoryName}</td>
                                                <td>{data.AssignedTo}</td>
                                                <td className={data.PaymentStatus === "Paid" ? "text-success" : "text-danger"}>
                                                    {data.PaymentStatus}
                                                </td>
                                                <td>
                                                    <button className="btn btn-link"><i className="bi bi-pencil"></i></button>
                                                </td>
                                                <td>
                                                    <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                                                        <i className="fa fa-pencil p-0 me-3" style={{ fontSize: 'large' }}></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </motion.div>
                    )}

                    <nav>
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" href="#">Previous</a>
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
            </motion.div>
        </div>
    );
};

export default Booking;
