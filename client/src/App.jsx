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
import CandidatesDetail from "./pages/AdminPage/CandidatesPage/CandidatesDetail/CandidatesDetail";

function App() {
  return (
    <AppProvider>
      <nav>
        <Link to="/careers/job/:id">{/*Job Detail*/}</Link>
        <Link to="/careers/job/:id/apply">{/*Apply Page*/}</Link>
        <Link to="/adminpage/overview"></Link>
        <Link to="/adminpage/candidates"></Link>
        <Link to="/adminpage/candidates/:id/details"></Link>
        <Link to="/adminpage/create-job/"></Link>
        <Link to="/adminpage/update-job/:id"></Link>
      </nav>

      <Routes>
      <Route exact path = "/" element={<CareerPage/>}>
        <Route exact path = "/careers" element={<CareerPage/>}></Route>
        <Route exact path = "/careers/job/:id" element={<JobDetail/>}></Route>
        <Route exact path = "/careers/job/:id/apply" element={<ApplyPage/>}></Route>
      </Route>

      <Route exact path = "/adminpage" element={<AdminPage/>}>
        <Route exact path ="/adminpage/overview" element={<Overview/>}></Route>
        <Route exact path ="/adminpage/candidates" element={<CandidatesPage/>}></Route>
        <Route exact path ="/adminpage/candidates/:id/details" element={<CandidatesDetail/>}></Route>
        <Route exact path="/adminpage/create-job" element={<JobCreatorPage/>}></Route>
        <Route exact path="/adminpage/update-job/:id" element={<UpdateJobPage/>}></Route>
      </Route>

      <Route path ="*" element={<PageNotFound/>}></Route>
      </Routes>


      {/* <AdminPage /> */}
      {/* <Router>
        <CareerHeader />
        <Routes>
          <Route exact path="/" element={<CareerPage />} />
          <Route exact path="/careers" element={<CareerPage />} />
          <Route exact path="/careers/:id" element={<JobDetail />} />
          <Route exact path="/careers/:id/apply" element={<ApplyPage />} />
          <Route exact path="/jobs/create" element={<JobCreatorPage />} />
          <Route exact path="/jobs/update/:id" element={<UpdateJobPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        
        <CareerFooter />
      </Router> */}
    </AppProvider>
  );
}

export default App;
