import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import ViewAll from './components/ViewAll';
import SearchStudent from './components/SearchStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<AddStudent/>}/>
    <Route path='/search' element={<SearchStudent/>}/>
    <Route path='/viewall' element={<ViewAll/>}/>
   </Routes>
  
   </BrowserRouter>

  );
}

export default App;
