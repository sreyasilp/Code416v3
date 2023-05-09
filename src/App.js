import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/home";
import Profile from "./components/Profile/profile";
import SignUp from "./components/SignUp/signUp";
import SignIn from "./components/SignIn/signIn";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/products' element={<Products />} />  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
