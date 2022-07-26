import React from "react";
import s from "./cart_product.module.css";
import { useDispatch } from "react-redux/es/exports";
import { removeItem, setQuantity } from "../../../../redux/cartSlice";

const CartProduct = function (props) {
  const dispatch = useDispatch();
  const start_price = props.product.price;
  let ptsum = start_price*props.product.quantity;
  const setPqty = (e)=>{
    if(e === "+" && props.product.quantity < 10){
      dispatch(setQuantity({id : props.product.id, operator : "+"}));
      ptsum = ptsum + start_price;
      props.func({action: "+", value: props.product.price});
    }
    if(e === "-" && props.product.quantity > 1){
      dispatch(setQuantity({id : props.product.id, operator : "-"}));
      ptsum = ptsum - start_price;
      props.func({action: "-", value: props.product.price});
    } 
  };

  const removeItemCart= (id) => {
     let conf = window.confirm("Удалить из корзины?");
     conf? dispatch(removeItem(id)) : console.log();
  }

  return (
    <div className={`${s.cart_product} row`}>
      <div className="col-md-2">
        <img
          className={s.cart_product_img}
          src={props.product.img}
          alt={props.product.description}
        />
      </div>
      <div className={`${s.cartRc} col-md-10`}>
        <div className="row">
          <div className={`${s.block1} col-md-12`}>
            <p className={s.product_title}>{props.product.name}</p>
            <svg onClick={(e)=> removeItemCart(props.product.id)} className={s.removeImg}>
              <use xlinkHref="/img/cart/remove.svg#icon-close-modal"></use>
            </svg>
          </div>
        </div>
        <div className={`${s.cartRcb} row`}>
          <div className={`${s.cartRcbl}`}>
            <p onClick={(e)=> setPqty("-")} className={`${s.productNumChange} ${s.rightChangeMinus}`}>-</p>
            <p onClick={(e)=>{setPqty("+")}} className={`${s.productNumChange} ${s.rightChangePlus}`}>+</p>
            <p className={`${s.productNum} ${s.rightChange}`}>{props.product.quantity}</p>
          </div>
          <div className={`${s.block2}`}>
            <p className={s.price}>${ptsum}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartProduct;
