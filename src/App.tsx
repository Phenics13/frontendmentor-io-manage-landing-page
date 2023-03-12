import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Landing from "./pages/landing/landing.component";

function App() {
  console.log(document.body.clientWidth);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
