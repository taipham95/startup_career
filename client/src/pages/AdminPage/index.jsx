import EmployeesStatus from "./Overview/EmployeesStatus";
import JobStatistics from "./Overview/JobStatistics";
import SearchAndInforAdmin from "./SearchAndInforAdmin";
import Sidebar from "./Sidebar";

const AdminPage = () => {
  return (
    <main class="flex justify-center w-[100%]">
      <Sidebar class="w=[25%]" />
      <div class="flex flex-col w-[100%]">
        <SearchAndInforAdmin />
        <JobStatistics />
        <EmployeesStatus />
      </div>
    </main>
  );
};
export default AdminPage;
