import { useState } from "react";
import "../App.css";
import SideBar from "../Components/SideBar";
import background from "../assets/background.svg";
import { Link } from "react-router-dom";
import plus from "../assets/plus.svg";
import edit1 from '../assets/edit1.svg'
import eye from '../assets/eye.svg'
import share from '../assets/share.svg'
import eye1 from '../assets/eye1.svg'
import likes from '../assets/likes.svg'
import addFile from "../assets/addFile.svg";
import more from "../assets/more.svg";
import play from "../assets/play.svg";
import { motion } from "framer-motion";

const CreatePackage = () => {

    const [active, setActive] = useState('ads');
    const isActive = (path) => {
        return active === path ? 'btn' : ''
    };

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
                    <h1 className="secHead">Package</h1>
                    <div className="row mb-4 p-0">
                        <div className="col-lg-6 d-flex">
                            <button onClick={() => setActive('ads')} type="button" className={`${isActive('ads')} btn-outline-secondary border-0 active me-2`}>All</button>
                            <button onClick={() => setActive('nearreel')} type="button" className={`${isActive('nearreel')} btn-outline-secondary border-0 active me-2`}>Spa</button>
                            <button onClick={() => setActive('coupon')} type="button" className={`${isActive('coupon')} btn-outline-secondary border-0 active me-2`}>Massage</button>
                            <button onClick={() => setActive('discounts')} type="button" className={`${isActive('discounts')} btn-outline-secondary border-0 active me-2`}>Status</button>
                            <img className={`border-0 me-2`} src={addFile} />
                        </div>
                        <div className="col-lg-6 d-flex input-group justify-content-end ms-5" style={{ maxWidth: '45%' }}>
                            <input type="text" className="form-control" placeholder="Search..." />
                            <button className="btn btn-outline-secondary me-2 rounded-3" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div className="package-body">
                        <div className="spa">
                            <div style={{ width: '8%' }}>
                                <img src={play} />
                                <span style={{ fontWeight: 'bold' }}>Spa</span>
                                <img src={more} />
                            </div>
                            <Link to='/create-package'>
                                <button>
                                    <img src={plus} />
                                    <span>Add Package</span>
                                </button>
                            </Link>
                        </div>

                        <div className='item'>
                            <div className='left' style={{ width: '84%' }}>
                                <img src='https://avatars.githubusercontent.com/u/97161064?v=4' />
                                <div>
                                    <span>Largest spa in Hong Kong</span>
                                    <div>
                                        <div><img style={{ width: 'max-content' }} src={eye1} /><span style={{ color: 'grey' }}>1000 views</span></div>
                                        <div style={{ marginLeft: '10px' }}><img style={{ width: 'max-content' }} src={likes} /><span style={{ color: 'grey' }}>1000 likes</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className='right' style={{ width: '20%', justifyContent: 'space-between' }}>
                                <div>
                                    <div className="toggle-switch">
                                        <input
                                            type="checkbox"
                                            id="toggle"
                                            className="toggle-checkbox"
                                            checked={isChecked}
                                            onChange={handleToggle}
                                        />
                                        <label htmlFor="toggle" className="toggle-label"></label>
                                        {/* <span>Publish</span> */}
                                    </div>

                                    <span>Publish</span>
                                </div>

                                <div>
                                    <img width={25} src={share} />
                                    <img width={25} src={eye} />
                                    <img width={25} src={edit1} />
                                </div>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='left' style={{ width: '84%' }}>
                                <img src='https://avatars.githubusercontent.com/u/97161064?v=4' />
                                <div>
                                    <span>Largest spa in Hong Kong</span>
                                    <div>
                                        <div><img style={{ width: 'max-content' }} src={eye1} /><span style={{ color: 'grey' }}>1000 views</span></div>
                                        <div style={{ marginLeft: '10px' }}><img style={{ width: 'max-content' }} src={likes} /><span style={{ color: 'grey' }}>1000 likes</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className='right' style={{ width: '20%', justifyContent: 'space-between' }}>
                                <div>
                                    <div className="toggle-switch">
                                        <input
                                            type="checkbox"
                                            id="toggle"
                                            className="toggle-checkbox"
                                            checked={isChecked}
                                            onChange={handleToggle}
                                        />
                                        <label htmlFor="toggle" className="toggle-label"></label>
                                        {/* <span>Publish</span> */}
                                    </div>

                                    <span>Publish</span>
                                </div>

                                <div>
                                    <img width={25} src={share} />
                                    <img width={25} src={eye} />
                                    <img width={25} src={edit1} />
                                </div>
                            </div>
                        </div>

                        <div className="spa">
                            <div style={{ width: '10%' }}>
                                <img src={play} />
                                <span style={{ fontWeight: 'bold' }}>Massage</span>
                                <img src={more} />
                            </div>
                            <Link to='/create-package'>
                                <button>
                                    <img src={plus} />
                                    <span>Add Package</span>
                                </button>
                            </Link>
                        </div>

                        <div className='item'>
                            <div className='left' style={{ width: '84%' }}>
                                <img src='https://avatars.githubusercontent.com/u/97161064?v=4' />
                                <div>
                                    <span>Largest spa in Hong Kong</span>
                                    <div>
                                        <div><img style={{ width: 'max-content' }} src={eye1} /><span style={{ color: 'grey' }}>1000 views</span></div>
                                        <div style={{ marginLeft: '10px' }}><img style={{ width: 'max-content' }} src={likes} /><span style={{ color: 'grey' }}>1000 likes</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className='right' style={{ width: '20%', justifyContent: 'space-between' }}>
                                <div>
                                    <div className="toggle-switch">
                                        <input
                                            type="checkbox"
                                            id="toggle"
                                            className="toggle-checkbox"
                                            checked={isChecked}
                                            onChange={handleToggle}
                                        />
                                        <label htmlFor="toggle" className="toggle-label"></label>
                                        {/* <span>Publish</span> */}
                                    </div>

                                    <span>Publish</span>
                                </div>

                                <div>
                                    <img width={25} src={share} />
                                    <img width={25} src={eye} />
                                    <img width={25} src={edit1} />
                                </div>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='left' style={{ width: '84%' }}>
                                <img src='https://avatars.githubusercontent.com/u/97161064?v=4' />
                                <div>
                                    <span>Largest spa in Hong Kong</span>
                                    <div>
                                        <div><img style={{ width: 'max-content' }} src={eye1} /><span style={{ color: 'grey' }}>1000 views</span></div>
                                        <div style={{ marginLeft: '10px' }}><img style={{ width: 'max-content' }} src={likes} /><span style={{ color: 'grey' }}>1000 likes</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className='right' style={{ width: '20%', justifyContent: 'space-between' }}>
                                <div>
                                    <div className="toggle-switch">
                                        <input
                                            type="checkbox"
                                            id="toggle"
                                            className="toggle-checkbox"
                                            checked={isChecked}
                                            onChange={handleToggle}
                                        />
                                        <label htmlFor="toggle" className="toggle-label"></label>
                                        {/* <span>Publish</span> */}
                                    </div>

                                    <span>Publish</span>
                                </div>

                                <div>
                                    <img width={25} src={share} />
                                    <img width={25} src={eye} />
                                    <img width={25} src={edit1} />
                                </div>
                            </div>
                        </div>

                        <div className="spa">
                            <div style={{ width: '10%' }}>
                                <img src={play} />
                                <span style={{ fontWeight: 'bold' }}>Sauna</span>
                                <img src={more} />
                            </div>
                            <Link to='/create-package'>
                                <button>
                                    <img src={plus} />
                                    <span>Add Package</span>
                                </button>
                            </Link>
                        </div>

                        <div className='item'>
                            <div className='left' style={{ width: '84%' }}>
                                <img src='https://avatars.githubusercontent.com/u/97161064?v=4' />
                                <div>
                                    <span>Largest spa in Hong Kong</span>
                                    <div>
                                        <div><img style={{ width: 'max-content' }} src={eye1} /><span style={{ color: 'grey' }}>1000 views</span></div>
                                        <div style={{ marginLeft: '10px' }}><img style={{ width: 'max-content' }} src={likes} /><span style={{ color: 'grey' }}>1000 likes</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className='right' style={{ width: '20%', justifyContent: 'space-between' }}>
                                <div>
                                    <div className="toggle-switch">
                                        <input
                                            type="checkbox"
                                            id="toggle"
                                            className="toggle-checkbox"
                                            checked={isChecked}
                                            onChange={handleToggle}
                                        />
                                        <label htmlFor="toggle" className="toggle-label"></label>
                                        {/* <span>Publish</span> */}
                                    </div>

                                    <span>Publish</span>
                                </div>

                                <div>
                                    <img width={25} src={share} />
                                    <img width={25} src={eye} />
                                    <img width={25} src={edit1} />
                                </div>
                            </div>
                        </div>
                    </div>



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

export default CreatePackage