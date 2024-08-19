
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

        {/* Protected Routes */}
        <Route path="/" exact element={<ProtectedRoutes Component={Booking} isUserLoggedIn={isUserLoggedIn} />} />
        <Route path="/analytics" exact element={<ProtectedRoutes Component={Analytics} isUserLoggedIn={isUserLoggedIn} />} />
        <Route path="/create-package" exact element={<ProtectedRoutes Component={CreatePackage} isUserLoggedIn={isUserLoggedIn} />} />
        <Route path="/availability" exact element={<ProtectedRoutes Component={Availability} isUserLoggedIn={isUserLoggedIn} />} />
        
        <Route path="/limits" exact element={<ProtectedRoutes Component={Limits} isUserLoggedIn={isUserLoggedIn} />} />
        <Route path="/transaction" exact element={<ProtectedRoutes Component={Transaction} isUserLoggedIn={isUserLoggedIn} />} />
        <Route path="/campaign" exact element={<ProtectedRoutes Component={Campaign} isUserLoggedIn={isUserLoggedIn} />} />
      </Routes>
      {/* <Booking></Booking> */}
      {/* <CreatePackage></CreatePackage> */}
      {/* <Availability></Availability> */}
      {/* <Limits></Limits> */}
    </Router>
  )
}

export default App
