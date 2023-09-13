import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <img className="w-full bg-center flex" src="/food.jpg" alt="food" />
        <Search />
        <Category />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
    
  );
}



export default App;
