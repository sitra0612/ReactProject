// import './App.css';
import Navigation from './Component/Navigation';
import Footer from './Component/footer';
import About from "./Component/About/about";
import Home from './Component/Home/home';
import Contact from './Component/Contact/contact';
import Gallery from './Component/Gallery/gallery'
function App() {
  return (
   <div className='section'>
    <Navigation/>
    <Gallery/>
    <Footer/>

    </div>
  );
}

export default App;
