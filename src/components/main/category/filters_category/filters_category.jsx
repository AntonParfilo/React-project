import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getFiltersCategoryAction } from "../../../../redux/filtersSlice";
import {
  getProductsCategoryAction,
  getProductsCategoryFiltersAction,
} from "../../../../redux/productsCategorySlice";
import s from "./filters_category.module.css";
import FilterCategory from "./filter_category/filter_category";

const FiltersCategory = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const [searchParams, setSearchParams] = useSearchParams();
  const category_id = searchParams.get("id");
  const category = useSelector((state) =>
    state.categories.find((el) => el.id === category_id)
  );
  useEffect(() => {
    dispatch(getFiltersCategoryAction({category_name: category.name}));
  }, [category_id]);

  const filters_query = {};
  filters_query["По возрастанию цены"] = undefined;
  function getFilters(filters) {
    const filters_name_res = [];
    for (let key in filters[0]) {
      if (key === "id" || key === "item_id") {
      } else {
        const mwarr = [];
        mwarr.push(key);
        filters_query[key] = undefined;
        filters.forEach((el) => {
          for (let key2 in el) {
            if (key2 === key && el[key2].length > 0){
                let unique = mwarr.find((ele)=> ele === el[key2]);
                if(unique){}
                else mwarr.push(el[key2]);
            }
          }
        });

        filters_name_res.push(mwarr);
      }
    }
    filters_name_res.unshift(["По возрастанию цены", "По убыванию цены"]);
    return filters_name_res;
  }

  const md5 = require("md5");
  function setChangeFilters() {
    let query_data = {};
    for (let key in filters_query) {
      let val = document.getElementById(md5(key)).value;
      if (key === val && key !== "По возрастанию цены") val = null;
      filters_query[key] = val;
      query_data = {
        filters: filters_query,
        category: { id: category_id, name: category.name },
      };
    }
    let isFilters = null;
    let sort = null;
    for (let key in query_data.filters) {
      if (key === "По возрастанию цены") {
        if (query_data.filters[key] === "По возрастанию цены") sort = "ASC";
        else sort = "DESC";
      } else {
        if (query_data.filters[key] === null) {
        } else isFilters = true;
      }
    }
    query_data.sort = sort;
    isFilters
      ? dispatch(getProductsCategoryFiltersAction(query_data))
      : dispatch(getProductsCategoryAction({category_id: category_id, sort: sort,}));
  }
  const filters_data = getFilters(filters);
  const filters_view = filters_data.map((el) => {
    return (
      <FilterCategory
        key={md5(el[0])}
        element={el}
        func={setChangeFilters}
      />
    );
  });

  return <div className={`${s.filters} row`}>{filters_view}</div>;
};
export default FiltersCategory;
