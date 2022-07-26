import React from "react";
import s from "./filter_category.module.css"


const FilterCategory = (props)=>{
    const md5 = require('md5');
    const options = props.element.map((el)=>{
        return <option key={md5(el)}>{el}</option>
    });
    const id = md5(props.element[0]);
    return(
        <select onChange={props.func} id={id} className={`${s.filter} form-select`} aria-label="Default select example">
            {options}
        </select>
    )
}
export default FilterCategory;