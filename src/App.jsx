import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Navbar from "./screens/components/Navbar";
import Footer from "./screens/components/Footer";

function App() {

  return (
    <BrowserRouter basename="/mlncdonders.github.io/">
    <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
