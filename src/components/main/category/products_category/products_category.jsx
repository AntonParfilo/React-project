import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getProductsCategoryAction } from "../../../../redux/productsCategorySlice";
import Product from "../../product/product";

const ProductsCategory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category_id = searchParams.get("id");
  const dispatch = useDispatch();
  const productsCategory = useSelector((state) => state.productsCategory);
  const category = useSelector((state) =>
    state.categories.find((el) => el.id === category_id)
  );
  useEffect(() => {
    dispatch(
      getProductsCategoryAction({
        category_id: category_id,
        sort: "ASC",
      })
    );
  }, [category_id]);
  if(productsCategory === null) return <h3>Нет совпадений</h3>
  if (productsCategory.length === 0)
    return <img className="img_loading" src="/img/loading.gif" alt=""></img>;
  if (productsCategory.find((el) => el.category === category_id) === undefined)
    return <img className="img_loading" src="/img/loading.gif" alt=""></img>;
  const products = productsCategory.filter((el) => el.category === category_id);
  const products_main = products.map((el) => {
    return <Product product={el} dispatch={dispatch} key={el.id} />;
  });

  return (
    <div className="row">
        {products_main}
    </div>
  );
};
export default ProductsCategory;
