import { Link } from 'react-router-dom';

const PackageSideBar = () => {

    const isActive = (path) => {
        return location.pathname === path ? 'active grey-active' : '';
    };

    return (
        <>
            <span><Link style={{textDecoration:'none'}} className={`${isActive('/create-coupon')}`} to="/create-package">Coupon Setup</Link></span>
            <span><Link style={{textDecoration:'none'}} className={`${isActive('/availability')}`} to="/availability">Analytics (soon)</Link></span>
        </>
    )
}

export default PackageSideBar