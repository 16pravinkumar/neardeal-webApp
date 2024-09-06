import React, { useState, useRef, useCallback } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's styles
import SideBar from "./SideBar";
import background from "../assets/background.svg";
import leftArrow from "../assets/leftArrow.svg";
import preview from "../assets/preview.svg";
import copy from "../assets/copy.svg";
import imageUpload from "../assets/imageUpload.svg";
import deleteIcon from "../assets/deleteIcon.svg";
import crossIcon from "../assets/cross.svg";
import PackageSideBar from "./PackageSideBar";
import dot from "../assets/dot.svg"
import edit from "../assets/edit.svg"

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CreatePackage = () => {
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
    const [addons, setAddons] = useState(['', '']);
    const [duration, setDuration] = useState('');
    const fileInputRef = useRef(null);
    const quillRefs = useRef({ included: null, openingHours: null, tnc: null });

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

    const handleUploadClick = () => {
        fileInputRef.current.click();
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

    const handleAddonsChange = (index, value) => {
        const newAddons = [...addons];
        newAddons[index] = value;
        setAddons(newAddons);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const updateEditorState = useCallback((editorKey, delta, oldDelta, source) => {
        setEditorStates(prevStates => {
            const updatedOperations = [...prevStates[editorKey].operations, { delta, oldDelta, source }];
            return {
                ...prevStates,
                [editorKey]: {
                    ...prevStates[editorKey],
                    operations: updatedOperations
                }
            };
        });
    }, []);

    const handleSaveChanges = () => {
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
    };

    return (
        <div style={{ display: 'flex' }}>
            <SideBar />
            <img style={{ position: 'absolute', top: 0, zIndex: '-1', width: '100%' }} src={background} alt="background" />
            <div className="create-package" style={{ width: '80%' }}>
                <span className="heading">
                    <Link to="/package"><img src={leftArrow} alt="left arrow" /></Link> Create Package
                </span>

                <div>
                    <div className="left">
                        <button className={`${isActive('setup')} btn-outline-secondary border-0 active me-2`} onClick={() => setActive('setup')} style={{ textDecoration: 'none' }}>Package Setup</button>
                        <button className={`${isActive('availability')} btn-outline-secondary border-0 active me-2`} onClick={() => setActive('availability')} style={{ textDecoration: 'none' }}>Availability</button>
                        <button className={`${isActive('limits')} btn-outline-secondary border-0 active me-2`} onClick={() => setActive('limits')} style={{ textDecoration: 'none' }}>Limits</button>
                    </div>

                    {/* package setUp */}
                    {
                        active === 'setup'
                        &&
                        <motion.div initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }} className="right">
                            <div className="header">
                                <div className="left" style={{ display: 'flex', flexDirection:'row' }}>
                                    <div className="toggle-switch">
                                        <input
                                            type="checkbox"
                                            id="toggle"
                                            className="toggle-checkbox"
                                            checked={isChecked}
                                            onChange={handleToggle}
                                        />
                                        <label htmlFor="toggle" className="toggle-label"></label>
                                    </div>
                                    <span>Publish</span>
                                </div>

                                <div className="mid">
                                    <span><img src={copy} alt="copy link" /> Copy Link</span>
                                    <span><img src={preview} alt="preview" /> Preview</span>
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
                                    placeholder="Package Title"
                                    value={packageTitle}
                                    onChange={handleInputChange}
                                />
                                <div
                                    className="image-upload"
                                    style={{ cursor: 'pointer', textAlign: 'center' }}
                                    onClick={handleUploadClick}
                                >
                                    <img src={imageUpload} alt="upload" />
                                    <span style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '20px' }}>Select files</span>
                                    <p className="grey">Drop files here or click <span style={{ color: '#00A76F' }}>browse</span> through your machine</p>
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        ref={fileInputRef}
                                        style={{ display: 'none' }}
                                    />
                                </div>
                                <div className="image-select" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {images.map((image, index) => (
                                        <div key={index} style={{ position: 'relative', margin: '10px' }}>
                                            <img src={image} alt={`uploaded ${index}`} style={{ objectFit: 'cover' }} />
                                            <button
                                                onClick={() => handleRemoveImage(index)}
                                                style={{
                                                    position: 'absolute',
                                                    top: '5px',
                                                    right: '5px',
                                                    background: 'none',
                                                    border: 'none',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                <img src={crossIcon} alt="remove" style={{ width: '20px', height: '20px' }} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ justifyContent: "end" }}>
                                    <button style={{ borderRadius: '5px', padding: '0px 10px', margin: '0px 10px' }}>Remove All</button>
                                    <button className="button">Upload</button>
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
                                            updateEditorState('included', delta, null, source);
                                        }}
                                        className="text-area"
                                        modules={CreatePackage.modules}
                                        formats={CreatePackage.formats}
                                        placeholder="Type here"
                                        ref={(el) => {
                                            if (el) {
                                                quillRefs.current.included = el.getEditor();
                                                quillRefs.current.included.on('text-change', (delta, oldDelta, source) => updateEditorState('included', delta, oldDelta, source));
                                            }
                                        }}
                                    />
                                </div>
                                <div className="grey">Opening hours</div>
                                <div className="text-section">
                                    <ReactQuill
                                        value={editorStates.openingHours.content}
                                        onChange={(content, delta, source) => {
                                            setEditorStates(prevStates => ({
                                                ...prevStates,
                                                openingHours: { content, operations: prevStates.openingHours.operations }
                                            }));
                                            updateEditorState('openingHours', delta, null, source);
                                        }}
                                        className="text-area"
                                        modules={CreatePackage.modules}
                                        formats={CreatePackage.formats}
                                        placeholder="Type here"
                                        ref={(el) => {
                                            if (el) {
                                                quillRefs.current.openingHours = el.getEditor();
                                                quillRefs.current.openingHours.on('text-change', (delta, oldDelta, source) => updateEditorState('openingHours', delta, oldDelta, source));
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
                                            updateEditorState('tnc', delta, null, source);
                                        }}
                                        className="text-area"
                                        modules={CreatePackage.modules}
                                        formats={CreatePackage.formats}
                                        placeholder="Type here"
                                        ref={(el) => {
                                            if (el) {
                                                quillRefs.current.tnc = el.getEditor();
                                                quillRefs.current.tnc.on('text-change', (delta, oldDelta, source) => updateEditorState('tnc', delta, oldDelta, source));
                                            }
                                        }}
                                    />
                                </div>

                                <div className="url">
                                    <span className="grey">URL</span>
                                    <div>
                                        <input
                                            type="url"
                                            name="url"
                                            value={url}
                                            onChange={handleInputChange}
                                        />
                                        <img src={copy} alt="copy" />
                                    </div>
                                </div>
                                <div className="grey">Add-on</div>
                                <div className="add-on" style={{ justifyContent: 'start' }}>
                                    {addons.map((addon, index) => (
                                        <input
                                            key={index}
                                            style={{ margin: '0px 4px' }}
                                            type="text"
                                            value={addon}
                                            onChange={(e) => handleAddonsChange(index, e.target.value)}
                                        />
                                    ))}
                                    <img src={deleteIcon} alt="delete" />
                                </div>

                                <div className="grey">Duration</div>
                                <div className="add-on" style={{ justifyContent: 'start' }}>
                                    <input
                                        style={{ margin: '0px 4px' }}
                                        type="text"
                                        name="duration"
                                        value={duration}
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

                    {
                        active === 'availability'
                        &&
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
                    }

                    {
                        active === 'limits'
                        &&
                        <div className="limits">
                            <motion.div initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }} className="right">
                                <div className="header">
                                    <span>Changes will be autosaved</span>
                                </div>
                                <div style={{width:'100%'}} className="body">
                                    <div style={{width:'100%'}}>
                                        <div style={{width:'49%'}} className="left">
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

                                    <div style={{ justifyContent: 'start', alignItems: 'center' }}>
                                        <div className="toggle-switch">
                                            <input
                                                type="checkbox"
                                                id="toggle1"
                                                className="toggle-checkbox"
                                                checked={isChecked1}
                                                onChange={handleToggle1}
                                            />
                                            <label htmlFor="toggle1" className="toggle-label"></label>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', margin: '0px 10px' }}>
                                            <span>Booking frequency</span>
                                            <div style={{ justifyContent: 'start' }}>
                                                <input style={{ width: '10%', textAlign: 'center', borderRadius: '5px', border: '1px solid #919EAB' }} type="text" value={1}></input>
                                                <select style={{ margin: '0px 10px' }} className="select">
                                                    <option>per day</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />

                                    <div style={{ justifyContent: 'start', alignItems: 'center' }}>
                                        <div className="toggle-switch">
                                            <input
                                                type="checkbox"
                                                id="toggle2"
                                                className="toggle-checkbox"
                                                checked={isChecked2}
                                                onChange={handleToggle2}
                                            />
                                            <label htmlFor="toggle2" className="toggle-label"></label>

                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto 10px' }}>
                                            Limit book only first slot
                                        </div>
                                    </div>

                                    <hr />

                                    <div style={{ justifyContent: 'start', alignItems: 'center' }}>
                                        <div className="toggle-switch">
                                            <input
                                                type="checkbox"
                                                id="toggle3"
                                                className="toggle-checkbox"
                                                checked={isChecked3}
                                                onChange={handleToggle3}
                                            />
                                            <label htmlFor="toggle3" className="toggle-label"></label>

                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', margin: '0px 10px' }}>
                                            <span>Booking frequency</span>
                                            <div style={{ justifyContent: 'start' }}>
                                                <input style={{ width: '10%', textAlign: 'center', borderRadius: '5px', border: '1px solid #919EAB' }} type="text" value={1}></input>
                                                <select style={{ margin: '0px 10px' }} className="select">
                                                    <option>per day</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />

                                </div>
                            </motion.div>
                        </div>
                    }
                    {/* Availability */}


                    {/* Limits */}
                </div>
            </div>
        </div>
    );
};

CreatePackage.modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['bold', 'italic', 'underline'],
        ['link'],
        [{ 'align': [] }],
        ['clean'] // remove formatting button
    ],
};

CreatePackage.formats = [
    'header',
    'font',
    'list',
    'bullet',
    'bold',
    'italic',
    'underline',
    'link',
    'align',
    'clean'
];

export default CreatePackage;
