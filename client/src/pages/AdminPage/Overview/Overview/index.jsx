import JobStatistics from "../JobStatistics";
import EmployeesStatus from "../EmployeesStatus";
const Overview =()=>{
    return(
        <div>
            <JobStatistics />
            <EmployeesStatus itemsPerPage={5}/>
        </div>
    )
}
export default Overview;