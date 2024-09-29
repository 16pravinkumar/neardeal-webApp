import { useState } from 'react'
import edit from "../assets/edit.svg";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CampaignAds = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleToggle = () => {
        setIsChecked(!isChecked);
        console.log('Toggle state:', !isChecked);
    };
    return (
        <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}>
            <div style={{ padding:'10px 20px' }} className="campaign-ads">
                <div>
                    <span>Activate homepage ads banner</span>
                    <span style={{ fontSize: '14px' }} className="grey">Total Cost: $100</span>
                </div>
                <div className="edit">
                    <div style={{ flexDirection: 'row', alignItems: 'center' }}>
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
                        <span style={{ margin: '0px 10px' }}>Active</span>
                    </div>

                   <Link to='/campaign/ads'><img  src={edit} /></Link>
                </div>
            </div>

            <div style={{ margin: '10px 0px', padding:'10px 20px' }} className="campaign-blog">
                <div>
                    <span>Apply NearDeal Blog page</span>
                    <p style={{ fontSize: '14px' }} className="grey">Our Neardeal Staff will have a trip to your store and experience your service. After that we will write an official review to help promote your store. You may have a chance of winning the Neardeal certified badge if we think your experience meet our standard.</p>
                </div>
                <div className="btn">
                    <button className="button">
                        Email NearDeal
                    </button>
                </div>
            </div>

        </motion.div>
    )
}

export default CampaignAds