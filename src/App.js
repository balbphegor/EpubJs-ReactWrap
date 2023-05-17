import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Navigation from "./components/Navbar";
import Book from "./components/Book";
function App() {
  return (
    <div className="book-carousel">
      <BrowserRouter>
        <main>
          <Routes>
            <Route
              path="/gallery"
              element={
                <>
                  <Navigation />
                  <div id="border-box">
                    <Gallery />
                  </div>
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Navigation />
                  <About />
                </>
              }
            />
            <Route
              path="/book"
              element={
                <div id="border-box">
                  <Book />
                </div>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
