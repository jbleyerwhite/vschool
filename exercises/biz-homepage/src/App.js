import React from 'react';
import Navbar from './Navbar';
import Info from './Info';
import Products from './Products';
import Footer from './Footer';
//import './App.css';

const App = () => {
  const style = {
    fontFamily: "helvetica",
  }

  return (
    <div>
      <Navbar />
      <Info />
      <Products />
      <Footer />
    </div>

  )
}
export default App;
