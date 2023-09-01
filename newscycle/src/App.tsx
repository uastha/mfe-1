import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import News from "./components/News";

function App() {
  return (
    <div className="App">
      <h1>Welcome to NewsApp App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<News />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
