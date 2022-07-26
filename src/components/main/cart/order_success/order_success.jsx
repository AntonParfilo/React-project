import React from "react";
import { useDispatch } from "react-redux";
import { clear } from "../../../../redux/cartSlice";
import  s  from "./order_success.module.css"



const OrderSuccess = () => {
    const dispatch = useDispatch();
    dispatch(clear());
    
    return(
        <div>
            <h3>Заказ успешно занесён в базу.</h3>
        </div>
    )
}
export default OrderSuccess;