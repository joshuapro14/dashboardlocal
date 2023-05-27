import DashBoard from "./pages/dashboard";
import Customers from "./pages/customers";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Admin from "./pages/admin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Admin />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="/customers" element={<Customers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
