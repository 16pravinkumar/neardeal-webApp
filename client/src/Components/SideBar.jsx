import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import aiLogo from "../assets/aiLogo.svg";
import campaign from "../assets/campaign.svg";
import analytics from "../assets/analytics.svg";
import transaction from "../assets/transaction.svg";
import storeSetting from "../assets/storeSetting.svg";
import booking from "../assets/booking.svg";
import packageLogo from "../assets/package.svg";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const SideBar = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            // Step 1: Retrieve the cookie value
            var cookieValue = Cookies.get('user_token');

            // Convert JSON string to JavaScript object
            cookieValue = JSON.parse(cookieValue);

            console.log("Cookie Value:", cookieValue); // Log the cookie value
            
            if (cookieValue) {
                try {
                    var payload = {
                        ID: cookieValue.ID
                    }

                    // Fetch user data
                    const response = await fetch('https://wellness.neardeal.me/WAPI/fetchUserData.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(payload)
                    });

                    const userData = await response.json();
                    setUserData(userData);
                    setLoading(false); // Set loading to false after data is fetched
                    console.log("User Data:", userData); // Log the user data

                } catch (error) {
                    console.error('Failed to parse JSON from cookie or fetch user data:', error);
                    setLoading(false); // Set loading to false in case of error
                }
            } else {
                console.log('No cookie found');
                setLoading(false); // Set loading to false if no cookie is found
            }
        };

        fetchData();
    }, []);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <div className="sidebar">
            <div className="sidebar-navigation">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <span className="sidebar-subtitle">CUSTOMER</span>
                <div className="sidebar-list">
                    <span className={isActive('/')}>
                        <img src={booking} alt="Booking" />
                        <Link style={{ textDecoration: 'none' }} to="/">Booking</Link>
                    </span>
                    <span className={isActive('/package') || isActive('/availability') || isActive('/limits') || isActive('/sauna/create-package') || isActive('/massage/create-package') || isActive('/spa/create-package')}>
                        <img src={packageLogo} alt="Package" />
                        <Link style={{ textDecoration: 'none' }} to='/package'>Package</Link>
                    </span>
                </div>
                <span className="sidebar-subtitle">STORE</span>
                <div className="sidebar-list">
                    <span className={isActive('/campaign') || isActive('/create-coupon') || isActive('/campaign/redeemcode')}>
                        <img src={campaign} alt="Campaign" />
                        <Link style={{ textDecoration: 'none' }} to="/campaign">Campaign</Link>
                    </span>
                    <span className={isActive('/analytics')}>
                        <img src={analytics} alt="Analytics" />
                        <Link style={{ textDecoration: 'none' }} to="/analytics">Analytics</Link>
                    </span>
                    <span className={isActive('/transaction')}>
                        <img src={transaction} alt="Transaction" />
                        <Link style={{ textDecoration: 'none' }} to="/transaction">Transaction</Link>
                    </span>
                    <span className={isActive('/store-settings')}>
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
                {/* <img src={`${userData && userData.Link}`} alt="Profile" /> */}
                <span>{ userData && userData.Name }</span>
             <span style={{ fontWeight: "400", color: 'grey' }}>bharatsharma98971@gmail.com</span>
             
            </div>
        </div>
    );
}

export default SideBar;
