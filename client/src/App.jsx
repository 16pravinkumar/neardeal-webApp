
import Availability from './Pages/Availability'
import Booking from './Pages/Booking'
import Campaign from './Pages/Campaign'
import CreatePackage from './Components/CreatePackage'
import Limits from './Pages/Limits'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Transaction from './Pages/Transaction'
import ProtectedRoutes from "./ProtechedRoutes";
import Package from "./Pages/CreatePackage"
import Analytics from './Pages/Analytics'
import SignUp from './Pages/Signup'
import Login from './Pages/Login'
import Cookies from "js-cookie";

function App() {
  const jwtUserToken = Cookies.get("user_token");
  const isUserLoggedIn = jwtUserToken ? true : false;
  return (
    <Router>
      <Routes>
        {/* Signup */}
        <Route path='/signup' exact element={<SignUp></SignUp>}></Route>
        <Route path='/login' exact element={<Login />} />

        <Route path='/' element={<Booking></Booking>}></Route>
        <Route path='/analytics' element={<Analytics></Analytics>}></Route>
        <Route path='/create-package' element={<CreatePackage></CreatePackage>}></Route>
        <Route path='/package' element={<Package></Package>}></Route>
        <Route path='/availability' element={<Availability></Availability>}></Route>
        <Route path='/limits' element={<Limits></Limits>}></Route>
        <Route path='/transaction' element={<Transaction></Transaction>}></Route>
        <Route path='/campaign' element={<Campaign></Campaign>}></Route>
        {/* Protected Routes */}
        {/* <Route path="/limits" exact element={<ProtectedRoutes Component={Limits} isUserLoggedIn={isUserLoggedIn} />} />
        <Route path="/transaction" exact element={<ProtectedRoutes Component={Transaction} isUserLoggedIn={isUserLoggedIn} />} />
        <Route path="/campaign" exact element={<ProtectedRoutes Component={Campaign} isUserLoggedIn={isUserLoggedIn} />} /> */}
      </Routes>
      {/* <Booking></Booking> */}
      {/* <CreatePackage></CreatePackage> */}
      {/* <Availability></Availability> */}
      {/* <Limits></Limits> */}
    </Router>
  )
}

export default App
