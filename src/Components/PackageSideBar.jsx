import { Link } from 'react-router-dom';

const PackageSideBar = () => {
    return (
        <>
            <span><Link to="/create-package">Package Setup</Link></span>
            
            <span><Link to="/availability">Availability</Link></span>
            <span><Link to="/limits">Limits</Link></span>
        </>
    )
}

export default PackageSideBar