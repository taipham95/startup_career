import React, { useState } from "react";
import { Link, useNavigate, useRoutes } from "react-router-dom";
const EmployItem=(props)=>{
  const f=new Intl.NumberFormat("en-us");
  const navigate=useNavigate();
    const bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    // console.log(personal.lastName.split(" ").reduce((acc, cur) => acc += cur[0], ""))
    const {employee} = props
    const { personal,experience, teamLead , _id , status, salary } = employee
    const onclick=()=>{
      // navigate(`/candidates/${_id}/edit`);
      navigate(`/admin/candidates/${_id}/edit`)
      
    }
  
    let name=(personal?.lastName + " " + personal?.firstName);

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
                            >
                        {name?.split(" ").reduce((acc, cur) => { console.log("cur",cur); if(cur=='') return acc; else return acc += cur[0];}, "")}

                              </div>
                            {/* cho-nay-chua-hieu-tai-sao-sai */}

                            <div className="text-xs font-semibold pl-3">
                              {personal?.lastName + " " + personal?.firstName}
                            </div>


                          </th>
                          <td class="px-6 py-4 text-xs">{personal?.headline?personal.headline:"Fresher Software"}</td>
                          <td class="px-6 py-4">
                            <div class="text-xs ">{teamLead?teamLead:"None TeamLead"}</div>
                          </td>
                          <td class="px-6 py-4">
                            {/* <div class="text-xs ">{item.salary}</div> */}
                            <div class="text-xs ">{salary?f.format(salary.slice(0,salary.length-4))+salary.slice(salary.length-4, salary.length):"None"}</div>
                          </td>
                          {/* <td class="px-6 py-4">
                            <div class="text-xs ">{item.offset}</div>
                          </td>
                          <td class="px-6 py-4">
                            <div class="text-xs ">{item.offcycle}</div>
                          </td> */}
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