import { useState } from "react";
import "../App.css";
import SideBar from "../Components/SideBar";
import background from "../assets/background.svg";
import { Link } from "react-router-dom";
import plus from "../assets/plus.svg";
import edit1 from '../assets/edit1.svg';
import eye from '../assets/eye.svg';
import share from '../assets/share.svg';
import eye1 from '../assets/eye1.svg';
import likes from '../assets/likes.svg';
import addFile from "../assets/addFile.svg";
import more from "../assets/more.svg";
import play from "../assets/play.svg";
import { motion } from "framer-motion";

const CreatePackage = () => {
    const [active, setActive] = useState('ads');
    const [isChecked, setIsChecked] = useState(false);
    const [expandedSection, setExpandedSection] = useState(null);

    const isActive = (path) => {
        return active === path ? 'btn' : '';
    };

    const handleToggle = () => {
        setIsChecked(!isChecked);
        console.log('Toggle state:', !isChecked);
    };

    const handleAccordionToggle = (section) => {
        // Close currently open section if different
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div style={{ display: 'flex' }}>
            <SideBar />
            <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }} style={{ width: '80%' }}>
                <img style={{ position: 'absolute', top: 0, zIndex: '-1' }} src={background} alt="background" />
                
                <div className="container mainSec" id="bookingSec">
                    <h1 className="secHead">Package</h1>
                    <div className="row mb-4 p-0">
                        <div className="col-lg-6 d-flex">
                            <button onClick={() => setActive('ads')} type="button" className={`${isActive('ads')} btn-outline-secondary border-0 active me-2`}>All</button>
                            <button onClick={() => setActive('nearreel')} type="button" className={`${isActive('nearreel')} btn-outline-secondary border-0 active me-2`}>Spa</button>
                            <button onClick={() => setActive('coupon')} type="button" className={`${isActive('coupon')} btn-outline-secondary border-0 active me-2`}>Massage</button>
                            <button onClick={() => setActive('discounts')} type="button" className={`${isActive('discounts')} btn-outline-secondary border-0 active me-2`}>Status</button>
                            <img className="border-0 me-2" src={addFile} alt="add file" />
                        </div>
                        <div className="col-lg-6 d-flex input-group justify-content-end ms-5" style={{ maxWidth: '45%' }}>
                            <input type="text" className="form-control" placeholder="Search..." />
                            <button className="btn btn-outline-secondary me-2 rounded-3" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>

                    <div className="package-body">
                        <div className="spa" onClick={() => handleAccordionToggle('spa')}>
                            <div style={{ width: '8%' }}>
                                <img src={play} className={`play-icon ${expandedSection === 'spa' ? 'rotate' : ''}`} alt="play" />
                                <span style={{ fontWeight: 'bold' }}>Spa</span>
                                <img src={more} alt="more" />
                            </div>
                            <Link to='/create-package'>
                                <button>
                                    <img src={plus} alt="add" />
                                    <span>Add Package</span>
                                </button>
                            </Link>
                        </div>
                        <div className={`accordion-content ${expandedSection === 'spa' ? 'expanded' : ''}`}>
                            <div className='item'>
                                <div className='left' style={{ width: '84%' }}>
                                    <img src='https://avatars.githubusercontent.com/u/97161064?v=4' alt="spa" />
                                    <div>
                                        <span>Largest spa in Hong Kong</span>
                                        <div>
                                            <div><img style={{ width: 'max-content' }} src={eye1} alt="views" /><span style={{ color: 'grey' }}>1000 views</span></div>
                                            <div style={{ marginLeft: '10px' }}><img style={{ width: 'max-content' }} src={likes} alt="likes" /><span style={{ color: 'grey' }}>1000 likes</span></div>
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
                                            <span>Publish</span>
                                        </div>
                                    </div>
                                    <div>
                                        <img width={25} src={share} alt="share" />
                                        <img width={25} src={eye} alt="view" />
                                        <img width={25} src={edit1} alt="edit" />
                                    </div>
                                </div>
                            </div>
                            {/* Add more items here */}
                        </div>

                        <div className="spa" onClick={() => handleAccordionToggle('massage')}>
                            <div style={{ width: '10%' }}>
                                <img src={play} className={`play-icon ${expandedSection === 'massage' ? 'rotate' : ''}`} alt="play" />
                                <span style={{ fontWeight: 'bold' }}>Massage</span>
                                <img src={more} alt="more" />
                            </div>
                            <Link to='/create-package'>
                                <button>
                                    <img src={plus} alt="add" />
                                    <span>Add Package</span>
                                </button>
                            </Link>
                        </div>
                        <div className={`accordion-content ${expandedSection === 'massage' ? 'expanded' : ''}`}>
                            <div className='item'>
                                <div className='left' style={{ width: '84%' }}>
                                    <img src='https://avatars.githubusercontent.com/u/97161064?v=4' alt="massage" />
                                    <div>
                                        <span>Relaxing massage experience</span>
                                        <div>
                                            <div><img style={{ width: 'max-content' }} src={eye1} alt="views" /><span style={{ color: 'grey' }}>500 views</span></div>
                                            <div style={{ marginLeft: '10px' }}><img style={{ width: 'max-content' }} src={likes} alt="likes" /><span style={{ color: 'grey' }}>800 likes</span></div>
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
                                            <span>Publish</span>
                                        </div>
                                    </div>
                                    <div>
                                        <img width={25} src={share} alt="share" />
                                        <img width={25} src={eye} alt="view" />
                                        <img width={25} src={edit1} alt="edit" />
                                    </div>
                                </div>
                            </div>
                            {/* Add more items here */}
                        </div>

                        <div className="spa" onClick={() => handleAccordionToggle('sauna')}>
                            <div style={{ width: '10%' }}>
                                <img src={play} className={`play-icon ${expandedSection === 'sauna' ? 'rotate' : ''}`} alt="play" />
                                <span style={{ fontWeight: 'bold' }}>Sauna</span>
                                <img src={more} alt="more" />
                            </div>
                            <Link to='/create-package'>
                                <button>
                                    <img src={plus} alt="add" />
                                    <span>Add Package</span>
                                </button>
                            </Link>
                        </div>
                        <div className={`accordion-content ${expandedSection === 'sauna' ? 'expanded' : ''}`}>
                            <div className='item'>
                                <div className='left' style={{ width: '84%' }}>
                                    <img src='https://avatars.githubusercontent.com/u/97161064?v=4' alt="sauna" />
                                    <div>
                                        <span>Premium sauna experience</span>
                                        <div>
                                            <div><img style={{ width: 'max-content' }} src={eye1} alt="views" /><span style={{ color: 'grey' }}>700 views</span></div>
                                            <div style={{ marginLeft: '10px' }}><img style={{ width: 'max-content' }} src={likes} alt="likes" /><span style={{ color: 'grey' }}>900 likes</span></div>
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
                                            <span>Publish</span>
                                        </div>
                                    </div>
                                    <div>
                                        <img width={25} src={share} alt="share" />
                                        <img width={25} src={eye} alt="view" />
                                        <img width={25} src={edit1} alt="edit" />
                                    </div>
                                </div>
                            </div>
                            {/* Add more items here */}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default CreatePackage;
