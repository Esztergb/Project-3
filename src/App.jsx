// import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Calendar from "./pages/Calendar";
// import Shopping from "./pages/Shopping";
// import Pages from "./pages/Pages"


// function App() {
//   return (
//     <>
//       <Navbar />
        
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/calendar" element={<Calendar />} />
//           <Route path="/shopping" element={<Shopping />} />
//         </Routes>

//      <Pages />
//       <Footer />
//     </>
//   );
// }

// export default App;
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Shopping from "./pages/Shopping";
import SignUp from "./pages/SignUp";
import { GiKnifeFork } from "react-icons/gi";

// function App() {
//   return (
//     <>
//       <Navbar />
        
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/calendar" element={<Calendar />} />
//           <Route path="/shopping" element={<Shopping />} />
//           <Route path="/signup" element={<SignUp />} />

        
//         </Routes>
//       <Footer />
//     </>
//   )};


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <img className="w-full bg-center flex" src="/food.jpg" alt="food" />
        <Search />
        <Category />
        <Pages />src/App.jsx
        <Footer />
      </BrowserRouter>
    </div>
  );
}



export default App;
