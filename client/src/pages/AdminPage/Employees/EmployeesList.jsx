import React from 'react'
import { Link } from "react-router-dom";

const EmployeesList = (props) => {
  const {employee} = props
  const { personal, teamLead , _id , status } = employee

  return (
    <div className='hover:bg-gray-50'>
      <Link to={`/detail/${_id}/edit`}>
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {`${personal.firstName} ${personal.lastName}`}
        </th>
        <td className="px-6 py-4">{personal.headline}</td>
        <td className="px-6 py-4">{teamLead? teamLead : "None TeamLead"}</td>
        <td className="px-6 py-4">{status? status : "None Status"}</td>
      </Link>
    </div>
  );}

export default EmployeesList