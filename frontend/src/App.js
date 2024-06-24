import logo from './logo.svg';
import './App.css';
import './fonts.css';
import Navbar from './Components/Navbar';
import InputField from './Components/InputFields/InputField';
import SignUp from './Components/SignUp/SignUp';
import LogIn from './Components/LogIn/LogIn';
import EcommerceSearch from './Components/EcommerceSeach/EcommerceSearch';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import MyProfile from './Components/MyProfile/MyProfile';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<EcommerceSearch />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/contact" element={<EcommerceSearch />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </Router>
    
  );
}

export default App;

{/*<div>
      <Navbar />
      <SignUp /> */}
      {/*<LogIn />*/}
      {/*<EcommerceSearch /> */}


      

      {/*<div className="App">
      <header className="App-header">
        <InputField />
        <SignUp />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit HOLAAA <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/*</div> */}
