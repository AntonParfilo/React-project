import React from "react";
import s from "./product.module.css";
import Button from "../button/button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Product = function (props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const addProductToCart = () => {
        dispatch(addToCart(props.product));
    }
    const goToProduct = () => {
        navigate("/product?id="+props.product.id);
    }
    return(
            <div className="col-lg-3 col-sm-6">
                <div className={s.product} id = {props.product.id}>
                    <div className={s.img_wrapper} >
                    <img onClick={goToProduct} src={props.product.img} alt={props.product.description} />
                    </div>
                    <div className={s.tittle_wrapper}>
                    <p onClick={goToProduct} className={s.product_title}>{props.product.name.substring(0,50)}</p>
                    </div>
                    <p className={s.price}>${props.product.price}</p>
                    <Button func={addProductToCart} value="Добавить в корзину" />
                </div>
            </div>
    )
}
export default (
    Product
)