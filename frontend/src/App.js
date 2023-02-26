import "./App.css";
import Allroutes from "./Pages/Allroutes";
import AdminRoutes from "./Pages/AdminRoutes";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  let path = location.pathname;
  if (
    path === "/admin/dashboard" ||
    path === "/admin/products" ||
    path === "/admin/orders" ||
    path === "/admin/addproduct" ||
    path === "/admin/orders" ||
    path === "/admin/users" ||
    path === "/admin/reviews"
  ) {
    return <AdminRoutes />;
  } else {
    return <Allroutes />;
  }
}

export default App;
