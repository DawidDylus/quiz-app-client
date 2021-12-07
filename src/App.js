import './App.css';
import Quiz from './Pages/Quiz'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QResults from './Pages/QResults';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Quiz />} />
          <Route exact path="/results" element={<QResults />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
