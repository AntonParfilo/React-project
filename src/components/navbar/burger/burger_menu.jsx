import React from "react";
import { useSelector } from "react-redux";
import Categories from "../../toolbar/categories/categories";
import s from "./burger_menu.module.css"


const BurgerMenu = ()=>{
    const isOpen = useSelector(state => state.menu);
    const state = useSelector((state) => state.categories);
    const categories = state.map((value) => {
        return <Categories categories={value} key={value.id} />;
      });

    return(
        <div className={s.menu_wrapper}>
            <div className={isOpen? `${s.menu} ${s.open}` : `${s.menu} ${s.close}`} id="burger_menu">
            {categories}
            </div>
        </div>
    )
}
export default BurgerMenu;