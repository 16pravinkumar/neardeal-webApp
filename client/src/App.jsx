
import Booking from './Pages/Booking'
import Campaign from './Pages/Campaign'
import CreateSpaPackage from './Components/CreateSpaPackage.jsx'
import CreateMassagePackage from './Components/CreateMassagePackage.jsx'
import CreateSaunaPackage from './Components/CreateSaunaPackage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Transaction from './Pages/Transaction'
import ProtectedRoutes from "./ProtechedRoutes";
import CreateCoupon from "./Components/CreateCoupon";
import Package from "./Pages/CreatePackage"
import Analytics from './Pages/Analytics'
import SignUp from './Pages/Signup'
import CampaignRedeemRecord from './Components/CampaignRedeemRecord.jsx';
import Login from './Pages/Login'
import Cookies from "js-cookie";
import CampainAnalytics from './Components/CampainAnalytics'
import StoreSettings from './Pages/StoreSettings.jsx'

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
        <Route path='/spa/create-package' element={<CreateSpaPackage></CreateSpaPackage>}></Route>
        <Route path='/massage/create-package' element={<CreateMassagePackage></CreateMassagePackage>}></Route>
        <Route path='/sauna/create-package' element={<CreateSaunaPackage></CreateSaunaPackage>}></Route>
        <Route path='/package' element={<Package></Package>}></Route>
        <Route path='/transaction' element={<Transaction></Transaction>}></Route>
        <Route path='/campaign' element={<Campaign></Campaign>}></Route>
        <Route path='/create-coupon' element={<CreateCoupon/>}></Route>
        <Route path='/campaign/analytics' element={<CampainAnalytics/>}></Route>
        <Route path='/campaign/redeemcode' element={<CampaignRedeemRecord></CampaignRedeemRecord>}></Route>
        <Route path='/store-settings' element={<StoreSettings></StoreSettings>}></Route>
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
