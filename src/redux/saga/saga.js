import { call, put, fork, takeEvery, takeLeading } from 'redux-saga/effects'
import { setProduct } from '../aboutProductSlice';
import { getFiltersCategory, getProduct, getProductsCategoryFilters, getProductsMain, sendOrder } from '../axios';
import { getProductsCategory } from "../axios";
import { setFiltersCategory } from '../filtersSlice';
import { setProductsCategory } from '../productsCategorySlice';
import { setDefaultState } from '../productsMainSlice';





function* getProductsMainWorker(action){
    const response = yield call(getProductsMain, action.payload);
    yield put(setDefaultState(response));
}
function* getProductsCategoryWorker(action){
    const response = yield call(getProductsCategory, action.payload.category_id, action.payload.sort);
    yield put(setProductsCategory(response));
}
function* getProductWorker(action){
    const response = yield call(getProduct, action.payload);
    yield put(setProduct(response));
}
function* sendOrderWorker(action){
    const data = {user_data: action.payload.user_data, order_items: action.payload.order_items}
    const response = yield call(sendOrder, data);
    if(response === "success"){
        action.payload.relocate();
    }
}
function* getFiltersCategoryWorker(action){
    const response = yield call(getFiltersCategory, action.payload.category_name);
    yield put(setFiltersCategory(response));
}
function* getProductsCategoryFiltersWorker(action){
    const response = yield call(getProductsCategoryFilters, action.payload);
    yield put(setProductsCategory(response));
}





function* getProductsMainWatcher(){
    yield takeLeading("productsMain/getProductsMainAction", getProductsMainWorker);
}
function* getProductsCategoryWatcher(){
    yield takeEvery("productsCategory/getProductsCategoryAction", getProductsCategoryWorker);
}
function* getFiltersCategoryWatcher(){
    yield takeEvery("filters/getFiltersCategoryAction", getFiltersCategoryWorker);
}
function* getGetProductWatcher(){
    yield takeEvery("aboutProduct/getProductAction", getProductWorker);
}
function* sendOrderWatcher(){
    yield takeEvery("cart/sendOrderAction", sendOrderWorker)
}
function* getProductsCategoryFiltersWatcher(){
    yield takeEvery("productsCategory/getProductsCategoryFiltersAction", getProductsCategoryFiltersWorker)
}

export function* RootSaga(){
    yield fork(getProductsMainWatcher);
    yield fork(getProductsCategoryWatcher);
    yield fork(getGetProductWatcher);
    yield fork(sendOrderWatcher);
    yield fork(getProductsCategoryFiltersWatcher);
    yield fork(getFiltersCategoryWatcher);

}
