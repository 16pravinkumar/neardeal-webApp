
import Availability from './Pages/Availability'
import Booking from './Pages/Booking'
import CreatePackage from './Pages/CreatePackage'
import Limits from './Pages/Limits'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' exact element={<Booking></Booking>}/>

      <Route path='/create-package' element={<CreatePackage></CreatePackage>}/>
      <Route path='/availability' element={<Availability></Availability>}/>
      <Route path='/limits' element={<Limits></Limits>}/>
    </Routes>
      {/* <Booking></Booking> */}
      {/* <CreatePackage></CreatePackage> */}
      {/* <Availability></Availability> */}
      {/* <Limits></Limits> */}
    </Router>
  )
}

export default App
