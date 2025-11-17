import { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ContactPage from "./pages/ContactPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./components/NotFound";
import Product from "./services/Product";
import Lifestyles from "./services/Lifestyles";
import Food from "./services/Food";
import Event from "./services/Event";
import Video from "./services/Video";
import Social from "./services/Social";

axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/auth/me");
        setUser(res.data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return(
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home user={user} setError={error}/>}/>
        <Route path="/gallery" element={<Gallery user={user} setError={error}/>}/>
        <Route path="/services" element={<Home user={user} setError={error}/>}/>
        <Route path="/services/Product" element={<Product user={user} setError={error}/>}/>
        <Route path="/services/Lifestyles" element={<Lifestyles user={user} setError={error}/>}/>
        <Route path="/services/Food" element={<Food user={user} setError={error}/>}/>
        <Route path="/services/Event" element={<Event user={user} setError={error}/>}/>
        <Route path="/services/Video" element={<Video user={user} setError={error}/>}/>
        <Route path="/services/Social" element={<Social user={user} setError={error}/>}/>
        <Route path="/blog" element={<Home user={user} setError={error}/>}/>
        <Route path="/contact" element={<ContactPage user={user} setError={error}/>}/>
        <Route path="/faq" element={<Home user={user} setError={error}/>}/>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login setUser={setUser}/>}/>
        <Route path="/register" element={user ? <Navigate to="/"/> :<Register setUser={setUser}/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  )
}

export default App