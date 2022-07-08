import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
//import { CartProvider } from './CartContext';
import { CartProvider } from './CartContext';


function App() {
  
  return (
    <>
    
    {
     <BrowserRouter>
     <CartProvider>
     <NavBar/>
     <Routes>
        <Route path= '/' element={ <ItemListContainer/> } />
        <Route path= '/category/:categoryId'  element={ <ItemListContainer/> } />
        <Route path= '/item/:itemId'  element={ <ItemDetailContainer/> } />
     </Routes>
     </CartProvider>
     </BrowserRouter>
    
    }
    
   
    </>
    
  );
}

export default App;
