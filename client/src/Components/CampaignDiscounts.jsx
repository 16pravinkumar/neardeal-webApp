import { useState } from 'react'
import eye1 from '../assets/eye1.svg';
import likes from '../assets/likes.svg';
import edit1 from '../assets/edit1.svg';
import { motion } from 'framer-motion'

const CampaignDiscounts = () => {
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
          <div style={{ padding:'10px' }}>
            <span style={{ color: '#00A76F' }}>Largest spa in Hong Kong</span>
            <span>Father's day offer</span>
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

      <div className='item'>
        <div className='left' style={{ width: '84%' }}>
          <div style={{ padding:'10px' }}>
            <span style={{ color: '#00A76F' }}>Largest spa in Hong Kong</span>
            <span>Father's day offer</span>
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

export default CampaignDiscounts