import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import ItemDetail from './ItemDetail';

function App() {
  return (
    <div className="App">
      <nav>
        <h1 className='nav'>Social Media App</h1>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetail/>} />
      </Routes>
    </div>
  );
}

export default App;