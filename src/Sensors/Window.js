import openWindow from "../assets/open_window.png"
import closedWindow from "../assets/closed_window.png"

function Window (props) {
    return (
        <span>
            <div>{props.sensorName}</div>
            <img src={(props.isOpen) ? openWindow : closedWindow} className="window_icon"/>
        </span>
    )
}

export default Window