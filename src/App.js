//import logo from './logo.svg';
import './App.css';
import Personajes from './Pages/Personajes';
import Comics from './Pages/Comics';
import Series from './Pages/Series';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
      <body>
        <div className='general'>
          <Router>
            <div className='container'>
              <div>
                <h1>PANEL DE OPCIONES</h1>
              </div>
              <div>
              <Link to={'/'}><button id={"buttonAddNew2"} >PERSONAJES</button></Link>
              <Link to={'/Comics'}><button id={"buttonAddNew2"} >COMICS</button></Link>
              <Link to={'/Series'}><button id={"buttonAddNew2"} >SERIES</button></Link>
            
              </div>
            </div>
            <br/>
            <Routes>
              <Route path='/' element={<Personajes />} />
              <Route path='/Comics' element={<Comics />} />
              <Route path='/Series' element={<Series />} />
            </Routes>
          </Router>
        </div>
      </body>
    </>
  );
}
    
 

export default App;
