import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import { AppProvider } from './Context/CareersContext';
import CareerHeader from "./components/CareerHeader";
import CareerFooter from "./components/CareerFooter";
import ApplyPage from './pages/ApplyPage/ApplyPage';
import JobDetail from './components/JobDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import CareerPage from './components/CareerPage/CareerPage';

function App() {
  return (
    <Router>
      <AppProvider>
        <CareerHeader />
        <Routes>
          <Route exact path="/" element={<CareerPage />} />
          <Route exact path="/careers" element={<CareerPage />} />
          <Route exact path="/careers/:id" element={<JobDetail />} />
          <Route exact path="/careers/:id/apply" element={<ApplyPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <CareerFooter />
      </AppProvider>
    </Router>
  );
}

export default App;
