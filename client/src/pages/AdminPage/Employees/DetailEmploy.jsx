import React , { useContext , useEffect , useState} from 'react'
import { useParams , Link , useNavigate } from 'react-router-dom';
import { EmployeeContext } from '../../../Context/EmployeeDataContext';
import EmployService from '../../../services/employService';

const initialValues = {
    teamLead: "",
    status: "",
  };

const DetailEmploy = (props) => {
    const navigate = useNavigate();
    const param = useParams();
    const { id } = param;

    const { employee , setEmploysData } = useContext(EmployeeContext);
    const [employForm, setEmployForm] = useState(initialValues);

    const employData = employee.find((item) => item._id == id);

    const handleDelete = async (id) => {
        try {
            const deleteResponse = await EmployService.DeleteById(id);
            console.log("deleteResponse", deleteResponse.data.newData);
            setEmploysData(deleteResponse.data.newData)
            navigate("/employ")
          } catch (error) {
            console.log(error);
        }}

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setEmployForm({
            ...employForm,
            [name]: value,
        });
        };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const updateResponse = await EmployService.UpdateById(id, employForm);
            setEmploysData(updateResponse.data.newData)
            navigate("/employ")
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Information Employee
                </h5>
                <Link
                    onClick={() => handleDelete(id)}
                    data-target="#popup-modal"
                    data-toggle="#popup-modal"
                    className="text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                >
                    Delete
                </Link>
                <Link
                    to="/employ"
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                    Back
                </Link>
                </div>
                <div className="flow-root">
                <ul
                    role="list"
                    className="divide-y divide-gray-200 dark:divide-gray-700"
                >
                    <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {`${employData?.personal.firstName} ${employData?.personal.lastName}`}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {`${employData?.personal.email}`}
                        </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        Name & Email
                        </div>
                    </div>
                    </li>
                    <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {`${employData?.personal.phone}`}
                        </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        Phone Number
                        </div>
                    </div>
                    </li>
                    <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {`${employData?.personal.headline}`}
                        </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        Job Title
                        </div>
                    </div>
                    </li>
                    <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {employData?.teamLead}
                        </p>
                        <input
                            type="text"
                            onChange={onChangeHandler}
                            name='teamLead'
                            defaultValue={employData?.teamLead}
                            id="small-input"
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        TeamLead
                        </div>
                    </div>
                    </li>
                    <li className="pt-3 pb-0 sm:pt-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {employData?.status}
                        </p>
                        <input
                            defaultValue={employData?.status}
                            type="text"
                            onChange={onChangeHandler}
                            name='status'
                            id="small-input"
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        Status
                        </div>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
            <button
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ml-5 mt-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="submit"
                > Update
            </button>

        </form>
    </div>
  );
}

export default DetailEmploy





