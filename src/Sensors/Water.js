import wetSponge from "../assets/wet_sponge.png"
import drySponge from "../assets/dry_sponge.png"

function Water (props) {
    return (
        <span>
            <div>{props.sensorName}</div>
            <img src={(props.isDry) ? drySponge : wetSponge} className="water_icon"/>
        </span>
    )
}

export default Water