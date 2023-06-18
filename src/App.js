import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Component/HeaderFolder/Header';
import Footer from './Component/Footer/Footet';
import Home from './Component/HomeFolder/Home';
import Recipes from './Component/RecipeFolder/Recipe';
import Dogs from './Component/DogFolder/Dog';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Recipes' element={<Recipes/>}/>
          <Route path='/Dogs' element={<Dogs/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
