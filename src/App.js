import logo from "./logo.svg";
import { Button } from "antd";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <AppLayout />
    </div>
  </BrowserRouter>
);

export default App;
