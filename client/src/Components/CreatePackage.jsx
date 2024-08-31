// import React, { useState, useRef } from "react";
// import SideBar from "../Components/SideBar";
// import background from "../assets/background.svg";
// import leftArrow from "../assets/leftArrow.svg";
// import preview from "../assets/preview.svg";
// import copy from "../assets/copy.svg";
// import imageUpload from "../assets/imageUpload.svg";
// import deleteIcon from "../assets/deleteIcon.svg";
// import crossIcon from "../assets/cross.svg"; // Add this import
// import PackageSideBar from "../Components/PackageSideBar";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import cross from "../assets/cross.svg";
// import icon1 from "../assets/icon1.svg";
// import icon2 from "../assets/icon2.svg";
// import icon3 from "../assets/icon3.svg";
// import icon4 from "../assets/icon4.svg";
// import icon5 from "../assets/icon5.svg";
// import icon6 from "../assets/icon6.svg";
// import icon7 from "../assets/icon7.svg";
// import icon8 from "../assets/icon8.svg";
// import icon9 from "../assets/icon9.svg";
// import icon10 from "../assets/icon10.svg";

// const CreatePackage = () => {
//     const [isChecked, setIsChecked] = useState(false);
//     const [images, setImages] = useState([]);
//     const fileInputRef = useRef(null);

//     const handleToggle = () => {
//         setIsChecked(!isChecked);
//         console.log('Toggle state:', !isChecked);
//     };

//     const handleImageUpload = (event) => {
//         const files = Array.from(event.target.files);
//         const newImages = files.map(file => URL.createObjectURL(file));
//         setImages(prevImages => [...prevImages, ...newImages]);
//     };

//     const handleRemoveImage = (index) => {
//         setImages(images.filter((_, i) => i !== index));
//     };

//     const handleUploadClick = () => {
//         fileInputRef.current.click();
//     };

//     return (
//         <div style={{ display: 'flex' }}>
//             <SideBar />
//             <img style={{ position: 'absolute', top: 0, zIndex: '-1', width: '100%' }} src={background} alt="background" />
//             <div className="create-package" style={{ width: '80%' }}>
//                 <span className="heading">
//                     <Link to="/package"><img src={leftArrow} alt="left arrow" /></Link> Create Package
//                 </span>
//                 <div>
//                     <div className="left">
//                         <PackageSideBar />
//                     </div>

//                     <motion.div initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 1 }} className="right">
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
//                                 </div>
//                             </div>

//                             <div className="mid">
//                                 <span><img src={copy} alt="copy link" /> Copy Link</span>
//                                 <span><img src={preview} alt="preview" /> Preview</span>
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
//                                         <option>Gym</option>
//                                     </select>
//                                 </span>
//                             </div>
//                             <input className="package-title" type="text" placeholder="Package Title" />
//                             <div 
//                                 className="image-upload"
//                                 style={{ cursor: 'pointer', textAlign: 'center' }}
//                                 onClick={handleUploadClick}
//                             >
//                                 <img src={imageUpload} alt="upload" />
//                                 <span style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '20px' }}>Select files</span>
//                                 <p className="grey">Drop files here or click <span style={{ color: '#00A76F' }}>browse</span> through your machine</p>
//                                 <input
//                                     type="file"
//                                     multiple
//                                     accept="image/*"
//                                     onChange={handleImageUpload}
//                                     ref={fileInputRef}
//                                     style={{ display: 'none' }}
//                                 />
//                             </div>
//                             <div className="image-select" style={{ display: 'flex', flexWrap: 'wrap' }}>
//                                 {images.map((image, index) => (
//                                     <div key={index} style={{ position: 'relative', margin: '10px' }}>
//                                         <img src={image} alt={`uploaded ${index}`} style={{ objectFit: 'cover' }} />
//                                         <button
//                                             onClick={() => handleRemoveImage(index)}
//                                             style={{
//                                                 position: 'absolute',
//                                                 top: '5px',
//                                                 right: '5px',
//                                                 background: 'none',
//                                                 border: 'none',
//                                                 cursor: 'pointer'
//                                             }}
//                                         >
//                                             <img src={crossIcon} alt="remove" style={{ width: '20px', height: '20px' }} />
//                                         </button>
//                                     </div>
//                                 ))}
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
//                                     <img src={icon4} />
//                                     <img src={icon5} />
//                                     <img src={icon6} />
//                                     <img src={icon7} />
//                                     <img src={icon8} />
//                                     <img src={icon9} />
//                                     <img src={icon10} />
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
//                                     <img src={icon4} />
//                                     <img src={icon5} />
//                                     <img src={icon6} />
//                                     <img src={icon7} />
//                                     <img src={icon8} />
//                                     <img src={icon9} />
//                                     <img src={icon10} />
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
//                                     <img src={icon4} />
//                                     <img src={icon5} />
//                                     <img src={icon6} />
//                                     <img src={icon7} />
//                                     <img src={icon8} />
//                                     <img src={icon9} />
//                                     <img src={icon10} />
//                                 </div>
//                                 <textarea className="text-area" placeholder="Type here"></textarea>
//                             </div>

