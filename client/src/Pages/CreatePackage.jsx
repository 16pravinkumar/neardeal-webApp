// import { useState } from "react";
// import SideBar from "../Components/SideBar";
// import background from "../assets/background.svg";
// import leftArrow from "../assets/leftArrow.svg";
// import preview from "../assets/preview.svg";
// import copy from "../assets/copy.svg";
// import imageUpload from "../assets/imageUpload.svg";
// import cross from "../assets/cross.svg";
// import icon1 from "../assets/icon1.svg";
// import icon2 from "../assets/icon2.svg";
// import icon3 from "../assets/icon3.svg";
// import deleteIcon from "../assets/deleteIcon.svg";
// import PackageSideBar from "../Components/PackageSideBar";

// const CreatePackage = () => {

//     const [isChecked, setIsChecked] = useState(false);

//     const handleToggle = () => {
//         setIsChecked(!isChecked);
//         console.log('Toggle state:', !isChecked);
//     };

//     return (
//         <div style={{ display: 'flex' }}>
//             <SideBar></SideBar>
//             <img style={{ position: 'absolute', top: 0, zIndex: '-1', width: '100%' }} src={background}></img>
//             <div className="create-package" style={{ width: '80%' }}>
//                 <span className="heading"> <img src={leftArrow} /> Create Package</span>
//                 <div>
//                     <div className="left">
//                       <PackageSideBar/>
//                     </div>

//                     <div className="right">
//                         <div className="header">
//                             <div className="left" style={{ display: 'flex' }}>
//                                 <div className="toggle-switch">
//                                     <input
//                                         type="checkbox"
//                                         id="toggle"
//                                         className="toggle-checkbox"
//                                         checked={isChecked}
//                                         onChange={handleToggle}
//                                     />
//                                     <label htmlFor="toggle" className="toggle-label"></label>
//                                     {/* <span>Publish</span> */}

//                                 </div>
//                             </div>

//                             <div className="mid">
//                                 <span><img src={copy} /> Copy Link</span>
//                                 <span><img src={preview} /> Preview</span>
//                             </div>

//                             <div className="right">
//                                 <button className="button">Save Changes</button>
//                             </div>
//                         </div>
//                         <div className="body">
//                             <div>
//                                 <span className="grey">Add this package to
//                                     <select className="select">
//                                         <option>Spa</option>
//                                         <option>Spa</option>
//                                     </select>
//                                 </span>
//                             </div>
//                             <input className="package-title" type="text" placeholder="Package Title" />
//                             <div style={{ display: 'flex', flexDirection: 'column' }} className="image-upload">
//                                 <img src={imageUpload} />
//                                 <span style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '20px' }}>Select files</span>
//                                 <p className="grey">Drop files here or click <span style={{ color: '#00A76F' }}>browse</span> through your machine</p>
//                             </div>
//                             <div style={{ justifyContent: 'start' }} className="image-select">
//                                 <img src="https://images.unsplash.com/photo-1723457135240-883758b1bc72?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
//                                 <img src="https://images.unsplash.com/photo-1723457135240-883758b1bc72?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
//                                 <img src="https://images.unsplash.com/photo-1723457135240-883758b1bc72?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
//                                 <img src="https://images.unsplash.com/photo-1723457135240-883758b1bc72?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
//                             </div>
//                             <div style={{ justifyContent: "end" }}>
//                                 <button style={{ borderRadius: '5px', padding: '0px 10px', margin: '0px 10px' }}>Remove All</button>
//                                 <button className="button">Upload</button>
//                             </div>
//                             <div className="grey">What's included</div>
//                             <div className="text-section">
//                                 <div className="heading">
//                                     <span style={{ fontSize: '15px' }}>Font</span>
//                                     <img src={icon1} />
//                                     <img src={icon2} />
//                                     <img src={icon3} />
//                                     <img src={icon1} />
//                                     <img src={icon1} />
//                                     <img src={icon1} />
//                                 </div>

//                                 <textarea className="text-area" placeholder="Type here"></textarea>
//                             </div>
//                             <div className="grey">Opening hours</div>
//                             <div className="text-section">
//                                 <div className="heading">
//                                     <span style={{ fontSize: '15px' }}>Font</span>
//                                     <img src={icon1} />
//                                     <img src={icon2} />
//                                     <img src={icon3} />
//                                     <img src={icon1} />
//                                     <img src={icon1} />
//                                     <img src={icon1} />
//                                 </div>

//                                 <textarea className="text-area" placeholder="Type here"></textarea>
//                             </div>
//                             <div className="grey">TNC</div>
//                             <div className="text-section">
//                                 <div className="heading">
//                                     <span style={{ fontSize: '15px' }}>Font</span>
//                                     <img src={icon1} />
//                                     <img src={icon2} />
//                                     <img src={icon3} />
//                                     <img src={icon1} />
//                                     <img src={icon1} />
//                                     <img src={icon1} />
//                                 </div>

//                                 <textarea className="text-area" placeholder="Type here"></textarea>
//                             </div>

//                             <div className="url">
//                                 <span className="grey">URL</span>
//                                 <div>
//                                     <input type="url">

//                                     </input>
//                                     <img src={copy}></img>
//                                 </div>
//                             </div>

//                             <div className="grey">Add-on</div>
//                             <div className="add-on" style={{justifyContent:'start'}}>
//                                 <input style={{ margin:'0px 4px'}} type="text"></input>
//                                 <input style={{ margin:'0px 4px'}} type="text"></input>
//                                 <img src={deleteIcon}></img>
//                             </div>

//                             <div className="grey">Duration</div>
//                             <div className="add-on" style={{justifyContent:'start'}}>
//                                 <input style={{ margin:'0px 4px'}} type="text"></input>
//                                 <select className="select">
//                                     <option>minutes</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <button className="button">Save changes</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default CreatePackage




import { useState } from "react";
import "../App.css";
import SideBar from "../Components/SideBar";
import background from "../assets/background.svg";
import CampaignAds from "../Components/CampaignAds";
import CampaignNearReel from "../Components/CampaignNearReel";
import CampaignCoupon from "../Components/CampaignCoupon";
import CampaignDiscounts from "../Components/CampaignDiscounts";
import plus from "../assets/plus.svg";
import edit1 from '../assets/edit1.svg'
import eye from '../assets/eye.svg'
import share from '../assets/share.svg'
import eye1 from '../assets/eye1.svg'
import likes from '../assets/likes.svg'
import addFile from "../assets/addFile.svg";
import more from "../assets/more.svg";
import play from "../assets/play.svg";

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
            <div style={{ width: '80%' }}>
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
                            <button>
                                <img src={plus} />
                                <span>Add Package</span>
                            </button>
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
                            <button>
                                <img src={plus} />
                                <span>Add Package</span>
                            </button>
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
            </div>
        </div>
    )
}

export default CreatePackage