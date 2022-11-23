import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Alert from './Components/Alert';

function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <main>

   <Routes>
      <Route index  element = {<Home/>} />
      <Route exact path='/about'  element = {<About/>} />
      <Route exact path='/contact'  element = {<Contact/>} />
      <Route exact path='/Alert'  element = {<Alert/>} />

   </Routes>
   </main>
   <Footer />
   </BrowserRouter>
  );
}

export default App;
