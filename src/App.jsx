import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Navbar from "./screens/components/Navbar";
import Footer from "./screens/components/Footer";
import Projects from "./screens/Projects";
import About from "./screens/About";
import ProjectTemplate from "./screens/ProjectTemplate";

function App() {

  return (
    <BrowserRouter basename="/">
    <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/project/:pageIndex" element={<ProjectTemplate></ProjectTemplate>}></Route>
        <Route path="/about" element={<About></About>}></Route>

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
