import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Header from './Header';
import "./App.css";
// function Header() {
//   return (
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/About">About</Link></li>
//       <li><Link to="/Contact">Contact</Link></li>
//       <li><Link to="/Login">Login</Link></li>
//     </ul>
//   );
// }

function App() {

  // const backgroundStyle = {
  //   backgroundImage: `url("cover.jpg")`,
  //   backgroundSize: 'cover', // to cover the entire container
  //   backgroundRepeat: 'no-repeat', // to prevent image repeating
  //   height: '100vh' // to ensure it covers the full viewport height
  // }
  return (
    <div className="background-container">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
