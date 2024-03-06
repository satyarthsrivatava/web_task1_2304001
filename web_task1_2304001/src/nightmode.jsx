import React from 'react'
import ReactDOM from 'react-dom'
let dir = true;

function clicked() {
    if (dir == true) {
        document.body.style.backgroundColor = "#212529";
        document.body.style.color = "#f0f8ff";
    } else {
        document.body.style.backgroundColor = "aliceblue";
        document.body.style.color = "#212529";
    }
    dir = !dir;
}
function NightMode(props) {
    
    return (
        <div className="nightmode">
            <button className="btn" onClick={clicked}>Night Mode</button>
        </div>
    )
}
export default NightMode