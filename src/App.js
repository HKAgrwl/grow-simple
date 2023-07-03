import Map from "./pages/Map";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/map" element={<Map/>} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
