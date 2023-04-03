import EmployeesStatus from "./Overview/EmployeesStatus";
import JobStatistics from "./Overview/JobStatistics";
import SearchAndInforAdmin from "./SearchAndInforAdmin";
import Sidebar from "./Sidebar";

const AdminPage = () => {
  return (
    <main class="flex justify-center w-[100vw]">
      <div class=" flex justify-start border-[1.5px] border-slate-300 w-full">
        <Sidebar class="w=[1%]"/>
        <div class="flex flex-col w-[99%]">
          <SearchAndInforAdmin />
          <JobStatistics />
          <EmployeesStatus />
        </div>
      </div>
    </main>
  );
};
export default AdminPage;
