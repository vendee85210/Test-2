import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import "./App.css";

// Pages
import HomePage from "./pages/HomePage";
import DestinationsPage from "./pages/DestinationsPage";
import InspirationPage from "./pages/InspirationPage";
import BlogPage from "./pages/BlogPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/inspiration" element={<InspirationPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/property/:id" element={<PropertyDetailsPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </Router>
    </div>
  );
}

export default App;