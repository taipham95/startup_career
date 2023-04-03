import EmployeesStatus from "./Overview/EmployeesStatus";
import JobStatistics from "./Overview/JobStatistics";
import SearchAndInforAdmin from "./SearchAndInforAdmin";
import Sidebar from "./Sidebar";

const AdminPage = () => {
  return (
    <main className="flex justify-center ">
      <div className=" flex justify-start border-[1.5px] border-slate-300 ">
        <Sidebar />
        <div className="flex flex-col">
          <SearchAndInforAdmin />
          <JobStatistics />
          <EmployeesStatus />
        </div>
      </div>
    </main>
  );
};
export default AdminPage;
