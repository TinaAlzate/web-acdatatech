import { Link, Route } from "wouter";
import logo from "../assets/images/acarvajalit.jpg"
import "../styles/navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md mb-2 justify-content-sm-around">  
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="Logo"/>
            </Link>
            <button className="navbar-toggler border-0 me-4 me-sm-0" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-grow-0" id="menu">
                <div className="navbar-nav">
                    <Link className="nav-link text-center" to="/">Home</Link>
                    <Link className="nav-link text-center" to="/services">Services</Link>
                    <Link className="nav-link text-center" to="/costumers">Customers</Link>
                    <Link className="nav-link text-center" to="/about">About</Link>
                    <Link className="nav-link text-center" to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
