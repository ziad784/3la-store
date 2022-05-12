import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import AddItem from './Pages/AddItem/AddItem';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Item from './Pages/Item';
import Profile from './Pages/Profile';
import WomenCategory from './Pages/WomenCategory';

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='category' element={<WomenCategory/>} />
        <Route path='item' element={<Item/>} />
        <Route path='AddItem' element={<AddItem/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='profile' element={<Profile/>} />


      </Routes>
    </Router>
  )
}

export default App
