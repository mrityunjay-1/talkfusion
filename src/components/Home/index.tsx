import "./css/index.css";

import FancyImage from "../../assets/fancy-image.png";

function App() {

    return (
        <>

            {/* <div style={{position: "absolute", bottom: "3%", width: "100%"}}>
            <h1 style={{color: "white", textAlign: "center"}}>^^ Keep Going Down for trail ^^</h1>
            </div> */}


            <div className="landing-view">
                <div>

                    <p className="heading" style={{ color: "white", fontSize: "4.5rem", }}>
                        GENERATIVE VOICE BOT FOR INTERACTIVE SALES, SUPPORT AND EVERYTHING IN BETWEEN DEPLOY ON VOIP AND PSTN.
                    </p>

                    <br />


                    <p style={{ color: "grey", fontSize: "1.3rem", width: "70%" }}>
                        Flip the script on inbound + outbound voice operations to drive better outcomes at a lower cost.
                    </p>

                    <br /><br /><br /><br />

                    <h1 style={{ color: "rgb(26, 172, 24)", fontSize: "5rem" }}>Coming Soon...</h1>

                    <br /><br /><br />

                    <a style={{ fontSize: "2.3rem", padding: "2rem 5rem", color: "white", borderRadius: "0.4rem", background: "linear-gradient(to top right, green, lightgreen)" }}>Notify me</a>

                </div>

                <div>
                    <img className="fancy-image" src={FancyImage} style={{ width: "120%" }} />
                </div>

            </div>
        </>
    )
}

export default App
