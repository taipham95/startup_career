import React from 'react'
import EmployeesList from './EmployeesList'

const EmployeesPage = (props) => {
    const { employee } = props

    const employUser = employee && employee?.map((employee) => (
      <EmployeesList key={employee.id} employee={employee} />
    ));

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                    Employee Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Job Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Team Lead
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Status
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600">
                    {employUser}
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default EmployeesPage