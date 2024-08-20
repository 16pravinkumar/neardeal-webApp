
import Availability from './Pages/Availability'
import Booking from './Pages/Booking'
import Campaign from './Pages/Campaign'
import CreatePackage from './Pages/CreatePackage'
import Limits from './Pages/Limits'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Transaction from './Pages/Transaction'
import ProtectedRoutes from "./ProtechedRoutes";
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
        <Route path='/availability' element={<Availability></Availability>}></Route>
        <Route path='/limits' element={<Limits></Limits>}></Route>
        <Route path='/transaction' element={<Transaction></Transaction>}></Route>
        <Route path='/campaign' element={<Campaign></Campaign>}></Route>
        {/* Protected Routes */}
      </Routes>
      {/* <Booking></Booking> */}
      {/* <CreatePackage></CreatePackage> */}
      {/* <Availability></Availability> */}
      {/* <Limits></Limits> */}
    </Router>
  )
}

export default App
