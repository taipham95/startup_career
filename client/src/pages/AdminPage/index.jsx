import EmployeesStatus from "./Overview/EmployeesStatus";
import JobStatistics from "./Overview/JobStatistics";
import SearchAndInforAdmin from "./SearchAndInforAdmin";
import Sidebar from "./Sidebar";
import CandidatesPage from "./CandidatesPage";

const AdminPage = () => {
  return (
    <main className="flex justify-center w-[100%]">
      <Sidebar className="w=[25%]" />
      <div className="flex flex-col w-[100%]">
        <SearchAndInforAdmin />
        <JobStatistics />
        <EmployeesStatus />
        {/* <CandidatesPage /> */}
      </div>
    </main>
  );
};
export default AdminPage;
