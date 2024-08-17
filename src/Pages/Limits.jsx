import { useState } from "react";
import SideBar from "../Components/SideBar";
import background from "../assets/background.svg";
import leftArrow from "../assets/leftArrow.svg";
import edit from "../assets/edit.svg";
import dot from "../assets/dot.svg";
import PackageSideBar from "../Components/PackageSideBar";

const Limits = () => {

    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);

    const handleToggle1 = () => {
        setIsChecked1(!isChecked1);
        console.log('Toggle state:', !isChecked1);
    };

    const handleToggle2 = () => {
        setIsChecked2(!isChecked2);
        console.log('Toggle state:', !isChecked2);
    };

    const handleToggle3 = () => {
        setIsChecked3(!isChecked3);
        console.log('Toggle state:', !isChecked3);
    };

    return (
        <div style={{ display: 'flex' }}>
            <SideBar></SideBar>
            <img style={{ position: 'absolute', top: 0, zIndex: '-1', width: '100%' }} src={background}></img>
            <div className="limits" style={{ width: '80%' }}>
                <span className="heading"> <img src={leftArrow} /> Create Package</span>
                <div>
                    <div className="left">
                        <PackageSideBar/>
                    </div>

                    <div className="right">
                        <div className="header">
                            <span>Changes will be autosaved</span>
                        </div>
                        <div className="body">
                            <div>
                                <div className="left">
                                    <span className="grey">Before Event</span>
                                    <select className="select">
                                        <option>No Buffer</option>
                                    </select>

                                    <span className="grey">Minimum Notice</span>
                                    <select className="select">
                                        <option>3 hour</option>
                                    </select>
                                </div>
                                <div className="right">
                                    <span className="grey">After Event</span>
                                    <select className="select">
                                        <option>3 hour</option>
                                    </select>

                                    <div className="grey" style={{ fontSize: '13px' }}>
                                        For example, if the potential attendee wants to book the meeting with you tomorrow at 5:00 PM and you have set a minimum notice of 2 hours, they need to submit the booking by 3:00 PM at the latest on the same day.
                                    </div>
                                </div>
                            </div>

                            <div style={{justifyContent:'start', alignItems:'center'}}>
                                <div className="toggle-switch">
                                    <input
                                        type="checkbox"
                                        id="toggle1"
                                        className="toggle-checkbox"
                                        checked={isChecked1}
                                        onChange={handleToggle1}
                                    />
                                    <label htmlFor="toggle1" className="toggle-label"></label>
                                    {/* <span>Publish</span> */}

                                </div>

                                <div style={{display:'flex', flexDirection:'column', margin:'0px 10px'}}>
                                    <span>Booking frequency</span>
                                    <div style={{justifyContent:'start'}}>
                                        <input style={{width:'10%', textAlign:'center', borderRadius:'5px', border:'1px solid #919EAB'}} type="text" value={1}></input>
                                        <select style={{margin:'0px 10px'}} className="select">
                                            <option>per day</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <hr/>

                            <div style={{justifyContent:'start', alignItems:'center'}}>
                                <div className="toggle-switch">
                                    <input
                                        type="checkbox"
                                        id="toggle2"
                                        className="toggle-checkbox"
                                        checked={isChecked2}
                                        onChange={handleToggle2}
                                    />
                                    <label htmlFor="toggle2" className="toggle-label"></label>
                                    {/* <span>Publish</span> */}

                                </div>

                                <div style={{display:'flex', flexDirection:'column', margin:'auto 10px'}}>
                                    Limit book only first slot
                                </div>
                            </div>

                            <hr/>

                            <div style={{justifyContent:'start', alignItems:'center'}}>
                                <div className="toggle-switch">
                                    <input
                                        type="checkbox"
                                        id="toggle3"
                                        className="toggle-checkbox"
                                        checked={isChecked3}
                                        onChange={handleToggle3}
                                    />
                                    <label htmlFor="toggle3" className="toggle-label"></label>
                                    {/* <span>Publish</span> */}

                                </div>

                                <div style={{display:'flex', flexDirection:'column', margin:'0px 10px'}}>
                                    <span>Booking frequency</span>
                                    <div style={{justifyContent:'start'}}>
                                        <input style={{width:'10%', textAlign:'center', borderRadius:'5px', border:'1px solid #919EAB'}} type="text" value={1}></input>
                                        <select style={{margin:'0px 10px'}} className="select">
                                            <option>per day</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <hr/>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Limits