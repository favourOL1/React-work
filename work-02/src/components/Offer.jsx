import icon from "../assets/icon.png";


function Offer() {

    return (
        <div className="offers">

            <img alt="icon" src={icon} />

            <div>

                <h3 style={{margin: 0}}>Basic Fitness</h3>

                <p style={{marginTop: "10px", }}> 
                    Get fit, feel fit, and stay fit. maintaining a good level of physical fitness is important.
                </p>

                <a>Discover More</a>
            </div>

        </div>
    )
}

export default Offer