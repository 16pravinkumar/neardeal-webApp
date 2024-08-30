import { useState } from "react";
import SideBar from "../Components/SideBar";
import background from "../assets/background.svg";
import leftArrow from "../assets/leftArrow.svg";
import edit from "../assets/edit.svg";
import dot from "../assets/dot.svg";
import PackageSideBar from "../Components/PackageSideBar";
import { motion } from "framer-motion";

const Availability = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        console.log('Toggle state:', !isChecked);
    };

    return (
        <div style={{ display: 'flex' }}>
            <SideBar></SideBar>
            <img style={{ position: 'absolute', top: 0, zIndex: '-1', width: '100%' }} src={background}></img>
            <div className="avalibility" style={{ width: '80%' }}>
                <span className="heading"> <img src={leftArrow} /> Create Package</span>
                <div>
                    <div className="left">
                       <PackageSideBar/>
                    </div>

                    <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }} className="right">
                        <div className="header">
                            <span>Changes will be autosaved</span>
                        </div>
                        <div className="body">
                            <div>
                                <span>Regular Time</span>
                                <button className="button">
                                    Create New Present
                                </button>
                            </div>

                            <div>
                                <div>
                                    <img src={dot}></img>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span>Working hours</span>
                                        <span className="grey">Mon - sat, 9:00 AM - 1:00 PM</span>
                                        <span className="grey">Mon - sat, 3:00 AM - 8:45 PM</span>
                                        <span className="grey">Sun,</span>
                                    </div>
                                </div>
                                <img src={edit}></img>
                            </div>
                            <hr />

                            <div>
                                <span>Date override</span>
                                <button className="button">
                                    Create New Present
                                </button>
                            </div>



                            <div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span>Friday, June 21</span>
                                    <span className="grey">12:00 PM - 11:00 PM</span>
                                </div>
                                <img src={edit}></img>
                            </div>
                            <hr />

                            <div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span>Friday, June 28</span>
                                    <span className="grey">Unavailable</span>
                                </div>
                                <img src={edit}></img>
                            </div>

                            <hr />
                        </div>



                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Availability