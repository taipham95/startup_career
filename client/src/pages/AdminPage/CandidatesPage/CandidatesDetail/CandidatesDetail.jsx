import React from "react";
import { useEffect, useState } from "react";
import DetailHeader from "./DetailHeader/DetailHeader";
import Field from "./Field/Field";
const CandidatesDetail = () => {
    return (
        <div className="p-2 pl-7 pr-7 items-center" >
            <DetailHeader />
            <div className=" text-xs grid grid-cols-3 ">
                <div className="m-[auto] w-[70%]">
                    <div className=" text-base font-medium text-gray-400 pb-4 pt-2 ">EMPLOYEE DETAILS</div>
                    <div className="pl-3 pr-3 pt-2 pb-2 bg-slate-50  rounded-[10px] mb-4 ">
                        <div className="text-gray-400 pb-1">FIRST NAME</div>
                        <div>PHUC</div>
                    </div>
                    <div className="pl-3 pr-3 pt-2 pb-2 bg-slate-50  rounded-[10px] mb-4 ">
                        <div className="text-gray-400 pb-1">LAST NAME</div>
                        <div>LE THINH</div>
                    </div>
                    <div className="pl-3 pr-3 pt-2 pb-2 bg-slate-50  rounded-[10px] mb-4 ">
                        <div className="text-gray-400 pb-1">EMAIL</div>
                        <div>phuclethinh70@gmail.com</div>
                    </div>
                    <div className="pl-3 pr-3 pt-2 pb-2 bg-slate-50  rounded-[10px] mb-4 ">
                        <div className="text-gray-400 pb-1">PHONE</div>
                        <div>0812739563</div>
                    </div>
                    <div className="pl-3 pr-3 pt-2 pb-2 bg-slate-50  rounded-[10px] mb-4 ">
                        <div className="text-gray-400 pb-1">SCHOOL</div>
                        <div>MINDX</div>
                    </div>
                    <div className="pl-3 pr-3 pt-2 pb-2 bg-slate-50  rounded-[10px] mb-4 ">
                        <div className="text-gray-400 pb-1">EXPERIENCES</div>
                        <div>FULLSTACK</div>
                    </div>
                </div>



                {/* <div className="text-center">hai</div> */}
                <div className=" w-[80%]">
                    <div className=" text-base font-medium text-gray-400 pb-4 pt-2 ">TEAM LEAD</div>
                    <Field text={"Team Lead"} money={"BE WEB"}></Field>
                    <div className=" text-base font-medium text-gray-400 pb-4 pt-2 ">SALARY</div>
                    <Field text={"Salary"} money={"10.000.000"}></Field>
                    <div className=" text-base font-medium text-gray-400 pb-4 pt-2 ">STATUS</div>
                    <Field text={"Status"} money={"Work"}></Field>

                </div>


                {/* <div className="text-center">ba</div> */}
                <div className=" w-[80%]">
                    <div className=" text-base font-medium text-gray-400 pb-4 pt-2 ">ONBOARDING</div>
                    <div className="relative max-w-sm mb-3">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                        </div>
                        <label className="absolute pl-10 left-0 text-gray-500 pb-5"> Starts on</label>
                        <input datepicker datepicker-title="Flowbite datepicker" type="date" className="bg-gray-50 border border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
                    </label>

                    <div className="  text-xs font-medium text-gray-400 pb-4 pt-4 ">Onboarding Scripts</div>

                    <div className="pt-3 pb-3 flex justify-between border-b">
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Office Tour</span>
                    </label>
                    <div className="text-sm font-medium">100%</div>
                    </div>

                    <div className="pt-3 pb-3 flex justify-between border-b">
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Work Tools</span>
                    </label>
                    <div className="text-sm font-medium">20%</div>
                    </div>

                    <div className="pt-3 pb-3 flex justify-between border-b">
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Duties Journal</span>
                    </label>
                    <div className="text-sm font-medium">0%</div>
                    </div>

                    <div className="pt-3 pb-3 flex justify-between border-b">
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Requests Handling</span>
                    </label>
                    <div className="text-sm font-medium">0%</div>
                    </div>
                    <div className="pt-3 pb-3 flex justify-between border-b">
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Activity Tracking</span>
                    </label>
                    <div className="text-sm font-medium">0%</div>
                    </div>

                    

                </div>

            </div>
            <div className="pl-[35%] p-2">
                <button className="rounded-[10px] bg-black text-white text-base font-bold w-[20%] pt-2 pb-2">SAVE</button>
                <button className="w-[20%] rounded-[10px] ml-[5%] bg-slate-100 text-black text-base font-bold pt-2 pb-2">CANCEL</button>

            </div>
        </div>
    )
}
export default CandidatesDetail;