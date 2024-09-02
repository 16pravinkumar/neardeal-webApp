import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import aiLogo from "../assets/aiLogo.svg";
import campaign from "../assets/campaign.svg";
import analytics from "../assets/analytics.svg";
import transaction from "../assets/transaction.svg";
import staff from "../assets/staff.svg";
import storeSetting from "../assets/storeSetting.svg";
import booking from "../assets/booking.svg";
import packageLogo from "../assets/package.svg";
import chat from "../assets/chat.svg";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const SideBar = () => {
    const [email, setEmail] = useState(null);
    const location = useLocation();

    useEffect(() => {
        // Step 1: Retrieve the cookie value
        const cookieValue = Cookies.get('user_token'); // or use document.cookie for vanilla JS

        if (cookieValue) {
            try {
                // Step 2: URL decode the cookie value
                const decodedString = decodeURIComponent(cookieValue);

                // Step 3: Parse the JSON string
                const data = JSON.parse(decodedString);

                // Set email to state
                setEmail(data.email);

                console.log(data); // { email: 'bharatsharma98971@gmail.com', ID: '104' }
            } catch (error) {
                console.error('Failed to parse JSON from cookie:', error);
            }
        } else {
            console.log('No cookie found');
        }
    }, []);

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <div className="sidebar">
            <div className="sidebar-navigation">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <span className="sidebar-subtitle">CUSTOMER</span>
                <div className="sidebar-list">
                    <span className={`${isActive('/')}`}>
                        <img src={booking} alt="Booking" />
                        <Link style={{ textDecoration: 'none' }} to="/">Booking</Link>
                    </span>
                    <span className={`${isActive('/package')} ${isActive('/availability')} ${isActive('/limits')} ${isActive('/sauna/create-package')} ${isActive('/massage/create-package')} ${isActive('/spa/create-package')}`}>
                        <img src={packageLogo} alt="Package" />
                        <Link style={{ textDecoration: 'none' }} to='/package'>Package</Link>
                    </span>
                </div>
                <span className="sidebar-subtitle">STORE</span>
                <div className="sidebar-list">
                    <span className={`${isActive('/campaign')} ${isActive('/create-coupon')} ${isActive('/campaign/redeemcode')}`}>
                        <img src={campaign} alt="Campaign" />
                        <Link style={{ textDecoration: 'none' }} to="/campaign">Campaign</Link>
                    </span>
                    <span className={`${isActive('/analytics')}`}>
                        <img src={analytics} alt="Analytics" />
                        <Link style={{ textDecoration: 'none' }} to="/analytics">Analytics</Link>
                    </span>
                    <span className={`${isActive('/transaction')}`}>
                        <img src={transaction} alt="Transaction" />
                        <Link style={{ textDecoration: 'none' }} to="/transaction">Transaction</Link>
                    </span>
                    <span className={`${isActive('/store-settings')}`}>
                        <img src={storeSetting} alt="Store Setting" />
                        <Link style={{ textDecoration: 'none' }} to="/store-settings">Store Setting</Link>
                    </span>
                    <span>
                        <img src={aiLogo} alt="Near.AI" />
                        Near.AI
                    </span>
                </div>
            </div>

            <div className="sidebar-profile">
                <img src="https://avatars.githubusercontent.com/u/97161064?v=4" alt="Profile" />
                <span>Hudson Alvarez</span>
                <span style={{ fontWeight: "400", color: 'grey' }}>{email}</span>
            </div>
        </div>
    );
}

export default SideBar;
