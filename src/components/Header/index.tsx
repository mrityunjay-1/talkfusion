import { useNavigate } from "react-router-dom";
import "./css/index.css";
import { useState } from "react";
import Logo from "../../../public/logo.png";

const Header = () => {

    const navigate = useNavigate();

    const [showLeftPanel, setShowLeftPanel] = useState(false);

    const showHideLeftPanel = () => {
        const LeftPanel = document.getElementById("left-panel");
        LeftPanel?.classList.toggle("active");
        setShowLeftPanel(!showLeftPanel);
    }

    return (
        <>

            {/* Mobile Header area started */}
            <div className="mobile-header">
                <div onClick={() => navigate("/")} > <img src={Logo} style={{width: "40%"}} /> </div>
                <div> <button onClick={() => navigate("/trydemo")} className="link-as-button">Try Demo</button> </div>
                <div style={{ cursor: "pointer" }} onClick={() => showHideLeftPanel()}> {!showLeftPanel ? <> &#9776; </> : <> &times; </>} </div>
            </div>

            {/* Left Side Panel */}

            <div id="left-panel" className="left-panel">

                <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                    <h1>TalkFusion</h1>
                    <p style={{ fontSize: "0.9rem", textAlign: "right" }}>Powered by Oriserve</p>
                </div>

                <hr />

                <br /><br />

                <button onClick={() => navigate("/aboutus")} className="link">About Us</button>
                <button onClick={() => navigate("/product")} className="link">Features</button>
                <button onClick={() => navigate("/feedback")} className="link">Feedback</button>
                <button onClick={() => navigate("/contactus")} className="link">Contact Us</button>


                <button onClick={() => navigate("/trydemo")} className="link-as-button">Try Demo</button>

            </div>

            {/* Mobile Header area ended */}


            <div className="header">

                {/* Logo Area */}

                <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                    <h1>TalkFusion</h1>
                    <p style={{ fontSize: "0.9rem", textAlign: "right" }}>Powered by Oriserve</p>
                </div>

                {/* Links Area */}
                <div>

                    {/* <a href="/aboutus">About Us</a>
                    <a href="/product">Features</a>
                    <a href="/feedback">Feedback</a>
                    <a href="/contactus">Contact Us</a> */}
                    <button onClick={() => navigate("/aboutus")} className="link">About Us</button>
                    <button onClick={() => navigate("/product")} className="link">Features</button>
                    <button onClick={() => navigate("/feedback")} className="link">Feedback</button>
                    <button onClick={() => navigate("/contactus")} className="link">Contact Us</button>


                    <button onClick={() => navigate("/trydemo")} className="link-as-button">Try Demo</button>

                </div>

            </div>

        </>
    );

}

export default Header;