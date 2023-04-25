import React from "react";
import { Link, useNavigate, useRoutes } from "react-router-dom";
const EmployItem=(props)=>{
  const navigate=useNavigate();
    const bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    // console.log(personal.lastName.split(" ").reduce((acc, cur) => acc += cur[0], ""))
    const {employee} = props
    const { personal,experience, teamLead , _id , status, salary } = employee
    const onclick=()=>{
      // navigate(`/candidates/${_id}/edit`);
      navigate(`/admin/candidates/${_id}/edit`)
      
    }
        return(
         

          <tr onClick={onclick} className="border-b-[1.5px] dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            {/* <Link to={`/candidates/${_id}/edit`}> */}

                          <th
                            scope="row"
                            className="flex items-center px-6 py-1 text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <div className={`w-12 h-12 flex justify-center items-center rounded-full text-xl text-white uppercase`}
                            style={{
                              background: bgColor
                            }}
                            >{(personal?.lastName+" "+personal?.firstName).split(" ").reduce((acc, cur) => acc += cur[0], "")}</div>
                            {/* cho-nay-chua-hieu-tai-sao-sai */}

                            <div className="text-xs font-semibold pl-3">
                              {personal?.lastName + " " + personal?.firstName}
                            </div>


                          </th>
                          <td class="px-6 py-4 text-xs">{experience?.title?experience.title:"Fresher Software"}</td>
                          <td class="px-6 py-4">
                            <div class="text-xs ">{teamLead?teamLead:"None TeamLead"}</div>
                          </td>
                          <td class="px-6 py-4">
                            {/* <div class="text-xs ">{item.totalcomp}</div> */}
                            <div class="text-xs ">3000000</div>
                          </td>
                          <td class="px-6 py-4">
                            {/* <div class="text-xs ">{item.salary}</div> */}
                            <div class="text-xs ">{salary?salary:"None"}</div>
                          </td>
                          <td class="px-6 py-4">
                            {/* <div class="text-xs ">{item.actual}</div> */}
                            <div class="text-xs ">10</div>
                          </td>
                          <td class="px-6 py-4">
                            {/* <div class="text-xs ">{item.recurring}</div> */}
                            <div class="text-xs ">10</div>
                          </td>
                          {/* <td class="px-6 py-4">
                            <div class="text-xs ">{item.offset}</div>
                          </td>
                          <td class="px-6 py-4">
                            <div class="text-xs ">{item.offcycle}</div>
                          </td> */}
                          <td class="px-6 py-4">
                            {/* <div class="text-xs ">{item.unpaid}</div> */}
                            <div class="text-xs ">10</div>
                          </td>
                          <td class="pl-6 pr-2 py-4">
                            {status ? (
                              status=="ONBOARDING"?
                              <mark className="text-xs px-3 py-2 font-semibold bg-green-100 text-green-600 rounded-md">
                                {status}
                              </mark>
                              :
                              <mark class="text-xs px-3 py-2 bg-orange-100 text-orange-600 font-semibold rounded-md">
                                {status}
                              </mark>
                            ) : (
                              "None Status"
                            )}
                          </td>
                          {/* </Link> */}
            </tr>

        )
}
export default EmployItem;