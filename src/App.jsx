import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Menu from "./components/Menu";
import "./index.css";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const Tareas = lazy(() => import("./pages/Tareas"));
const AboutUs = lazy(() => import("./pages/AboutUs"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Suspense fallback = {<h5>Loading...</h5>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/task-list" element={<Tareas />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="*" element={<h4>🔎 Error 404: page not found 🔎</h4>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
