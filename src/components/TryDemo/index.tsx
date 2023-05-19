import FancyImage from "../../assets/fancy-image.png";
import "./css/index.css";

import TourismImage from "../../assets/tourism.jpg";
import TeslaImage from "../../assets/tesla.webp";

const AboutUs = () => {

    return (
        <>
            <div className="landing-view-try-demo">
                <div>

                    <div>
                        <img src={TourismImage} style={{ width: "100%", height: "20rem" }} />

                        <br /><br />

                        <p style={{ width: "100%", color: "darkgrey", fontSize: "1.5rem" }}>
                            Introducing the Thomas Cook Voice Bot - your personal, intelligent, and conversational travel assistant! Seamlessly powered by advanced generative capabilities, our smart voice bot helps you discover the finest destinations and hotels tailored to your preferences. Embark on unforgettable journeys with Thomas Cook, as our voice bot effortlessly guides you to the best travel experiences. Travel planning has never been this impressive and efficient!
                        </p>

                        <br /><br /> <br />

                        <a target="_blank" href="https://wvb.netlify.app/?isBotOpen=true&botName=tourism" className="anchorbutton">Try me</a>

                    </div>

                    <div>

                        <img src={TeslaImage} style={{ width: "100%", height: "20rem" }} />
                        
                        <br /><br />
                        
                        <p style={{ width: "100%", color: "darkgrey", fontSize: "1.5rem" }}>
                            Introducing the Tesla Voice Bot - your personal, intelligent assistant to guide you through the world of Tesla products. With its advanced conversational skills and generative capabilities, this smart voice bot effortlessly understands your needs and preferences, helping you discover the perfect Tesla solution tailored just for you. Experience the future of product assistance with this innovative and remarkably user-friendly voice companion.
                        </p>

                        <br /><br /><br />

                        <a target="_blank" href="https://wvb.netlify.app/?isBotOpen=true&botName=tesla" className="anchorbutton">Try me</a>

                    </div>

                </div>

                <div>
                    <img className="fancy-image" src={FancyImage} style={{ width: "120%" }} />
                </div>

            </div>
        </>
    );
}

export default AboutUs;