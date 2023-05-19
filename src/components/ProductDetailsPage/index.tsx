import { useState } from "react";
import "./css/index.css";
import "./css/modal.css";


const ModalForFeatureDescription = ({ currentSelectedFeature, onCloseModal }: any) => {
    return (

        <div className="modalForFeature">

            <h1 onClick={onCloseModal} style={{ cursor: "pointer", position: "absolute", top: "2%", right: "2%", color: "white", fontSize: "3rem" }}>&times;</h1>

            {currentSelectedFeature}
        </div>

    );
}


const ProductDetailsPage = () => {

    const [showModal, setShowModal] = useState(false);

    const [currentSelectedFeature, setCurretSelectedFeature]: any = useState("");

    const handleModalView: any = () => {
        setShowModal(true);
        setCurretSelectedFeature("");
    }

    return (
        <>

            {
                showModal ?
                    <ModalForFeatureDescription
                        currentSelectedFeature={currentSelectedFeature}
                        onCloseModal={() => setShowModal(false)}
                    />
                    :
                    null
            }

            {/* <h1 style={{ padding: "1rem 3rem", color: "white" }}>Feature that gets you result</h1> */}

            <div className="grid-container">

                <div>
                    <h1 className="heading" style={{ fontSize: "3rem", color: "white" }}>FEATURES THAT GET YOU RESULTS</h1>
                </div>

                {/* Will convert this thing below with JSON format to minimize the code */}

                {/* left long */}
                <div onClick={handleModalView}>
                    <h1>Multi model deployment</h1>
                    <p>VoIP (In app, Web) and PSTN</p>
                </div>

                <div onClick={handleModalView}>
                    <h1>Dialler & Telephony</h1>
                </div>

                <div onClick={handleModalView}>
                    <h1>Inbound + Outbound Call Handling</h1>
                </div>

                <div onClick={handleModalView}>
                    <h1>Multilingual</h1>
                </div>

                <div onClick={handleModalView}>
                    <h1>Goal seeking AI</h1>
                </div>

                <div onClick={handleModalView}>
                    <h1>Contextual</h1>
                </div>
            </div>

        </>
    );
}

export default ProductDetailsPage;