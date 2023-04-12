import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Context/CareersContext";
import CareerHeader from "./components/CareerHeader";
import CareerFooter from "./components/CareerFooter";
import ApplyPage from "./pages/ApplyPage/ApplyPage";
import JobDetail from "./components/JobDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import CareerPage from "./components/CareerPage/CareerPage";
import AdminPage from "./pages/AdminPage";
import EmployeesHome from "./pages/AdminPage/Employees/EmployeesHome";
import DetailEmploy from "./pages/AdminPage/Employees/DetailEmploy";
import { EmployeeProvider } from "./Context/EmployeeDataContext";
import FromModal from "./pages/AdminPage/Employees/FromModal";

function App() {
  return (
      <EmployeeProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<AdminPage />} />
            <Route exact path="/employ" element={<EmployeesHome />} />
            <Route exact path="/detail/:id/edit" element={<DetailEmploy/>} />
            <Route exact path="/modal" element={<FromModal/>} />
          </Routes>
        </Router>
      </EmployeeProvider>
  );
}

export default App;
