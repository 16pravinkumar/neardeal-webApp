import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import SideBar from "./SideBar";
import background from "../assets/background.svg";
import leftArrow from "../assets/leftArrow.svg";
import preview from "../assets/preview.svg";
import copy from "../assets/copy.svg";
import imageUpload from "../assets/imageUpload.svg";
import deleteIcon from "../assets/deleteIcon.svg";
import crossIcon from "../assets/cross.svg";
import dot from "../assets/dot.svg"
import edit from "../assets/edit.svg"
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CreatePackage = () => {
    const { id } = useParams();

    const jwtUserToken = Cookies.get("user_token");
    const userData = JSON.parse(jwtUserToken);


    const [inventoryData, setInventoryData] = useState([]);

    const fetchData = async () => {

        const userDataa = JSON.parse(jwtUserToken);
        try {
            var payload = {
                vendorId: userDataa.ID,
                invId: id
            }

            // Fetch user data
            const response = await fetch('https://wellness.neardeal.me/WAPI/fetchInvDetailsMW.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            const userData = await response.json();

            setInventoryData(userData.data)

            console.log(inventoryData[0]); // Log the user data
            // setUserData(userData);
            // console.log("User Data:", userData); // Log the user data

        } catch (error) {
            console.error('Failed to parse JSON from cookie or fetch user data:', error);
        }

    };

    useEffect(() => {

        fetchData();

    }, []);

    const [active, setActive] = useState('setup');
    const isActive = (path) => {
        return active === path ? 'btn' : ''
    };
    const [isChecked, setIsChecked] = useState(false);
    const [images, setImages] = useState([]);
    const [editorStates, setEditorStates] = useState({
        included: { content: '', operations: [] },
        openingHours: { content: '', operations: [] },
        tnc: { content: '', operations: [] }
    });
    const [packageTitle, setPackageTitle] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Spa');
    const [url, setUrl] = useState('');
    const [duration, setDuration] = useState('');
    const quillRefs = useRef({ included: null, openingHours: null, tnc: null });


    const handleToggle = () => {
        setIsChecked(!isChecked);
        console.log('Toggle state:', !isChecked);
    };

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.map(file => URL.createObjectURL(file));
        setImages(prevImages => [...prevImages, ...newImages]);
    };

    const handleRemoveImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'packageTitle':
                setPackageTitle(value);
                break;
            case 'url':
                setUrl(value);
                break;
            case 'duration':
                setDuration(value);
                break;
            default:
                break;
        }
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };


    const handleSaveChanges = async () => {
        console.log('Package Title:', packageTitle);
        console.log('Category:', selectedCategory);
        console.log('Included Content:', editorStates.included.content);
        console.log('Opening Hours Content:', editorStates.openingHours.content);
        console.log('TNC Content:', editorStates.tnc.content);
        console.log('URL:', url);
        console.log('Add-ons:', addons);
        console.log('Duration:', duration);
        console.log('Images:', images);
        console.log('Is Checked:', isChecked);
        console.log('Editor States:', editorStates);
        try {
            const response = await fetch('https://wellness.neardeal.me/WAPI/createPackageMW.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "vendorId": userData.ID,
                    "invName": packageTitle,
                    "invCat": selectedCategory,
                    "whatIncluded": editorStates.included.content,
                    "TnC": editorStates.tnc.content,
                    "duration": duration,
                    "status": isChecked,
                    "price": 999,
                    "currency": "HKD",
                    "invImgFileName": "PizzaBOGO.jpg",
                    "invImage": ""
                })
            });

            const data = await response.json();
            console.log(data);
            // You may want to refresh the booking data after editing
            // handleSubmit(active);
            toast.success("Package created successfully");
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred');
        }
    };

    return (
        <div style={{ display: 'flex' }}>
            <SideBar />
            <img style={{ position: 'absolute', top: 0, zIndex: '-1', width: '100%' }} src={background} alt="background" />
            <div className="create-package" style={{ width: '80%' }}>
                <span className="heading">
                    <Link to="/package"><img src={leftArrow} alt="left arrow" /></Link> Edit Package
                </span>

                <div>
                    <div className="left">
                        <button className={`${isActive('setup')} btn-outline-secondary border-0 active me-2`} onClick={() => setActive('setup')} style={{ textDecoration: 'none' }}>Package Setup</button>
                    </div>
                   
                    {
                        active === 'setup'
                        &&

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="right">
                            <div className="header">
                                <div className="left" style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div className="toggle-switch">
                                        <input
                                            type="checkbox"
                                            id="toggle"
                                            className="toggle-checkbox"
                                            onChange={handleToggle}
                                            checked={inventoryData[0].Status === 1? true : false}
                                        />
                                        <label htmlFor="toggle" className="toggle-label"></label>
                                    </div>
                                    <span>Publish</span>
                                </div>
                                <div className="right">
                                    <button className="button" onClick={handleSaveChanges}>Save Changes</button>
                                </div>
                            </div>
                            <div className="body">
                                <div>
                                    <span className="grey">Add this package to
                                        <select className="select" value={selectedCategory} onChange={handleCategoryChange}>
                                            <option>Spa</option>
                                        </select>
                                    </span>
                                </div>
                                <input
                                    name="packageTitle"
                                    className="package-title"
                                    type="text"
                                    placeholder={inventoryData[0].InventoryName}
                                    value={packageTitle}
                                    onChange={handleInputChange}
                                />
                                <div className="image-upload" style={{ cursor: 'pointer', textAlign: 'center' }}>
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        style={{ display: 'none' }}
                                    />
                                    <span style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '20px' }}>Select files</span>
                                    <p className="grey">Drop files here or click <span style={{ color: '#00A76F' }}>browse</span> through your machine</p>
                                </div>
                                <div className="image-select" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {images.map((image, index) => (
                                        <div key={index} style={{ position: 'relative', margin: '10px' }}>
                                            <img src={image} alt={`uploaded ${index}`} style={{ objectFit: 'cover' }} />
                                            <button onClick={() => handleRemoveImage(index)} style={{
                                                position: 'absolute',
                                                top: '5px',
                                                right: '5px',
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer'
                                            }}>
                                                <img src={crossIcon} alt="remove" style={{ width: '20px', height: '20px' }} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div className="grey">What's included</div>
                                <div className="text-section">
                                    <ReactQuill
                                        value={editorStates.included.content}
                                        onChange={(content, delta, source) => {
                                            setEditorStates(prevStates => ({
                                                ...prevStates,
                                                included: { content, operations: prevStates.included.operations }
                                            }));
                                        }}
                                        className="text-area"
                                        modules={CreatePackage.modules}
                                        formats={CreatePackage.formats}
                                        placeholder="Type here"
                                        ref={(el) => {
                                            if (el) {
                                                quillRefs.current.included = el.getEditor();
                                            }
                                        }}
                                    />
                                </div>

                                <div className="grey">TNC</div>
                                <div className="text-section">
                                    <ReactQuill
                                        value={editorStates.tnc.content}
                                        onChange={(content, delta, source) => {
                                            setEditorStates(prevStates => ({
                                                ...prevStates,
                                                tnc: { content, operations: prevStates.tnc.operations }
                                            }));
                                        }}
                                        className="text-area"
                                        modules={CreatePackage.modules}
                                        formats={CreatePackage.formats}
                                        placeholder={inventoryData[0].Tnc}
                                        ref={(el) => {
                                            if (el) {
                                                quillRefs.current.tnc = el.getEditor();
                                            }
                                        }}
                                    />
                                </div>

                                <div className="grey">Duration</div>
                                <div className="add-on" style={{ justifyContent: 'start' }}>
                                    <input
                                        style={{ margin: '0px 4px' }}
                                        type="text"
                                        name="duration"
                                        placeholder={inventoryData[0].Duration}
                                        value={inventoryData.duration || ''} // Assuming duration is part of inventory data
                                        onChange={handleInputChange}
                                    />
                                    <select className="select" value="minutes" disabled>
                                        <option>minutes</option>
                                    </select>
                                </div>
                                <div>
                                    <button className="button" onClick={handleSaveChanges}>Save changes</button>
                                </div>
                            </div>
                        </motion.div>

                    }
                </div>
            </div>
        </div>
    );
};

export default CreatePackage;
