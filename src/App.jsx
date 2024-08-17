
import Availability from './Pages/Availability'
import Booking from './Pages/Booking'
import Campaign from './Pages/Campaign'
import CreatePackage from './Pages/CreatePackage'
import Limits from './Pages/Limits'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Transaction from './Pages/Transaction'
import Analytics from './Pages/Analytics'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Booking></Booking>} />

        <Route path='/create-package' element={<CreatePackage></CreatePackage>} />
        <Route path='/availability' element={<Availability></Availability>} />
        <Route path='/limits' element={<Limits></Limits>} />

        <Route path='/campaign' element={<Campaign />} />
        <Route path='/transaction' element={<Transaction />} />
        <Route path='/analytics' element={<Analytics/>} />
      </Routes>
      {/* <Booking></Booking> */}
      {/* <CreatePackage></CreatePackage> */}
      {/* <Availability></Availability> */}
      {/* <Limits></Limits> */}
    </Router>
  )
}

export default App
