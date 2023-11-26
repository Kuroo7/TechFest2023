import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
