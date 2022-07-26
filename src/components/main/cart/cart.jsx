import React from "react";
import s from "./cart.module.css";
import CartProduct from "./cart_product/cart_product";
import { useSelector } from "react-redux/es/exports";
import Button from "../button/button";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { sendOrderAction } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";


const Cart = (props) => {
  let [errName, setErrName] = useState(false);
  let [errLastName, setErrLastName] = useState(false);
  let [errEmail, setErrEmail] = useState(false);
  let [errPhone, setErrPhone] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  const state_order = (e) => {};

  let elements_cart = useSelector((state) => state.cart).map((el) => {
    return <CartProduct product={el} func={state_order} key={el.id} />;
  })

  let total = useSelector((state) => state.cart).reduce(
    (akm, el) => {
      akm[0] += el.price * el.quantity;
      akm[1] += 1 * el.quantity;
      return akm;
    },
    [0, 0]
  );

  let [userName, changeUserName] = useState("");
  const setUserName = (e) => {
    changeUserName((userName = e.target.value));
  };

  let [userLastName, changeUserLastName] = useState("");
  const setUserLastName = (e) => {
    changeUserLastName((userLastName = e.target.value));
  };

  let [userEmail, changeUserEmail] = useState("");
  const setUserEmail = (e) => {
    changeUserEmail((userEmail = e.target.value));
  };

  let [userPhone, changeUserPhone] = useState("");
  const setUserPhone = (e) => {
    changeUserPhone((userPhone = e.target.value));
  };

  let ifshow = false;
  if (state.length > 0) ifshow = true;

  const setOrder = (order) => {
    const user_data = {
      user_name: userName,
      user_lastName: userLastName,
      user_email: userEmail,
      user_phone: userPhone,
    };
    if (user_data.user_name.length < 3 || user_data.user_name.length > 30)
      setErrName((errName = true));
    else if (!/^[а-яА-Яa-zA-Z0-9]+$/.test(user_data.user_name))
      setErrName((errName = true));
    else setErrName((errName = false));

    if (
      user_data.user_lastName.length < 3 ||
      user_data.user_lastName.length > 30
    )
      setErrLastName((errLastName = true));
    else if (!/^[а-яА-Яa-zA-Z0-9]+$/.test(user_data.user_lastName))
      setErrLastName((errLastName = true));
    else setErrLastName((errLastName = false));

    var EMAIL_REGEXP =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!EMAIL_REGEXP.test(user_data.user_email))
      setErrEmail((errEmail = true));
    else setErrEmail((errEmail = false));

    if (user_data.user_phone.length < 9 || user_data.user_phone.length > 9)
      setErrPhone((errPhone = true));
    else if (!/^[0-9]+$/.test(user_data.user_phone))
      setErrPhone((errPhone = true));
    else setErrPhone((errPhone = false));

    if(!errName && !errLastName && !errEmail && !errPhone ){
      
      const relocate = () => navigate("/order_success");
      let order_items = state.map((el)=>{
        return {"id": el.id, "quantity" : el.quantity}
      });
      dispatch(
        sendOrderAction({
          user_data,
          order_items,
          relocate: relocate,
        })
      );
      
    }
  };

  return (
    <div className={s.cart_wrapper}>
      <div className="row">
        <div className={`${s.cart_hedaer} col-md-12`}>
          <svg className={s.cart_header_img}>
            <use xlinkHref="/img/navbar/cart_image.svg#icon-header-basket"></use>
          </svg>
          <span>КОРЗИНА</span>
        </div>
      </div>
      <div className={`${s.cartNoItems} ${ifshow ? s.hidden : ""}`}>
        <h3>Ваша корзина пуста.</h3>
      </div>
      <div className={`${s.cartBodyWrapper} ${ifshow ? "" : s.hidden}`}>
        <div className="row">{elements_cart}</div>
        <div className={`${s.cartFooter} row`}>
          <div className={`${s.footerLc} col-md-6`}>
            <label className="form-label">First Name</label>
            <input
              onChange={(e) => setUserName(e)}
              className={`form-control ${errName ? s.invalid : ""}`}
              type="text"
              value={userName}
            />
            <label className="form-label">Last Name</label>
            <input
              onChange={(e) => setUserLastName(e)}
              className={`form-control ${errLastName ? s.invalid : ""}`}
              type="text"
              value={userLastName}
            />
            <label className="form-label">Email</label>
            <input
              onChange={(e) => setUserEmail(e)}
              className={`form-control ${errEmail ? s.invalid : ""}`}
              type="text"
              value={userEmail}
            />
            <label className="form-label">Phone</label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon3">
                +380
              </span>
              <input
                onChange={(e) => setUserPhone(e)}
                className={`form-control ${errPhone ? s.invalid : ""}`}
                type="text"
                id="basic-url"
                value={userPhone}
              />
            </div>
          </div>
          <div className={`${s.footerRc} col-md-6`}>
            <h3 className={s.footer_tittle}>Итого</h3>
            <div className="row">
              <p className={s.footer_pr}>{total[1]} товара на сумму</p>
              <p className={s.footer_total}>${total[0]}</p>
            </div>
            <div className="row">
              <p className={s.footer_name}><b>Имя: </b>{userName}</p>
              <p className={s.footer_lastname}><b>Фамилия: </b>{userLastName}</p>
            </div>
            <div className="row">
              <p className={s.footer_email}><b>Почта: </b>{userEmail}</p>
              <p className={s.footer_phone}><b>Телефон</b>: {userPhone}</p>
            </div>
            <div className={s.my_button}>
              <Button value="Отправить заказ" func={setOrder} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
