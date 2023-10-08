import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './global/style.css'
import { Home } from "./pages/home";
import { ProductListComponent } from './components/ProductListComponent';
import { LoginComponent } from './components/LoginComponent';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' Component={LoginComponent}></Route>
        <Route path='/auth' Component={LoginComponent}></Route>
        <Route path="/home" Component={Home}></Route>
        <Route path="/products" Component={ProductListComponent}></Route>
      </Routes>
    </Router>
  )
}

export default App
