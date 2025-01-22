import { BrowserRouter, Route } from 'react-router';
import './App.css';
import About from './components/About/About';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Services from './components/Services/Services';
import { Routes } from 'react-router';
import NotFound from './components/Error/NotFound';
import Mission from './components/About/Mission';
import Visioin from './components/About/Visioin';
import History from './components/About/History';

function App() {
  return <>

  <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index  element={<Content />} />
        <Route path='/service' element={<Services />} />

        <Route path='/about-us' element={<About />}>
        <Route index element={<History />}/>
        <Route path='vision' element={<Visioin />}/>
        <Route path='mission' element={<Mission />}/>

        </Route>

        <Route path='/store' element={<Products />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
  </BrowserRouter>
      
  </>
      
}

export default App;
