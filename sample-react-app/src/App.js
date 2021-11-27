import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/page1">Page 1</Link></li>
          <li><Link to="/page2">Page 2</Link></li>
        </ul>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/page1' element={<Page1/>} />
          <Route path='/page2' element={<Page2/>} />
        </Routes>
      </div>
    </Router>
  )
}

function Page1() {
  return (
    <div>Page 1</div>
  );
}

function Page2() {
  return (
    <div>Page 2</div>
  );
}

function Home() {
  return (
    <div>Home</div>
  );
}

export default App;