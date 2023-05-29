import { Route, Routes } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Login } from "./pages/login";
import { SignUp } from "./pages/SignUp";
import { Posts } from "./pages/Post";
import User from "./pages/user";
import {NavBar} from "./navBar"

const App = () => (
  <NavBar>
    <Routes>
      <Route element={<Login />} path='/login' />
      <Route element={<SignUp />} path='/SignUp' />
      <Route element={<Posts />} path='/Post' />
      <Route element={<User />} path='/user'/>
    </Routes>
    <ToastContainer
        position="top-center"
        autoClose={1500}
        limit={3}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
        transition={Slide}
    />
  </NavBar>

)

export default App;