//                             <div className="url">
//                                 <span className="grey">URL</span>
//                                 <div>
//                                     <input type="url" />
//                                     <img src={copy} alt="copy" />
//                                 </div>
//                             </div>

//                             <div className="grey">Add-on</div>
//                             <div className="add-on" style={{ justifyContent: 'start' }}>
//                                 <input style={{ margin: '0px 4px' }} type="text" />
//                                 <input style={{ margin: '0px 4px' }} type="text" />
//                                 <img src={deleteIcon} alt="delete" />
//                             </div>

//                             <div className="grey">Duration</div>
//                             <div className="add-on" style={{ justifyContent: 'start' }}>
//                                 <input style={{ margin: '0px 4px' }} type="text" />
//                                 <select className="select">
//                                     <option>minutes</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <button className="button">Save changes</button>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//     );
// }
import React, { useState, useRef } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's styles
import SideBar from "../Components/SideBar";
import background from "../assets/background.svg";
import leftArrow from "../assets/leftArrow.svg";
import preview from "../assets/preview.svg";
import copy from "../assets/copy.svg";
import imageUpload from "../assets/imageUpload.svg";
import deleteIcon from "../assets/deleteIcon.svg";
import crossIcon from "../assets/cross.svg";
import PackageSideBar from "../Components/PackageSideBar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CreatePackage = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [images, setImages] = useState([]);
    const [includedContent, setIncludedContent] = useState('');
    const [openingHoursContent, setOpeningHoursContent] = useState('');
    const [tncContent, setTncContent] = useState('');
    const fileInputRef = useRef(null);

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
                        <PackageSideBar />
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
                                </div>
                            </div>

                            <div className="mid">
                                <span><img src={copy} alt="copy link" /> Copy Link</span>
                                <span><img src={preview} alt="preview" /> Preview</span>
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
                                        <option>Gym</option>
                                    </select>
                                </span>
                            </div>
                            <input className="package-title" type="text" placeholder="Package Title" />
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
                                    value={includedContent}
                                    onChange={setIncludedContent}
                                    className="text-area"
                                    modules={CreatePackage.modules}
                                    formats={CreatePackage.formats}
                                    placeholder="Type here"
                                />
                            </div>
                            <div className="grey">Opening hours</div>
                            <div className="text-section">
                                <ReactQuill
                                    value={openingHoursContent}
                                    onChange={setOpeningHoursContent}
                                    className="text-area"
                                    modules={CreatePackage.modules}
                                    formats={CreatePackage.formats}
                                    placeholder="Type here"
                                />
                            </div>
                            <div className="grey">TNC</div>
                            <div className="text-section">
                                <ReactQuill
                                    value={tncContent}
                                    onChange={setTncContent}
                                    className="text-area"
                                    modules={CreatePackage.modules}
                                    formats={CreatePackage.formats}
                                    placeholder="Type here"
                                />
                            </div>

                            <div className="url">
                                 <span className="grey">URL</span>
                                 <div>
                                     <input type="url" />
                                     <img src={copy} alt="copy" />
                                 </div>
                             </div>
                             <div className="grey">Add-on</div>
                             <div className="add-on" style={{ justifyContent: 'start' }}>
                                 <input style={{ margin: '0px 4px' }} type="text" />
                                 <input style={{ margin: '0px 4px' }} type="text" />
                                 <img src={deleteIcon} alt="delete" />
                             </div>

                            <div className="grey">Duration</div>
                            <div className="add-on" style={{ justifyContent: 'start' }}>
                                <input style={{ margin: '0px 4px' }} type="text" />
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
