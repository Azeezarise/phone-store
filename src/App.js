
import './App.css';


import Header from './headerfolder/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './headerfolder/pages/Home';
import SignUp from './headerfolder/pages/SignUp';
import Cart from './headerfolder/pages/Cart';




function App() {

 
 
  return (
  
    <div style={{background:"rgb(157, 179, 198)"}}>
    
    
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup'element={<SignUp/>} />
          <Route path='/cart' element={<Cart/>}/>
       
        </Routes>                                                                                                                                                                                                                                                                                                                   


      </Router>

      {/*   
  <First/>
  <Second/> */}
    </div>
  );
}

export default App;
