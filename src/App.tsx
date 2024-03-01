import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
// import Home from "./pages/Home";
import Signin from "./components/Signin";
import Home from './pages/Home';

export default function App() {
  return (
    <div className='overflow-clip'>
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
<>
      
    </>