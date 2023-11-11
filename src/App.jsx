import { Routes, Route } from "react-router-dom";
import { Navbar, Footer, VideoGrid, SingleVideo } from "./container";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoGrid />} />
        <Route path="single-video" element={<SingleVideo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
