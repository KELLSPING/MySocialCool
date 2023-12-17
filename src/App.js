import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/signin' element={<SignIn />}/>
      </Routes>
    </Router>
  );
}

export default App;
