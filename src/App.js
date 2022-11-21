import './main.scss';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Members from './pages/Members/Members';
import Events from './pages/Events/Events';
import Venue from './pages/Venue/Venue';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <Home />
            </div>
          }
        />
        <Route path='/members' element={<Members />} />
        <Route path='/events' element={<Events />} />
        <Route path='/venue' element={<Venue />} />
      </Routes>
    </Router>
  );
}

export default App;
