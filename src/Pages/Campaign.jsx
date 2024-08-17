import { useState } from "react";
import "../App.css";
import SideBar from "../Components/SideBar";
import background from "../assets/background.svg";
import edit from "../assets/edit.svg";

const Campaign = () => {
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
                    <h1 className="secHead">Campaign</h1>
                    <div className="row mb-4 p-0">
                        <div className="col-lg-6 d-flex">
                            <button type="button" className="btn btn-outline-secondary border-0 active me-2">Ads</button>
                            <button type="button" className="btn btn-outline-secondary border-0 me-2">NearReel</button>
                            <button type="button" className="btn btn-outline-secondary border-0 me-2">Coupon</button>
                            <button type="button" className="btn btn-outline-secondary border-0 me-2">Discounts</button>
                        </div>
                        <div className="col-lg-6 d-flex input-group justify-content-end ms-5" style={{ maxWidth: '45%' }}>
                            <input type="text" className="form-control" placeholder="Search..." />
                            <button className="btn btn-outline-secondary me-2 rounded-3" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>

                    <div className="campaign-ads">
                        <div>
                            <span>Activate homepage ads banner</span>
                            <span style={{fontSize:'14px'}} className="grey">Total Cost: $100</span>
                        </div>
                        <div className="edit">
                            <div style={{flexDirection:'row', alignItems:'center'}}>
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
                                <span style={{margin:'0px 10px'}}>Active</span>
                            </div>

                            <img src={edit} />
                        </div>
                    </div>

                    <div style={{ margin: '10px 0px' }} className="campaign-blog">
                        <div>
                            <span>Apply NearDeal Blog page</span>
                            <p style={{fontSize:'14px'}} className="grey">Our Neardeal Staff will have a trip to your store and experience your service. After that we will write an official review to help promote your store. You may have a chance of winning the Neardeal certified badge if we think your experience meet our standard.</p>
                        </div>
                        <div className="btn">
                            <button className="button">
                                Email NearDeal
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Campaign