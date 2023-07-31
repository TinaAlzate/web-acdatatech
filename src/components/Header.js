import "../styles/header.css"
import imagen from "../assets/images/header.png"

const Header = () => {
    return (
        <div className="contain-header m-auto">
            <div className="circle"></div>
            <div className="sub-contain m-auto row flex-row">
                <div className="contain-text col-lg-7 m-auto pt-5 pt-lg-0 ps-lg-5 text-lg-start align-items-lg-start row">
                    <h1 className="col-sm-10 col-lg-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                    <p className="col-sm-10 col-lg-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <button className='btn col-auto ms-lg-3'>Contact</button>
                </div>
                <div className="contain-img m-auto col-8 col-md-7 col-lg-5">
                    <img src={imagen} alt="Header-acarvajal" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
}

export default Header;
