import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Blogs from "./pages/Blogs"
import UserBlogs from "./pages/userBlogs"
import CreateBlog from "./pages/CreateBlog"
 

 
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
     <Routes>  
      <Route path="/" element={<Blogs/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/my-blogs" element={<UserBlogs/>}/>
      <Route path="/create-blog" element={<CreateBlog/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
