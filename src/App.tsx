// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Portada from './Portada';
import MasDeMi from './MasDeMi';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portada />} />
        <Route path="/MasDeMi" element={<MasDeMi />} />
      </Routes>
    </Router>
  );
}

export default App;
