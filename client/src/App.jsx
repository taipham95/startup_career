import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppProvider } from "./Context/CareersContext";
import CareerHeader from "./components/CareerHeader";
import CareerFooter from "./components/CareerFooter";
import ApplyPage from "./pages/ApplyPage/ApplyPage";
import JobDetail from "./components/JobDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import CareerPage from "./components/CareerPage/CareerPage";
import AdminPage from "./pages/AdminPage";
import CandidatesPage from "./pages/AdminPage/CandidatesPage";
import JobCreatorPage from "./pages/AdminPage/JobCreatorPage/JobCreatorPage";
import UpdateJobPage from "./pages/AdminPage/UpdateJobPage/UpdateJobPage";
import Overview from "./pages/AdminPage/Overview/Overview";
import Jobs from "./pages/AdminPage/Jobs/Jobs";
import CandidatesDetail from "./pages/AdminPage/CandidatesPage/CandidatesDetail/CandidatesDetail";


function App() {

  return (
    <AppProvider>
      <Router>

        {window.location.href.includes("/admin") ? "" : <CareerHeader />}

        <Routes>
          <Route exact path="/" element={<CareerPage />} />
          <Route exact path="/careers" element={<CareerPage />} />
          <Route exact path="/careers/:id" element={<JobDetail />} />
          <Route exact path="/careers/:id/apply" element={<ApplyPage />} />
          <Route path="*" element={<PageNotFound />} />

          <Route exact path="/admin" element={<AdminPage />}>
            <Route exact path="/admin" element={<Overview />} />
            <Route exact path="/admin/candidates" element={<CandidatesPage />} />
            <Route exact path="/admin/candidates/:id/edit" element={<CandidatesDetail />} />
            <Route exact path="/admin/jobs" element={<Jobs />} />
            <Route exact path="/admin/create-job" element={<JobCreatorPage />} />
            <Route exact path="/admin/update-job/:id" element={<UpdateJobPage />} />
          </Route>


        </Routes>

        {window.location.href.includes("/admin") ? "" : <CareerFooter />}


      </Router>
    </AppProvider>
  );
}

export default App;
