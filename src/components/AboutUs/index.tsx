import FancyImage from "../../assets/fancy-image.png";
import "./css/index.css"

const AboutUs = () => {

    return (
        <>
            <div className="landing-view">
                <div>

                    <p className="heading">
                        WORLD'S 1ST
                        CHATGPT-LIKE
                        SALES-ENABLING
                        CHATBOT
                    </p>

                    <br />

                    <p style={{ color: "grey", fontSize: "1.3rem", width: "70%" }}>
                        Build & deplov vour conversational Al chatbot in under 2 minutes.
                        Introducing Oriserve, the globally acclaimed No.1 sales enablement conversational AI, proudly recognized by Google. Our enterprise-grade ORI AI offers an innovative fusion of text chat and voice bot capabilities, designed to elevate your business performance.
                        <br /><br />
                        Experience unparalleled sales growth and customer satisfaction with Ori's cutting-edge conversational AI technology. We prioritize the automation of the customer journey through our seamlessly integrated, multilingual, omnichannel self-service platform, expertly crafted using design thinking principles and state-of-the-art AI.
                        <br /><br />
                        Discover our exceptional cognitive AI solutions, meticulously engineered to provide an unobtrusive customer experience across Sales, Marketing, Support, and Engagement. Our advanced AI technology transcends boundaries, effortlessly interacting with IoT devices, sensors, web, app, social media, and messaging platforms to revolutionize your business landscape.
                    </p>

                </div>

                <div>
                    <img className="fancy-image" src={FancyImage} style={{ width: "120%" }} />
                </div>

            </div>
        </>
    );
}

export default AboutUs;