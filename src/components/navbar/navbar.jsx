import React from "react";
import { NavLink } from "react-router-dom";
import s from "./navbar.module.css";
import { useSelector, useDispatch } from "react-redux";
import BurgerIcon from "./burger/burger_icon";
import { setMenu } from "../../redux/menuSlice";

const Navbar = (props) => {
  let num_cart = useSelector(state => state.cart).length;
  const dispatch = useDispatch();
  
  function func(){
    setTimeout(()=>{dispatch(setMenu(false))},500);
  }

  return (
    <div className={s.nav_bar_wrapper} >
    <div className={s.nav_bar}>
      <div className={`${s.nav_bar_item} ${s.nav_bar_logo}`}>
        <img src="../img/navbar/logo.png" alt="logo" />
      </div>
      <BurgerIcon />
      <div>
        <NavLink
          onClick={func}
          to="/"
          className={({ isActive }) =>
            isActive ? `${s.nav_bar_item} ${s.active}` : s.nav_bar_item
          }
        >
          Главная
        </NavLink>
      </div>
      <div>
        <NavLink
          onClick={func}
          to="/about"
          className={({ isActive }) =>
            isActive ? `${s.nav_bar_item} ${s.active}` : s.nav_bar_item
          }
        >
          О проекте
        </NavLink>
      </div>
      <div className={s.nav_cart}>
        <NavLink to="/cart">
          <p className={s.cart_value}>{num_cart? num_cart : ``}</p>
          <svg className={s.cart_icon}>
            <use xlinkHref="/img/navbar/cart_image.svg#icon-header-basket"></use>
          </svg>
        </NavLink>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
