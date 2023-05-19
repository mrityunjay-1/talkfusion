import "./css/index.css";

const ProductDetailsPage = () => {
    return (
        <>

            {/* <h1 style={{ padding: "1rem 3rem", color: "white" }}>Feature that gets you result</h1> */}

            <div className="grid-container">

                <div>
                    <h1 className="heading" style={{ fontSize: "3rem", color: "white" }}>FEATURES THAT GET YOU RESULTS</h1>
                </div>

                {/* left long */}
                <div>
                    <h1>Multi model deployment</h1>
                    <p>VoIP (In app, Web) and PSTN</p>
                </div>

                <div>
                    <h1>Dialler & Telephony</h1>
                </div>

                <div>
                    <h1>Inbound + Outbound Call Handling</h1>
                </div>

                <div>
                    <h1>Multilingual</h1>
                </div>

                <div>
                    <h1>Goal seeking AI</h1>
                </div>

                <div>
                    <h1>Contextual</h1>
                </div>
            </div>

        </>
    );
}

export default ProductDetailsPage;