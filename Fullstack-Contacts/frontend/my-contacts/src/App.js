import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Home from './pages/Home';
import Details from './pages/Details';
import FormUser from './pages/FormUsers';
import Updateuser from './pages/UpdateUser';

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/details/:id' element={<Details />}></Route>
      <Route path='/addUser' element={<FormUser />}></Route>
      <Route path='/updateuser/:id' element={<Updateuser />}></Route>
    </Routes>
   </Router>
   </>
  );
}

export default App;
