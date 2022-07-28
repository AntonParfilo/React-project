import axios from "axios";

export const getProductsMain = async (limit) => {
  try{
    const response = await axios.get(
      "http://ragaban.zzz.com.ua/reactapi/db.php?getProductsMain=1&limit="+limit,
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
    return response.data;
  }
  catch(err){
    alert(err);
  }
};
export const getProductsCategory = async (id, sort) => {
  try{
    const response = await axios.get(
      "http://ragaban.zzz.com.ua/reactapi/db.php?getProductsCategory="+id+"&sort="+sort,
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
    return response.data;
  }
  catch(err){
    alert(err);
  }
};
export const getProduct = async (id) => {
  try{
    const response = await axios.get(
      "http://ragaban.zzz.com.ua/reactapi/db.php?getProduct="+id,
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
    return response.data;
  }
  catch(err){
    alert(err)
  }
  
};
export const sendOrder = async (data) => {
  try{
    const response = await axios.post(
      "http://ragaban.zzz.com.ua/reactapi/index.php?",
      {data: data, setOrder: 1}
    );
    return response.data;
  }
  catch(err){
    alert(err);
  }
};
export const getFiltersCategory = async(name)=>{
  try{
    const response = await axios.get(
      "http://ragaban.zzz.com.ua/reactapi/db.php?getFiltersCategory="+name,
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
    return response.data;
  }
  catch(err){
    alert(err);
  }
}
export const getProductsCategoryFilters = async(data)=>{
  try{
    const response = await axios.post(
      "http://ragaban.zzz.com.ua/reactapi/db.php?",
      {getProductsCategoryFilters: 1, filters: data.filters, category: data.category, sort: data.sort}
    );
    return response.data;
  }
  catch(err){
    alert(err);
  }
}
