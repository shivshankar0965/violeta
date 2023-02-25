import "./App.css";
import Allroutes from "./Pages/Allroutes";
import AdminRoutes from "./Pages/AdminRoutes";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  if (location.pathname === "/") {
    return <Allroutes />;
  } else {
    return <AdminRoutes />;
  }
}

export default App;
