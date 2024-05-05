import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
import DashBoard from "./pages/DashBoard";
import Employee from "./pages/Employee";
import Sidebar from "./components/SideBar";
import Dash from "./components/Dash";

function App() {
  return (
    <BrowserRouter>
      {/* <Sidebar /> */}
      <Routes>
        <Route path={"/"}>
          <Route index element={<LogIn />} />
          <Route element={<DashBoard />} path="dashboard" />
          <Route element={<Dash />} path="dash" />
          <Route element={<Employee />} path="employee" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
