import React from "react";
import s from "./about_filters.module.css"


const Filter = (props)=>{
    return(
        <div className={s.char}>
              <div className={`${s.char_lc} col-md-6`}>{props.element.name}</div>
              <div className={`${s.char_rc} col-md-6`}> {props.element.value} </div>
        </div>
    )
}
export default Filter;