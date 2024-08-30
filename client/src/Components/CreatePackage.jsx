import { useState } from "react";
import SideBar from "../Components/SideBar";
import background from "../assets/background.svg";
import leftArrow from "../assets/leftArrow.svg";
import preview from "../assets/preview.svg";
import copy from "../assets/copy.svg";
import imageUpload from "../assets/imageUpload.svg";
import cross from "../assets/cross.svg";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import deleteIcon from "../assets/deleteIcon.svg";
import PackageSideBar from "../Components/PackageSideBar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CreatePackage = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        console.log('Toggle state:', !isChecked);
    };

    return (
        <div style={{ display: 'flex' }}>
            <SideBar></SideBar>
            <img style={{ position: 'absolute', top: 0, zIndex: '-1', width: '100%' }} src={background}></img>
            <div className="create-package" style={{ width: '80%' }}>
                <span className="heading"> <Link to="/package"><img src={leftArrow} /></Link> Create Package</span>
                <div>
                    <div className="left">
                      <PackageSideBar/>
                    </div>

                    <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }} className="right">
                        <div className="header">
                            <div className="left" style={{ display: 'flex' }}>
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
                            </div>

                            <div className="mid">
                                <span><img src={copy} /> Copy Link</span>
                                <span><img src={preview} /> Preview</span>
                            </div>

                            <div className="right">
                                <button className="button">Save Changes</button>
                            </div>
                        </div>
                        <div className="body">
                            <div>
                                <span className="grey">Add this package to
                                    <select className="select">
                                        <option>Spa</option>
                                        <option>Spa</option>
                                    </select>
                                </span>
                            </div>
                            <input className="package-title" type="text" placeholder="Package Title" />
                            <div style={{ display: 'flex', flexDirection: 'column' }} className="image-upload">
                                <img src={imageUpload} />
                                <span style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '20px' }}>Select files</span>
                                <p className="grey">Drop files here or click <span style={{ color: '#00A76F' }}>browse</span> through your machine</p>
                            </div>
                            <div style={{ justifyContent: 'start' }} className="image-select">
                                <img src="https://images.unsplash.com/photo-1723457135240-883758b1bc72?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                                <img src="https://images.unsplash.com/photo-1723457135240-883758b1bc72?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                                <img src="https://images.unsplash.com/photo-1723457135240-883758b1bc72?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                                <img src="https://images.unsplash.com/photo-1723457135240-883758b1bc72?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                            </div>
                            <div style={{ justifyContent: "end" }}>
                                <button style={{ borderRadius: '5px', padding: '0px 10px', margin: '0px 10px' }}>Remove All</button>
                                <button className="button">Upload</button>
                            </div>
                            <div className="grey">What's included</div>
                            <div className="text-section">
                                <div className="heading">
                                    <span style={{ fontSize: '15px' }}>Font</span>
                                    <img src={icon1} />
                                    <img src={icon2} />
                                    <img src={icon3} />
                                    <img src={icon1} />
                                    <img src={icon1} />
                                    <img src={icon1} />
                                </div>

                                <textarea className="text-area" placeholder="Type here"></textarea>
                            </div>
                            <div className="grey">Opening hours</div>
                            <div className="text-section">
                                <div className="heading">
                                    <span style={{ fontSize: '15px' }}>Font</span>
                                    <img src={icon1} />
                                    <img src={icon2} />
                                    <img src={icon3} />
                                    <img src={icon1} />
                                    <img src={icon1} />
                                    <img src={icon1} />
                                </div>

                                <textarea className="text-area" placeholder="Type here"></textarea>
                            </div>
                            <div className="grey">TNC</div>
                            <div className="text-section">
                                <div className="heading">
                                    <span style={{ fontSize: '15px' }}>Font</span>
                                    <img src={icon1} />
                                    <img src={icon2} />
                                    <img src={icon3} />
                                    <img src={icon1} />
                                    <img src={icon1} />
                                    <img src={icon1} />
                                </div>

                                <textarea className="text-area" placeholder="Type here"></textarea>
                            </div>

                            <div className="url">
                                <span className="grey">URL</span>
                                <div>
                                    <input type="url">

                                    </input>
                                    <img src={copy}></img>
                                </div>
                            </div>

                            <div className="grey">Add-on</div>
                            <div className="add-on" style={{justifyContent:'start'}}>
                                <input style={{ margin:'0px 4px'}} type="text"></input>
                                <input style={{ margin:'0px 4px'}} type="text"></input>
                                <img src={deleteIcon}></img>
                            </div>

                            <div className="grey">Duration</div>
                            <div className="add-on" style={{justifyContent:'start'}}>
                                <input style={{ margin:'0px 4px'}} type="text"></input>
                                <select className="select">
                                    <option>minutes</option>
                                </select>
                            </div>

                            <div>
                                <button className="button">Save changes</button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default CreatePackage