import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={ <ItemListContainer />} />
            <Route path='/category/:categoryId' element={ <ItemListContainer /> } />
            <Route path='item/ :itemID' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>Proximamente</h1>} />
          </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
