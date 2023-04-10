import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Context/CareersContext";
import CareerHeader from "./components/CareerHeader";
import CareerFooter from "./components/CareerFooter";
import ApplyPage from "./pages/ApplyPage/ApplyPage";
import JobDetail from "./components/JobDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import CareerPage from "./components/CareerPage/CareerPage";
import AdminPage from "./pages/AdminPage";
import CandidatesPage from "./pages/AdminPage/CandidatesPage";
import JobCreatorPage from "./pages/JobCreatorPage/JobCreatorPage";

function App() {
  return (
    <AppProvider>
      {/* <AdminPage /> */}
      <Router>
        <CareerHeader />
        {/* <Routes>
          <Route exact path="/" element={<CareerPage />} />
          <Route exact path="/careers" element={<CareerPage />} />
          <Route exact path="/careers/:id" element={<JobDetail />} />
          <Route exact path="/careers/:id/apply" element={<ApplyPage />} />
          <Route path="*" element={<PageNotFound />} />
          
        </Routes>
        </Routes> */}
        <JobCreatorPage />
        <CareerFooter />
      </Router>
    </AppProvider>
  );
}

export default App;
