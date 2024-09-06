import { useState } from 'react';
import eye1 from '../assets/eye1.svg';
import likes from '../assets/likes.svg';
import edit1 from '../assets/edit1.svg';
import share from '../assets/share.svg';
import eye from '../assets/eye.svg';
import { motion } from 'framer-motion';

const CampaignCoupon = () => {
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
      <div className='item'>
        <div className='left' style={{ width: '84%' }}>
          <img src='https://avatars.githubusercontent.com/u/97161064?v=4' />
          <div>
            <span>Largest spa in Hong Kong</span>
            <div>
              <div><img style={{ width: 'max-content' }} src={eye1} /><span style={{ color: 'grey' }}>1000 views</span></div>
              <div style={{ marginLeft: '10px' }}><img style={{ width: 'max-content' }} src={likes} /><span style={{ color: 'grey' }}>1000 likes</span></div>
            </div>
          </div>
        </div>
        <div className='right' style={{ width: '15%', justifyContent: 'space-between' }}>
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
              {/* <span>Publish</span> */}
            </div>

            <span>Publish</span>
          </div>

          <div>
            <img width={25} src={edit1} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CampaignCoupon