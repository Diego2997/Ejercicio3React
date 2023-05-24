import { useState } from "react";

const Hello = (props) => {
const [mensaje,setMensaje] = useState("")
    return (
        <div>
            <h1>Hello {props.myFriend} {mensaje}!</h1>
            <button type="button" onClick={()=>setMensaje("(from changed state)")}>Clickeame</button>
        </div>
    );
};

export default Hello;