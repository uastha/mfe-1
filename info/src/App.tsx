import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ImgMediaCard from "./components/Info";
import NewsContainer from "./components/NewsContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ImgMediaCard />}></Route>
          <Route path="/news" element={<NewsContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
