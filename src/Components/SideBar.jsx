import logo from "../assets/logo.svg";
import aiLogo from  "../assets/aiLogo.svg";
import campaign from "../assets/campaign.svg";
import analytics from "../assets/analytics.svg";
import transaction from "../assets/transaction.svg"
import staff from "../assets/staff.svg"
import storeSetting from "../assets/storeSetting.svg"
import booking from "../assets/booking.svg"
import packageLogo from "../assets/package.svg"
import chat from "../assets/chat.svg"
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <>
        <div className="sidebar">
            <div className="sidebar-navigation"> 
                <div className="logo">
                    <img src={logo}></img>
                </div>
                <span className="sidebar-subtitle">CUSTOMER</span>
                <div className="sidebar-list">
                    <span>
                       <img src={booking}></img>
                        <Link to='/'>Booking</Link>
                    </span>
                    <span>
                       <img src={packageLogo}></img>
                        <Link to='/create-package'>Package</Link>
                    </span>
                    {/* <span>
                       <img src={chat}></img>
                        Chat
                    </span> */}
                </div>
                <span className="sidebar-subtitle">STORE</span>
                <div className="sidebar-list">
                    <span>
                       <img src={campaign}></img>
                        Campaign
                    </span>
                    <span>
                      <img src={analytics}></img>
                        Analytics
                    </span>
                    <span>
                        <img src={transaction}></img>
                        Transaction
                    </span>
                    {/* <span>
                        <img src={staff}></img>
                        Staff
                    </span> */}
                    <span>
                        <img src={storeSetting}></img>
                        Store Setting
                    </span>
                    <span>
                    <img src={aiLogo}></img>
                    Near.AI
                    </span>
                </div>
            </div>

            <div className="sidebar-profile">
                <img src="https://avatars.githubusercontent.com/u/97161064?v=4"></img>
                <span>Hudson Alvarez</span>
                <span style={{fontWeight:"400", color:'grey'}}>hudson.alvarez@gmail.com</span>
            </div>
        </div>
        </>
    )
}

export default SideBar
