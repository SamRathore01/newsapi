import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import { Business, Covid, Crypto, Sports,Main, Australia } from './Components';


function App() {
  return (
    <>
      <div className='navbar'>
      <Navbar/>
    </div>
    <div className="routes">
          <Routes>  
          <Route  path="/" element ={<Main />} />
          <Route  path="/australia" element ={<Australia />} />
            <Route  path="/business" element ={<Business />} />
            <Route  path="/covid" element ={<Covid />} />
            <Route  path="/Crypto" element = {<Crypto />}/>              
            <Route  path="/Sports" element = {<Sports />} /> 
          </Routes>
        </div>
        

        <Footer/>

    </>
  );
}

export default App;
