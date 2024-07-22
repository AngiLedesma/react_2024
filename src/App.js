import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import NosotrosPage from './pages/NosotrosPage';
import ServicioPage from './pages/ServicioPage';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>

          <Route path='/' element={<HomePage />} />
          {/* los distintos links */}
          <Route path='/nosotros' element={<NosotrosPage />} />
          <Route path='/contacto' element={<ContactoPage />} />
          <Route path='/servicios' element={<ServicioPage />} />

        </Routes>


        </BrowserRouter>


      <Footer />
    </div>
  );
}


export default App;


