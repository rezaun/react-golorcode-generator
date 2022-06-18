
import { Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Navbar from "./components/Pages/Navbar/Navbar";
import NotFound from "./components/Pages/NotFound/NotFound";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>        
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
