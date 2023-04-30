import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import DetailHeader from "./DetailHeader/DetailHeader";
import Field from "./Field/Field";
import EmployService from "../../../../services/employSevice";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CareersContext } from "../../../../Context/CareersContext";
import './style.css';
const initialValues = {
    teamLead: "",
    salary: "",
    status: "",
};
const CandidatesDetail = () => {
    const f=new Intl.NumberFormat("en-us");
    const navigate = useNavigate();
    const param = useParams();
    const { id } = param;
    const { employee, setEmploysData } = useContext(CareersContext);
    const [employForm, setEmployForm] = useState(initialValues);
    const employData = employee.find((item) => item._id == id);
    const [select1,setSelect1]=useState(employData?.teamLead);
    const [select2,setSelect2]=useState(employData?.salary?.slice(employData?.salary.length-3,employData?.salary.length));
    const [sal,setSal]=useState(f.format(employData?.salary))
    console.log(employData);


    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const handleDelete = async (id) => {
        try {
            const deleteResponse = await EmployService.DeleteById(id);
            console.log("deleteResponse", deleteResponse.data.newData);
            setEmploysData(deleteResponse.data.newData)
            navigate("/admin/candidates")
        } catch (error) {
            console.log(error);
        }
    }

    const handleChangeSelect1=(e)=>{
        setSelect1(e.target.value)
        setEmployForm({
            ...employForm,
            teamLead: e.target.value,
        });
    }
    const handleChangeSelect2=(e)=>{
        setSelect2(e.target.value)
    }

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

            if (employForm.salary == "") {
                employForm.salary = employData.salary;
                console.log("eSa ", employForm.salary);
            }
            if (employForm.status == "") {
                employForm.status = employData.status;
                console.log("eS ", employForm.status);

            }
            if (employForm.teamLead == "") {
                employForm.teamLead = employData.teamLead;
                console.log("eL: ", employForm.teamLead);
            }
            let newSa;
            if(employForm?.salary?.slice(employForm?.salary.length-3,employForm.salary.length)=="VND"||employForm?.salary?.slice(employForm.salary.length-3,employForm.salary.length)=="EUR"||employForm?.salary?.slice(employForm.salary.length-3,employForm.salary.length)=="USD"||employForm?.salary.slice(employForm.salary.length-3,employForm.salary.length)=="GBP"){
                
employForm.salary=employForm?.salary?.slice(0,employForm?.salary.length-4)
            }
            employForm.salary=employForm.salary+" "+select2
            const updateResponse = await EmployService.UpdateById(id, employForm);
            setEmploysData(updateResponse.data.newData)

            // console.log("final :", cnt)
            navigate("/admin/candidates")
        } catch (error) {
            console.log(error);
        }
    };
    
    console.log("avatar",(employData?.personal.lastName + " " + employData?.personal.firstName)?.split(" ").reduce((acc, cur) => acc += cur[0], ""))
    let name=(employData?.personal?.lastName + " " + employData?.personal?.firstName);
    return (
        <div className="p-2 pl-7 pr-7 items-center" >
            {/* <DetailHeader fname={employData?.personal.firstName} lname={employData?.personal.lastName} handleDelete={handleDelete(id)} id={id} /> */}
            <div className="flex justify-between items-center text-sm border-b pb-3">
                <div className="flex items-center">
                    <FontAwesomeIcon onClick={() => { navigate("/admin/candidates") }} icon={faArrowLeft} className="p-2" />
                    <div style={{ backgroundColor: `#${randomColor}` }} class="w-10 h-10 relative flex justify-center items-center rounded-full bg-green-500 text-xl text-white uppercase">
                        {name?.split(" ").reduce((acc, cur) => { console.log("cur",cur); if(cur=='') return acc; else return acc += cur[0];}, "")}</div>
                    <h3 className="p-2 font-medium">{employData?.personal?.lastName + " " + employData?.personal?.firstName}</h3>
                </div>
                <div>
                    <button onClick={() => handleDelete(id)} className="text-[#b91c1c] font-medium bg-[#fff1f2] p-3 rounded-[10px]">
                        <FontAwesomeIcon icon={faTrash} /> {/* Sử dụng icon */}
                        Delete
                    </button>
                </div>
            </div>
            <div className=" text-xs grid grid-cols-3 ">
                <div className=" w-[80%]">
                    <div className=" text-base font-medium text-gray-400 pb-4 pt-2 ">EMPLOYEE DETAILS</div>
                    <div className="pl-3 pr-3 pt-2 pb-2 bg-slate-50  rounded-[10px] mb-4 ">
                        <div className="text-gray-400 pb-1">FIRST NAME</div>
                        <div>{employData?.personal?.firstName}</div>
                    </div>
                    <div className="pl-3 pr-3 pt-2 pb-2 bg-slate-50  rounded-[10px] mb-4 ">
                        <div className="text-gray-400 pb-1">LAST NAME</div>
                        <div>{employData?.personal?.lastName}</div>
                    </div>
                    <div className="pl-3 pr-3 pt-2 pb-2 bg-slate-50  rounded-[10px] mb-4 ">
                        <div className="text-gray-400 pb-1">EMAIL</div>
                        <div>{employData?.personal?.email}</div>
                    </div>
                    <div className="pl-3 pr-3 pt-2 pb-2 bg-slate-50  rounded-[10px] mb-4 ">
                        <div className="text-gray-400 pb-1">PHONE</div>
                        <div>{employData?.personal?.phone}</div>
                    </div>
                    <div className="pl-3 pr-3 pt-2 pb-2 bg-slate-50  rounded-[10px] mb-4 ">
                        <div className="text-gray-400 pb-1">SCHOOL</div>
                        <div>{employData?.education?.school?employData?.education?.school:"MINDX"}</div>
                    </div>
                    <div className="relative  pr-3 pt-2 pb-2 bg-slate-50  rounded-[10px] mb-4 ">
                        <div className="text-gray-400 pb-1 pl-3">EXPERIENCES</div>
                        <div className="pl-3">{employData?.experience?.title?employData?.experience?.title:"1 year"}</div>
                        <div className="reab absolute ">
                            <div className="button-wrapper">
                                <button onClick={onSubmitHandler} className="p-2 pl-10 pr-10 mr-3 rounded-[10px] bg-black text-white text-base font-bold  ">SAVE</button>
                                <button onClick={() => { navigate("/admin/candidates") }} className="button-can p-2 pl-7 pr-7 rounded-[10px]  bg-slate-100 text-black text-base font-bold ">CANCEL</button>
                            </div>
                        </div>
                    </div>

                </div>




                {/* <div className="text-center">hai</div> */}
                <div className=" w-[80%]">
                    <div className=" text-base font-medium text-gray-400 pb-4 pt-2 ">DEPARTMENT</div>
                   
                         <select
                value={select1}
                onChange={handleChangeSelect1}
                id="countries"
                className="bg-white-50 font-medium border-sky-300 w-full mr-[10%] mb-5  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-4 px-3"
              >
                <option selected value="">
                  Department
                </option>
                <option value="Art">Art</option>
                <option value="Engineer">Engineer</option>
                <option value="Finance">Finance</option>
                <option value="Game Production">Game Production</option>
                <option value="Growth">Growth</option>
                <option value="HR & Admin">HR & Admin</option>
                <option value="Legal">Legal</option>
                <option value="Product">Product</option>
              </select>


                    <div className="flex text-base font-medium text-gray-400 pb-4 pt-2 ">SALARY</div>
                    {/* <Field onChangeHandler={onChangeHandler} text={"Salary"} money={employData?.salary}></Field> */}
<div className="flex">
                    <select
                     value={select2}
                     onChange={handleChangeSelect2}
                    className="bg-white-50 mr-1 border-sky-300 border-none text-red-600 mb-5  font-bold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-4 px-3">
                        <option>Fiat</option>
                        <option>VND</option>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                    </select>
                    <div className="relative grow font-light text-xs md:text-sm pb-5">
                   
                        <input
                            className={`peer font-medium text-sky border-sky-300 w-full min-h-[auto] text-xs md:text-sm rounded-lg border bg-white py-4 px-3 leading-[1.6] placeholder-gray-500 focus:placeholder-transparent placeholder:text-xs md:placeholder:text-sm outline-none transition-all duration-200 ease-linear motion-reduce:transition-none focus:outline-none focus:shadow-none focus:ring-transparent ${"dark:focus:border-sky-300 focus:border-sky-300"
                                }`}
                            placeholder={"Salary"}
                            // value={employData?.salary}
                            // onChange={onChangeHandler}
                            defaultValue={employData?.salary?.slice(0,employData?.salary.length-4)}
                            type="text"
                            onChange={onChangeHandler}
                            name='salary'
                        />
                        <label
                            className={`pointer-events-none bg-transparent absolute h-auto top-0 left-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.65rem] px-3 leading-[1.6] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[1.25rem] 
        opacity-0 peer-focus:opacity-100 peer-focus:scale-[0.9] peer-focus:left-4 peer-focus:bg-white motion-reduce:transition-none dark:text-neutral-300 ${"dark:peer-focus:text-sky-500 peer-focus:text-sky-500"
                                }`}
                        >
                            Salary
                        </label>
                    </div>
                    </div>

                    <div className=" text-base font-medium text-gray-400 pb-4 pt-2 ">STATUS</div>

                    {/* <Field onChangeHandler={onChangeHandler}   text={"Status"} money={employData?.status}></Field> */}


                    <div className="relative grow font-light text-xs md:text-sm pb-5">
                        <input
                            className={`peer font-medium text-sky border-sky-300 w-full min-h-[auto] text-xs md:text-sm rounded-lg border bg-white py-4 px-3 leading-[1.6] placeholder-gray-500 focus:placeholder-transparent placeholder:text-xs md:placeholder:text-sm outline-none transition-all duration-200 ease-linear motion-reduce:transition-none focus:outline-none focus:shadow-none focus:ring-transparent ${"dark:focus:border-sky-300 focus:border-sky-300"
                                }`}
                            placeholder={"Status"}
                            // value={employData?.status}
                            // onChange={onChangeHandler}
                            defaultValue={employData?.status}
                            type="text"
                            onChange={onChangeHandler}
                            name='status'
                        />
                        <label
                            className={`pointer-events-none bg-transparent absolute h-auto top-0 left-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.65rem] px-3 leading-[1.6] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[1.25rem] 
        opacity-0 peer-focus:opacity-100 peer-focus:scale-[0.9] peer-focus:left-4 peer-focus:bg-white motion-reduce:transition-none dark:text-neutral-300 ${"dark:peer-focus:text-sky-500 peer-focus:text-sky-500"
                                }`}
                        >
                            Status
                        </label>
                    </div>


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

                    <div className="flex-container pt-3 pb-3  border-b">

                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Office Tour</span>
                        </label>
                        <div className="text-sm font-medium">100%</div>
                    </div>

                    <div className="flex-container pt-3 pb-3  border-b">
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Work Tools</span>
                        </label>
                        <div className="text-sm font-medium">20%</div>
                    </div>

                    <div className="flex-container pt-3 pb-3  border-b">

                        <label class="relative inline-flex  cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Duties Journal</span>
                        </label>
                        <div className="text-sm font-medium">0%</div>
                    </div>

                    <div className="flex-container pt-3 pb-3  border-b">

                        <label class="relative inline-flex  cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Requests Handling</span>
                        </label>
                        <div className="text-sm font-medium">0%</div>
                    </div>
                    <div className="flex-container pt-3 pb-3  border-b">

                        <label class="relative inline-flex  cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Activity Tracking</span>
                        </label>
                        <div className="text-sm font-medium">0%</div>
                    </div>



                </div>

            </div>
            {/* <div className="pl-[35%] p-2">
                <button onClick={onSubmitHandler} className="rounded-[10px] bg-black text-white text-base font-bold w-[20%] pt-2 pb-2">SAVE</button>
                <button onClick={() => { navigate("/candidates") }} className="w-[20%] rounded-[10px] ml-[5%] bg-slate-100 text-black text-base font-bold pt-2 pb-2">CANCEL</button>

            </div> */}
        </div>
    )
}
export default CandidatesDetail;