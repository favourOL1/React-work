import Navbar from './components/Navbar'
import HomePage from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PostPage from './pages/Post'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import MyBlogPage from './pages/MyBlogs'

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route  index={true} element={<HomePage />} />

        <Route path='/latest' element={<HomePage pageInfo={"latest"} />} />

        <Route path='/top' element={<HomePage pageInfo={"top"} />} />

        <Route path='/post/:slug' element={<PostPage />} />

        <Route path='/create-account' element={<SignUp />} />

        <Route path='/login' element={<Login />} />

        <Route path='/my-blogs' element={<MyBlogPage />} />


      </Routes>

    </BrowserRouter>
  )
}

export default App
