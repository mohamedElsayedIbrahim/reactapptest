import './App.css';
import About from './components/About/About';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Services /> */}
      {/* <About /> */}
      {/* <Content /> */}
      <Products />
      <Footer />
    </div>
  );
}

export default App;
