
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/page/Carts';
import Wishlist from './components/page/Wishlist';

function App() {
  return (
    <div >
<Header/>

     <Routes>
     <Route path='/' element={ <Home/>}/>
         <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/> 
     </Routes>
<Footer/>
</div>
  )
}

export default App
