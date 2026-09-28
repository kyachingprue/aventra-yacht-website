import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Yachts from './pages/Yachts'
import YachtDetail from './pages/YachtDetail'
import Destinations from './pages/Destinations'
import DestinationDetail from './pages/DestinationDetail'
import Experiences from './pages/Experiences'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/yachts" element={<Yachts />} />
        <Route path="/yachts/:id" element={<YachtDetail />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:id" element={<DestinationDetail />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
