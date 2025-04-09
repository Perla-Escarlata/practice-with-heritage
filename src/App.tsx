import './App.css';
import { Profile } from './Profile';
import { TopPage } from './TopPage';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <h1>World Heritage Site</h1>

        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes><br />
          <Link to="/">Home</Link>&nbsp;&nbsp;
          <Link to="/Profile">Favorite</Link>
      </div>
    </BrowserRouter>
  );
};

export default App;
