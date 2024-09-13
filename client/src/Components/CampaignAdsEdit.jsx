import { useState, useRef } from "react";
import 'react-quill/dist/quill.snow.css'; // Import Quill's styles
import SideBar from "./SideBar";
import background from "../assets/background.svg";
import leftArrow from "../assets/leftArrow.svg";
import imageUpload from "../assets/imageUpload.svg";
import crossIcon from "../assets/cross.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import image1 from '../assets/bannerImage.svg';
import aaaa from "../assets/bannerLogo.svg";

const EditAdd = () => {
    const [availabilityGroups, setAvailabilityGroups] = useState([
        {
            timeSlots: [
                { startTime: "09:00", endTime: "13:00" },
                { startTime: "15:00", endTime: "20:00" },
            ],
            selectedDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        },
        {
            timeSlots: [{ startTime: "09:00", endTime: "13:00" }],
            selectedDays: ["Sun"],
        },
    ]);

    const addTimeSlot = (groupIndex) => {
        const updatedGroups = [...availabilityGroups];
        updatedGroups[groupIndex].timeSlots.push({ startTime: "09:00", endTime: "18:00" });
        setAvailabilityGroups(updatedGroups);
    };

    const addAvailabilityGroup = () => {
        setAvailabilityGroups([
            ...availabilityGroups,
            {
                timeSlots: [{ startTime: "09:00", endTime: "13:00" }],
                selectedDays: [],
            },
        ]);
    };

    const removeAvailabilityGroup = (groupIndex) => {
        const updatedGroups = availabilityGroups.filter((_, i) => i !== groupIndex);
        setAvailabilityGroups(updatedGroups);
    };

    const [active, setActive] = useState('content');
    const isActive = (path) => {
        return active === path ? 'btn' : ''
    };
    const [isChecked, setIsChecked] = useState(false);
    const [images, setImages] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Spa');
    const fileInputRef = useRef(null);

    const [availabilitySets, setAvailabilitySets] = useState([
        { fromTime: "09:00", toTime: "18:00", days: [] },
    ]);

    const addAvailabilitySet = () => {
        setAvailabilitySets([
            ...availabilitySets,
            { fromTime: "09:00", toTime: "18:00", days: [] },
        ]);
    };

    const handleTimeChange = (index, field, value) => {
        const updatedSets = [...availabilitySets];
        updatedSets[index][field] = value;
        setAvailabilitySets(updatedSets);
    };

    const handleDayToggle = (index, day) => {
        const updatedSets = [...availabilitySets];
        const daysSet = updatedSets[index].days;
        if (daysSet.includes(day)) {
            updatedSets[index].days = daysSet.filter((d) => d !== day);
        } else {
            updatedSets[index].days.push(day);
        }
        setAvailabilitySets(updatedSets);
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

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

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
                    <Link to="/package"><img src={leftArrow} alt="left arrow" /></Link> Activate Ads
                </span>

                <div>
                    <div className="left">
                        <button className={`${isActive('content')} btn-outline-secondary border-0 active me-2`} onClick={() => setActive('content')} style={{ textDecoration: 'none' }}>Content</button>
                        <button className={`${isActive('analytics')} btn-outline-secondary border-0 active me-2`} onClick={() => setActive('analytics')} style={{ textDecoration: 'none' }}>Analytics</button>
                        <button className={`${isActive('billing')} btn-outline-secondary border-0 active me-2`} onClick={() => setActive('billing')} style={{ textDecoration: 'none' }}>Billing</button>
                    </div>

                    {/* package setUp */}
                    {
                        active === 'content'
                        &&
                        <motion.div initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }} className="right">
                            <div className="header">
                                <div className="left" style={{ display: 'flex', flexDirection: 'row' }}>
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
                                    <span>Activate</span>
                                </div>

                                <div className="right">
                                    <button className="button" onClick={handleSaveChanges}>Save Changes</button>
                                </div>
                            </div>
                            <div className="body">
                                <div className="grey">Banner Preview</div>
                                <div style={{ flexDirection: 'column', position: 'relative', width:'60%' }}>
                                    <div style={{ position:'absolute', bottom:'6%', left:'4%', color:'white', flexDirection:'column' }}>
                                        <h3>Sanmu Farm</h3>
                                        <span>NearDeal Certified</span>
                                    </div>
                                    <img style={{ width: '100%' }} src={image1}></img>
                                    <span style={{ position:'absolute', color:'white', left:'3%', top:'4%' }}>Ad</span>
                                    <img style={{ position: 'absolute', textAlign:'center', left:'35%', top:'10%', borderRadius: '10px', width: '25%' }} src={aaaa}></img>
                                    <button style={{ position:'absolute', right:'4%', bottom:'6%', padding:'5px 20px', color:'brown', background:'white', border:'none', borderRadius:'20px' }}>Visit</button>
                                </div>

                                <div style={{ marginTop: '20px' }} className="grey">Your Plan</div>
                                <div style={{ justifyContent: 'start' }}>
                                    <select style={{ padding: '10px 20px', border: '1px solid #E9ECEE', borderRadius: '10px', color: '#637381' }} value={selectedCategory} onChange={handleCategoryChange}>
                                        <option>Your Budget</option>
                                    </select>
                                    <select style={{ padding: '10px 20px', border: '1px solid #E9ECEE', borderRadius: '10px', color: '#637381', marginLeft: '10px' }} value={selectedCategory} onChange={handleCategoryChange}>
                                        <option>Promotional Period</option>
                                    </select>
                                </div>

                                <div style={{ marginTop: '20px' }} className="grey">Background Image</div>
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
                                <div style={{ justifyContent: "end", margin: '10px 0px' }}>
                                    <button style={{ borderRadius: '5px', padding: '0px 10px', margin: '0px 10px' }}>Remove All</button>
                                    <button className="button">Upload</button>
                                </div>

                            </div>
                        </motion.div>
                    }

                    {
                        active === 'analytics'
                        &&
                        <motion.div initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }} className="right">
                            <div className="header">
                                <span>Changes will be autosaved</span>
                            </div>
                            <div className="body">

                            </div>



                        </motion.div>
                    }

                    {
                        active === 'billing'
                        &&
                        <motion.div initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }} className="right">
                            <div className="header">
                                <span>Changes will be autosaved</span>
                            </div>
                            <div style={{ width: '100%' }} className="body">

                            </div>
                        </motion.div>
                    }
                    {/* Availability */}


                    {/* Limits */}
                </div>
            </div>

            <div className="offcanvas offcanvas-end" id="demo1">
                <div className="offcanvas-header">
                    <h3 className="offcanvas-title">Create Availability</h3>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="setName" className="form-label">
                                Name of Set
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="setName"
                                placeholder="Enter set name"
                            />
                        </div>

                        {availabilitySets.map((set, index) => (
                            <div key={index} className="mb-3">
                                <div className="row">
                                    <div className="col-5">
                                        <input
                                            type="time"
                                            className="form-control"
                                            value={set.fromTime}
                                            onChange={(e) =>
                                                handleTimeChange(index, "fromTime", e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="col-2 text-center">-</div>
                                    <div className="col-5">
                                        <input
                                            type="time"
                                            className="form-control"
                                            value={set.toTime}
                                            onChange={(e) =>
                                                handleTimeChange(index, "toTime", e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <p>Time Apply on:</p>
                                    <div className="d-flex justify-content-between">
                                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                                            (day) => (
                                                <button
                                                    type="button"
                                                    key={day}
                                                    className={`btn ${set.days.includes(day)
                                                        ? "btn-primary"
                                                        : "btn-outline-dark"
                                                        }`}
                                                    onClick={() => handleDayToggle(index, day)}
                                                >
                                                    {day}
                                                </button>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button
                            type="button"
                            className="btn btn-outline-primary mt-3"
                            onClick={addAvailabilitySet}
                        >
                            Add Availability Set
                        </button>
                    </form>
                    <button type="button" className="btn btn-success mt-4">
                        Save
                    </button>
                </div>
            </div>

            <div className="offcanvas offcanvas-end" id="demo">
                <div className="offcanvas-header">
                    <h3 className="offcanvas-title">Edit Availability</h3>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="setName" className="form-label">
                                Name of Set
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="setName"
                                defaultValue="Working Hours"
                            />
                        </div>

                        {availabilityGroups.map((group, groupIndex) => (
                            <div key={groupIndex} className="mb-4 p-3" style={{ border: "1px solid #ccc", borderRadius: "8px" }}>
                                {group.timeSlots.map((slot, slotIndex) => (
                                    <div key={slotIndex} className="row mb-3">
                                        <div className="col-5">
                                            <input
                                                type="time"
                                                className="form-control"
                                                value={slot.startTime}
                                                onChange={(e) =>
                                                    handleTimeChange(groupIndex, slotIndex, "startTime", e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="col-2 text-center">-</div>
                                        <div className="col-5">
                                            <input
                                                type="time"
                                                className="form-control"
                                                value={slot.endTime}
                                                onChange={(e) =>
                                                    handleTimeChange(groupIndex, slotIndex, "endTime", e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    className="btn btn-outline-primary mb-2"
                                    onClick={() => addTimeSlot(groupIndex)}
                                >
                                    +
                                </button>

                                <div className="mt-3">
                                    <p>Time Apply on:</p>
                                    <div className="d-flex justify-content-between">
                                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                                            (day) => (
                                                <button
                                                    type="button"
                                                    key={day}
                                                    className={`btn ${group.selectedDays.includes(day)
                                                        ? "btn-success"
                                                        : "btn-outline-dark"
                                                        }`}
                                                    onClick={() => handleDayToggle(groupIndex, day)}
                                                >
                                                    {day}
                                                </button>
                                            )
                                        )}
                                    </div>
                                </div>

                                <div className="text-end mt-3">
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-sm"
                                        onClick={() => removeAvailabilityGroup(groupIndex)}
                                    >
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        ))}

                        <button
                            type="button"
                            className="btn btn-outline-primary mt-3"
                            onClick={addAvailabilityGroup}
                        >
                            Add Availability Set
                        </button>
                    </form>

                    <div className="d-flex justify-content-between mt-4">
                        <button type="button" className="btn btn-outline-danger">
                            Delete
                        </button>
                        <button type="button" className="btn btn-success">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditAdd;
