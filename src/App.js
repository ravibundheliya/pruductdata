import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Component/Partitial/header';
import Page1 from './Component/Productpage/Page1';
import Footer from './Component/Partitial/Footer';
import { Route, Routes } from 'react-router-dom';
import Prodetails from './Component/Productpage/Prodetails';
import Cartpage from './Component/Productpage/Cartpage';

function App() {
  return (
    <>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Page1 />} />
        <Route path='/pro_detail/:id' element={<Prodetails />} />
        <Route path='/cart' element={<Cartpage/>} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
