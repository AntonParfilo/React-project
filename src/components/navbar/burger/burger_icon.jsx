import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../../redux/menuSlice";
import s from "./burger_icon.module.css";


const BurgerIcon = ()=>{
    let isOpen = useSelector(state => state.menu);
    const dispatch = useDispatch();

    function func(el){
        dispatch(setMenu(!isOpen))
    }

    
    return(
        <div className={s.icon_wrapper} onClick={func}>
           <div className={isOpen? `${"open"}` : ``} id="nav-icon2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>
    )
}
export default BurgerIcon;