import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Checkout from "./pages/Checkout/Checkout";
import Success from "./pages/Success/Success";
import PageNotFound from "./pages/NotFound/NotFound";
import DefaultLayout from "./Layouts/DefaultLayout";


const PATH = import.meta.env.PROD ? process.env.VITE_BASE_PATH : '';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${PATH}/`} element={<DefaultLayout />} >
          <Route path={`${PATH}/`} element={<Home />} />
          <Route path={`${PATH}/checkout`} element={<Checkout />} />
          <Route path={`${PATH}/success`} element={<Success />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;