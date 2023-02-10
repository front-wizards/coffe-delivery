import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Checkout from "./pages/Checkout/Checkout";
import Success from "./pages/Success/Success";
import PageNotFound from "./pages/NotFound/NotFound";
import DefaultLayout from "./Layouts/DefaultLayout";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;