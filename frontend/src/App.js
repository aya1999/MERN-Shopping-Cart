import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//screens
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'

//components

function App() {
  return (
    //react-router
    <Router>
      <main>
        <Routes>
          <Route exact path='/' element={<HomeScreen/>}/>
          <Route exact path='/product/:id' element={<ProductScreen/>}/> 
          <Route exact path='/cart' element={<CartScreen/>}/>
        </Routes>
      </main>
    </Router> 
  );
}

export default App;
