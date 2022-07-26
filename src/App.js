import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import ToolBar from "./components/toolbar/toolbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MainContent from "./components/main/main_content/main_content";
import About from "./components/main/About/about";
import Feedback from "./components/main/feedback/feedback";
import Cart from "./components/main/cart/cart";
import AboutProduct from "./components/main/about_product/about_product";
import OrderSuccess from "./components/main/cart/order_success/order_success";
import Category from "./components/main/category/category";
import Footer from "./components/footer/footer";
import BurgerMenu from "./components/navbar/burger/burger_menu";




function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="body-wrap">
          <Navbar />
          < BurgerMenu />
          <div className="container-content">
            <div className="row">
              <ToolBar />
              <div className="col-md-9">
                <Routes>
                  <Route path="/" element={<MainContent />}/>
                  <Route path="/about" element={<About />} />
                  <Route path="/feedback" element={<Feedback />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/product" element={<AboutProduct />} />
                  <Route path="/order_success" element={<OrderSuccess />} />
                  <Route path="/category" element={<Category />} />
                </Routes>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
