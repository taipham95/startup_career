import SearchAndInforAdmin from "./SearchAndInforAdmin";
import Sidebar from "./Sidebar";
import Overview from "./Overview/Overview";
import CandidatesPage from "./CandidatesPage";
import UpdateJobPage from "./UpdateJobPage/UpdateJobPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobCreatorPage from './JobCreatorPage/JobCreatorPage';

const AdminPage = () => {
  return (
    <Router>
      <main class="flex justify-center w-[100%]">
        <Sidebar class="w=[25%]" />
        <div class="flex flex-col w-[100%]">
          <SearchAndInforAdmin />
          <Routes>
            <Route exact path="/" element={<Overview />} />
            <Route exact path="/candidates" element={<CandidatesPage />} />
            <Route exact path="/create-job" element={<JobCreatorPage />} />
            <Route exact path="/update-job/:id" element={<UpdateJobPage />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};
export default AdminPage;
