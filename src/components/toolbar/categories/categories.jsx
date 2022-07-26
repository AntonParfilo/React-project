import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setMenu } from "../../../redux/menuSlice";
import s from "./categories.module.css";

const Categories = (props) => {
  const dispatch = useDispatch();
  function func(){
    setTimeout(()=>{dispatch(setMenu(false))},500);
  }
    return(
      <div className={s.item_wrapper} >
        <div className={s.catalog_item}>
        <svg className={s.catalog_item_img}>
          <use xlinkHref={ props.categories.image }></use>
        </svg>
        <NavLink to={`/category?id=${props.categories.id}`} onClick={func} className={s.catalog_item_name}>{ props.categories.description }</NavLink>
        <div className={s.border} ></div>      
      </div>
      </div>
    )
}
export default(
    Categories
)