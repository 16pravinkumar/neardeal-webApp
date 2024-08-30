import React from 'react'
import { motion } from 'framer-motion'

const CampaignDiscounts = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}>CampaignDiscounts</motion.div>
  )
}

export default CampaignDiscounts