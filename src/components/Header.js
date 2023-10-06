import {Link} from 'react-router-dom';

function Header(){
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link className="navbar-brand" to="/">RuShLuSh</Link>
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/categories">Categories</Link>
                </li>
                {/* Customer Panel */}
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        My Account
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/customer/register">Register</Link></li>
                        <li><Link className="dropdown-item" to="/customer/login">Login</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="/customer/dashboard">Dashboard</Link></li>
                        <li><Link className="dropdown-item" to="/customer/login">Logout</Link></li>
                    </ul>
                </li>
                {/* Vendor Panel */}
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Vendor Panel
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/seller/register">Register</Link></li>
                        <li><Link className="dropdown-item" to="/seller/login">Login</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="/seller/dashboard">Dashboard</Link></li>
                        <li><Link className="dropdown-item" to="/seller/login">Logout</Link></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/checkout">New Orders (4)</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/checkout">My Cart (4)</Link>
                </li>
                </ul>
            </div>
        </div> 
    </nav>
    )
}

export default Header;



