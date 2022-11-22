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
   <Routes>
    <Route  exact path='/' element = {<Navbar/>}>
      <Route index  element = {<Home/>} />
      <Route exact path='/about'  element = {<About/>} />
      <Route exact path='/contact'  element = {<Contact/>} />
      <Route exact path='/Alert'  element = {<Alert/>} />

    </Route>
   </Routes>
   <Footer />
   </BrowserRouter>
  );
}

export default App;
