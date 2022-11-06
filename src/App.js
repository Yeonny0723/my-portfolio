import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Portfolio from "./routes/Portfolio";

function App() {
  const basename = process.env.NODE_ENV === "development" ? "/my-portfolio" : process.env.PUBLIC_URL;
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
