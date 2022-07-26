import s from "./about_product.module.css";
import { Carousel } from "react-bootstrap";
import "./carousel.css";
import { useDispatch, useSelector } from "react-redux";
import Product from "../product/product";
import { useNavigate, useSearchParams } from "react-router-dom";
import { addToCart } from "../../../redux/cartSlice";
import { useEffect } from "react";
import { getProduct } from "../../../redux/axios";
import { getProductAction, setDefaultState } from "../../../redux/aboutProductSlice";

const AboutProduct = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id_product = searchParams.get("id");
  useEffect(()=> {
    dispatch(getProductAction(id_product));
  }, [id_product]);
  if(state.aboutProduct.length === 0) return <img className="img_loading" src="/img/loading.gif" alt=""></img>;
  if(state.aboutProduct.find(el => el.id === id_product) === undefined) return <img className="img_loading" src="/img/loading.gif" alt=""></img>;
  const products = state.aboutProduct;
  const product = state.aboutProduct.find((el) => el.id === id_product);
  const category = state.categories.find((el) => el.id === product.category);
  const productsCategory = products;
  const products_main = productsCategory.map((el) => {
    return <Product product={el} dispatch={dispatch} key={el.id} />;
  }); 
  const addProductToCart = () => {
    dispatch(addToCart(product));
  }
  const goBuy = () => {
    dispatch(addToCart(product));
    navigate("/cart");
  }
  const category_name = state.categories.find((el) => el.id === product.category);
  return (
    <div>
      <div className={`${s.product_header} row`}>
        <p>
          {category.description} -&gt; {product.name}
        </p>
      </div>
      <div className={`${s.product_content} row`}>
        <div className={`${s.lc} col-md-5`}>
          <Carousel className={s.carousel}>
          <Carousel.Item>
            <img src={product.img} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={product.img2} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={product.img3} alt="First slide" />
          </Carousel.Item>
          </Carousel>
        </div>
        <div className={`${s.rc} col-md-7`}>
          <div className={s.rc_header}>
            <p>${product.price}</p>
            <button onClick={goBuy} className={s.but_buy}>Купить</button>
            <button onClick={addProductToCart} className={s.but_cart}> В корзину</button>
          </div>
          <div className={s.rc_content}>
            <p className={s.product_name}>
              {product.name}
            </p>
            <p>
              {product.description}
            </p>
          </div>
        </div>
      </div>
      <h3>Другие товары из категории {category_name.description}</h3>
      <div className={`${s.footer} row`}>{products_main}</div>
    </div>
  );

};
export default AboutProduct;
