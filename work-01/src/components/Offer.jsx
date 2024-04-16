import icon from "../assets/icon.png";

const style = {
    height: "100px", 
    display: "flex",
    flexBasis: "48%",
    flexShrink: "0",
    gap: "24px"
}


function Offer() {

    return (
        <div style={style}>

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