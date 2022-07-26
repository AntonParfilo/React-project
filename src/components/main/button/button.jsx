import React from "react";
import s from"./button.module.css";


const Button = function (props) {
    return(
        <div onClick={props.func}>
            <p className={s.but}>{props.value}</p>
        </div>
    )
}
export default Button
