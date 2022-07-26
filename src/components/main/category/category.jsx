import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import s from "./category.module.css";
import FiltersCategory from "./filters_category/filters_category";
import ProductsCategory from "./products_category/products_category";

const Category = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category_id = searchParams.get("id");
  const category = useSelector((state) =>
    state.categories.find((el) => el.id === category_id)
  );
  return (
    <div>
      <div className={`${s.product_header}`}>
        <p>Товары из категории {category.description}</p>
      </div>
      <FiltersCategory />
      <ProductsCategory />
    </div>
  );
};
export default Category;
