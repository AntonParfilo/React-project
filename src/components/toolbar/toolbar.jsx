import React from "react";
import s from "./toolbar.module.css";
import Categories from "./categories/categories";
import { useSelector } from "react-redux/es/exports";
import LinkBar from "./linkbar/linkbar";

const ToolBar = function (props) {
  const state = useSelector((state) => state.categories);
  const categories = state.map((value) => {
    return <Categories categories={value} key={value.id} />;
  });
  return (
    <div className={`col-md-3 ${s.tool_bar}`}>
      <div className={s.catalog_title}>
        <svg className={s.catalog_img}>
          <use xlinkHref="/img/toolbar/catalog_image.svg#icon-catalog"></use>
        </svg>
        <span>каталог</span>
      </div>
      {categories}
      <LinkBar />
    </div>
  );
};

export default ToolBar;
