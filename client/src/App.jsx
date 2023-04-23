import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Context/CareersContext";
import CareerHeader from "./components/CareerHeader";
import CareerFooter from "./components/CareerFooter";
import ApplyPage from "./pages/ApplyPage/ApplyPage";
import JobDetail from "./components/JobDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import CareerPage from "./components/CareerPage/CareerPage";
import AdminPage from "./pages/AdminPage";
import LoginRegisterPage from "./components/AdminLoginLandingPage/LandingPage/LoginRegisterPage"
import AuthState from "./components/AdminLoginLandingPage/useReducer/userContext";


function App() {
  return (
    <AppProvider>
      <AuthState>
        {/* <LoginRegisterPage/> */}
        {/* <AdminPage /> */}
        <Router>
          <CareerHeader />
          <Routes>
            <Route exact path="/" element={<AdminPage />} />
            <Route exact path="/login" element={<LoginRegisterPage />} />

            {/* <Route exact path="/careers" element={<CareerPage />} />
            <Route exact path="/careers/:id" element={<JobDetail />} />
            <Route exact path="/careers/:id/apply" element={<ApplyPage />} />
            <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
          <CareerFooter />
        </Router>
      </AuthState>
    </AppProvider>
  );
}

export default App;
