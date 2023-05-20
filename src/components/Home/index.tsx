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

                    <p className="heading">
                        GENERATIVE VOICE BOT FOR INTERACTIVE SALES, SUPPORT AND EVERYTHING IN BETWEEN DEPLOY ON VOIP AND PSTN.
                    </p>

                    <br />


                    <p style={{ color: "grey", fontSize: "1.3rem", width: "70%" }}>
                        Flip the script on inbound + outbound voice operations to drive better outcomes at a lower cost.
                    </p>

                    <br /><br /><br /><br />

                    <h1 className="coming-soon">Coming Soon...</h1>

                    <br /><br /><br />

                    <button className="link-as-button" id="notify-me" > Notify me </button>

                </div>

                <div>
                    <img className="fancy-image" src={FancyImage} style={{ width: "120%" }} />
                </div>

            </div>
        </>
    )
}

export default App
