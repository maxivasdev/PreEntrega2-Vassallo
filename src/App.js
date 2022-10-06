import React from 'react'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar';
import MercadoLibre from './components/MercadoLibre/MercadoLibre';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
          
          <hr></hr>
          <ItemListContainer greeting={'Productos en nuestra tienda Online.'}/>
          <MercadoLibre />
    </div>
    
  );
}

export default App;
