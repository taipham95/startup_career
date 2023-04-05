import React from "react";
import { useState, useEffect } from "react"
const CandidatesPage = () => {
  const CandidatesData = [
    {
      name: "Aohn Doe 1",
      position: "DevOps Engineer",
      salary: "5000",
      status: "Onboarding",
    },
    {
      name: "Cohn Doe 2",
      position: "Senior Game Engineer",
      salary: "4000",
      status: "Onboarding",
    },
    {
      name: "Eohn Doe 3",
      position: "Product Designer",
      salary: "4000",
      status: "Offboarding",
    },
    {
      name: "Dohn Doe 4",
      position: "Social Media Specialist",
      salary: "3500",
      status: "Onboarding",
    },
    {
      name: "Bohn Doe 5",
      position: "Senior Game Designer - Homeland",
      salary: "5000",
      status: "Offboarding",
    },
  ];


  const [check, setCheck] = useState(true);
  const [val, setVal] = useState("");
  const [sort1, setSort1] = useState("");
  const [sort2, setSort2] = useState("");

  const [sortedArray, setSortedArray] = useState([...CandidatesData]);

  // const handleSort = () => {
  //   const newArray = [...CandidatesData];
  //   newArray.sort((a, b) => b.localeCompare(a));
  //   setSortedArray(newArray);
  // };

  // const handleReverse = () => {
  //   setSortedArray([...sortedArray].reverse());
  // };

  const handleChangeVal = (e) => {
    setVal(e.target.value)
  }
  const handleSort1=(e)=>{
    setSort1(e.target.value)
    
  }
  const handleSort2=(e)=>{
    setSort2(e.target.value)
   
  }

  useEffect(()=>{
    const newArray = [...CandidatesData];
    // console.log(newArray)
    newArray.sort((a, b) => b.name.localeCompare(a.name));

    if(sort2=="Z - A"){

    setSortedArray(newArray);
    console.log(sortedArray)
    }else if(sort2=="A - Z"){

      setSortedArray(newArray.reverse());
      console.log(sortedArray)
    }else if(sort2=="Sort Name"){
      setSortedArray([...CandidatesData])
    }
  }, [sort2])

  return (
    <div class="bg-white px-4 pt-3 pb-4 flex-1">
      {/* 
            <div>
            <strong>Candidate List</strong>
            <div class=''>  
                   
                        <div className='flex text-amber-400 w-full justify-between'>
                            <div>NAME</div>
                            <div>POSITION</div>
                            <div>SALARY</div>
                            <div>STATUS</div>
                        </div>
                   
                    
                        {CandidatesData.map(candidate => (
                            <tr key ={candidate.id}>
                                
                                <td>{candidate.name}</td>
                                <td>{candidate.positizon}</td>
                                <td>{candidate.salary}</td>

                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span class="relative">{candidate.status}</span>
									</span>
								</td>

                            </tr>
                        ))}
                    
                
            </div>
            </div> 
            */}

      <section class="px-4 py-2">
        <div class="">
          <div class="flex items-center justify-between pb-2 bg-white dark:bg-gray-900  ">
            <div>
              <p class="font-semibold">Candidate List</p>
            </div>

            {
              check ? (
                <button onClick={() => setCheck(false)}
                  type="button"
                  class="flex  text-slate-500 bg-white border border-gray-200 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-3 py-1 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="w-5 h-5 pr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                    />
                  </svg>
                  <div class="pt-[1px]">Filter & Sort</div>
                </button>
              ) :
                (
                  <div className="w-3/5 flex justify-around">
                    <div class="relative w-3/5">
                      <div className=" absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                      </div>
                      <input value={val} onChange={handleChangeVal} type="search" id="default-search" className=" block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                    </div>
                    {/* <select value={sort1} onChange={handleSort1} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
                      <option selected value="">Sort Salary</option>
                      <option value="High - Low">High - Low</option>
                      <option value="Low - High">Low - High</option>
                    </select> */}
                    <select value={sort2} onChange={handleSort2} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
                      <option selected value="Sort Name">Sort Name</option>
                      <option value="A - Z">A - Z</option>
                      <option value="Z - A">Z - A</option>
                    </select>
                  </div>


                )
            }




          </div>
          <div class="relative overflow-x-auto border-[1.5px] rounded-lg w-full">
            <table class="w-full  text-sm text-center text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-500  bg-gray-100 border-b-[1.5px] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-3 py-3 font-semibold">
                    Name
                  </th>
                  <th scope="col" class="px-3 py-3 font-semibold">
                    Job Title
                  </th>
                  <th scope="col" class="px-3 py-3 font-semibold">
                    Salary
                  </th>
                  <th scope="col" class="px-3 py-3 font-semibold">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  // sort2==="A - Z"||sort2==="Z - A"?sortedArray:CandidatesData
                  sortedArray
                    .filter((item) => {
                      return (
                        item.name.toLowerCase().includes(val.toLowerCase())
                      )
                    })
                    .map((item) => {
                      return (
                        <tr class="bg-white  border-b-[1.5px] dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th
                            scope="row"
                            class="flex items-center px-6 py-1 text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <img
                              class="w-10 h-10 rounded-full object-cover"
                              src="https://huanluyenchothanhtai.com/wp-content/uploads/2019/07/mau-mat-husky.jpg"
                              alt="Jese image"
                            ></img>

                            <div class="text-xs font-semibold pl-3">{item.name}</div>
                          </th>
                          <td class="px-6 py-4 text-xs">{item.position}</td>
                          <td class="px-6 py-4">
                            <div class="text-xs ">{item.salary}</div>
                          </td>
                          <td class="pl-6 pr-2 py-4">
                            {
                              item.status == "Onboarding" ?
                                (
                                  <mark class="text-xs px-3 py-2 font-semibold bg-green-100 text-green-600 rounded-md">
                                    {item.status}
                                  </mark>
                                )
                                :
                                (
                                  <mark class="text-xs px-3 py-2 bg-orange-100 text-orange-600 font-semibold  rounded-md">
                                    {item.status}
                                  </mark>
                                )
                            }

                          </td>
                        </tr>
                      )
                    })
                }

              </tbody>
            </table>
            <nav
              class="flex items-center justify-between py-2 pt-1 pl-2"
              aria-label="Table navigation"
            >
              <span class="text-xs font-normal text-gray-500 dark:text-gray-400">
                Showing{" "}
                <span class="font-semibold text-gray-900 dark:text-white">
                  1-5
                </span>{" "}
                of{" "}
                <span class="font-semibold text-gray-900 dark:text-white">
                  1000
                </span>
              </span>
              <ul class="inline-flex items-center -space-x-px">
                <li>
                  <a
                    href="#"
                    class="block px-2 py-2 ml-0  text-gray-500 bg-white  hover:bg-slate-100 hover:rounded-full  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span class="sr-only">Previous</span>
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="px-2 py-2 text-xs text-gray-500 bg-white  border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="px-2 py-2 text-xs text-gray-500 bg-white  border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="px-2 py-2 text-xs text-gray-500 bg-white  border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="px-2 py-2 text-xs text-gray-500 bg-white  border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    ...
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="px-2 py-2 text-xs text-gray-500 bg-white  border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    100
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-1 py-1 ml-0  text-gray-500 bg-white  hover:bg-slate-100 hover:rounded-full  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span class="sr-only">Previous</span>
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CandidatesPage;
