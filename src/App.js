import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Posts from './pages/Posts';
import NewPost from './pages/NewPost';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Posts />}/>
        <Route exact path='/signin' element={<SignIn />}/>
        <Route exact path='/newpost' element={<NewPost />}/>
      </Routes>
    </Router>
  );
}

export default App;
