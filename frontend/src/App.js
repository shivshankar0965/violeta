import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Allroutes from "./Pages/Allroutes";
import CarousalTop from "./Components/ProductPage/CarousalTop";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Allroutes />
      <CarousalTop />
      <Footer/>
    </>
  );
}

export default App;
