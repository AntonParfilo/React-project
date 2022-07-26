import React from "react";
import s from "./main_content.module.css";
import Slider from "./slider/slider";
import Product from "../product/product";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsMainAction } from "../../../redux/productsMainSlice";
import { useState } from "react";


const MainContent = function (props) {
  let [fetching, setFetching] = useState(false);
  let [loading, setLoading] = useState(false);
  const [anchor, setAnchor] = useState(0);
  const dispatch = useDispatch();
  const productsMain = useSelector(state => state.productsMain.products);
  const total_length = useSelector(state => state.productsMain.total_length);
  let product_limit = 8;
  
  useEffect(()=> {
      window.addEventListener("scroll", scrollHandler);
      dispatch(getProductsMainAction(product_limit));
      return () => window.removeEventListener("scroll", scrollHandler)
  },[]);
  
  useEffect(()=>{ 
    setFetching(false);
    setLoading(false);
    if( productsMain.length == total_length ){
    }
  }, [productsMain])
  
  useEffect(()=>{
    if(fetching){
      if( productsMain.length == total_length ){}
      else{
      setLoading(true);
      setTimeout(()=> {dispatch(getProductsMainAction(productsMain.length + product_limit));}, 1000);
      }
    }
  },[fetching]);
  
  if(productsMain.length === 0) return <img className="img_loading" src="/img/loading.gif" alt=""></img>;
  function scrollHandler(e){
      const anchor = document.getElementById("anchor");
      let rect = anchor.getBoundingClientRect();
      let top = rect.top;
      let windowHeight = window.innerHeight;
      if(top < (windowHeight -100 )) setFetching(true);
    
  }
  const products_main = productsMain.map((el) => {
    return <Product product={el} dispatch={props.dispatch} key={el.id}/>;
  });
  return (
    <div className="main-content">
      <Slider />
      <div className="row">{products_main}</div>
      <div className={s.anchor_wrapper} id="anchor">
        <img className={loading? `${s.show_loading}` : `${s.loading}`} src="/img/loading.gif" alt=""></img>
      </div>
    </div>
  );
};
export default MainContent;
