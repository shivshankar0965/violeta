import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Allroutes from "./Pages/Allroutes";
import { useLocation } from "react-router-dom";
import CarousalTop from "./Components/ProductPage/CarousalTop";
import SignUp from "./Components/Signup/signup";
import SignIn from "./Components/Login/login";
import AdminRoutes from "./Pages/AdminRoutes";

function App() {
  const location = useLocation();
  if (location.pathname === "/") {
    return <Allroutes />;
  } else {
    return <AdminRoutes />;
  }
}

export default App;
