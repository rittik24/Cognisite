import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import {Todo} from './components/todo/Todo';

function App() {
  return (
    <div className="App">
    <Navbar />

    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/todo' element={<Todo/>}/>
     </Routes>
    </div>
  );
}

export default App;
