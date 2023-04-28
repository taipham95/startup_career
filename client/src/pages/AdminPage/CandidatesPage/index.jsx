
import React from "react";
import { useState, useEffect, useContext } from "react";
import ReactPaginate from "react-paginate";
import { CareersContext } from "../../../Context/CareersContext";
import EmployItem from "./EmployItem/EmployItem";
import { Link } from "react-router-dom";
const CandidatesPage = () => {

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;
  const [check, setCheck] = useState(true);
  const [val, setVal] = useState("");
  const [sort1, setSort1] = useState("");
  const [sort2, setSort2] = useState("");
  const { employee } = useContext(CareersContext)
  console.log(employee);
  // const [sortedArray, setSortedArray] = useState([...employee]); 

  // const [sortedArray, setSortedArray] = useState(employee.slice());





  // const handleSort = () => {
  //   const newArray = [...employee];
  //   newArray.sort((a, b) => b.localeCompare(a));
  //   setSortedArray(newArray);
  // };

  // const handleReverse = () => {
  //   setSortedArray([...sortedArray].reverse());
  // };

  const handleChangeVal = (e) => {
    setVal(e.target.value);
  };
  const handleSort1 = (e) => {
    setSort1(e.target.value);
  };
  const handleSort2 = (e) => {
    setSort2(e.target.value);
  };

  // useEffect(() => {
  //   const newArray = [...employee];
  //   // console.log(newArray)
  //   newArray.sort((a, b) => b.personal.lastName.localeCompare(a.personal.lastName));
  //   // console.log("day la newArray", newArray);

  //   if (sort2 == "Z - A") {
  //     setSortedArray(newArray);
  //     console.log(sortedArray);
  //   } else if (sort2 == "A - Z") {
  //     setSortedArray(newArray.reverse());
  //     console.log(sortedArray);
  //   } else if (sort2 == "Sort Name") {
  //     setSortedArray([...employee]);
  //   }
  // }, [sort2]);

  console.log("day la employee : ", employee)

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentEmployeess = employee?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(employee?.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % employee.length;
    console.log(`DA FIX User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };
  const [sortedArray, setSortedArray] = useState(currentEmployeess?.slice());

  useEffect(() => {
    const newArray = [...currentEmployeess? currentEmployeess : ''];
    // console.log(newArray)
    newArray.sort((a, b) => b?.personal.lastName.localeCompare(a?.personal?.lastName));
    // console.log("day la newArray", newArray);

    if (sort2 == "Z - A") {
      setSortedArray(newArray);
      console.log(sortedArray);
    } else if (sort2 == "A - Z") {
      setSortedArray(newArray.reverse());
      console.log(sortedArray);
    } else if (sort2 == "Sort Name") {
      setSortedArray([...currentEmployeess]);
    }
  }, [sort2]);

  useEffect(() => {
    setSortedArray([...currentEmployeess?.slice()])
  }, [currentEmployeess?.length])

  console.log("day la sortarray : ", sortedArray)




  
  return (
    <div className="bg-white px-4 pt-3 pb-4 flex-1">
      <section className="px-4 py-2">
        <div className="">
          <div className="flex items-center justify-between pb-2 bg-white dark:bg-gray-900  ">
            <div>
              <p className="font-semibold">Candidate List</p>
            </div>

            {check ? (
              <button
                onClick={() => setCheck(false)}
                type="button"
                className="flex  text-slate-500 bg-white border border-gray-200 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-3 py-1 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 pr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
                <div className="pt-[1px]">Filter & Sort</div>
              </button>
            ) : (
              <div className="w-3/5 flex justify-around">
                <div className="relative w-3/5">
                  <div className=" absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    value={val}
                    onChange={handleChangeVal}
                    type="search"
                    id="default-search"
                    className=" block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    required
                  />
                </div>
                {/* <select value={sort1} onChange={handleSort1} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
                      <option selected value="">Sort Salary</option>
                      <option value="High - Low">High - Low</option>
                      <option value="Low - High">Low - High</option>
                    </select> */}
                <select
                  value={sort2}
                  onChange={handleSort2}
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                >
                  <option selected value="Sort Name">
                    Sort Name
                  </option>
                  <option value="A - Z">A - Z</option>
                  <option value="Z - A">Z - A</option>
                </select>
              </div>
            )}
          </div>
          <div className="relative overflow-x-auto border-[1.5px] rounded-lg w-full">
            <table className="w-full  text-sm text-center text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-500  bg-gray-100 border-b-[1.5px] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-3 py-3 font-semibold">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3 font-semibold">
                    Job Title
                  </th>
                  <th scope="col" class="px-3 py-3 font-semibold">
                    Team Lead
                  </th>
                  <th scope="col" class="px-3 py-3 font-semibold">
                    Total Comp
                  </th>
                  <th scope="col" class="px-3 py-3 font-semibold">
                    Salary
                  </th>
                  <th scope="col" class="px-3 py-3 font-semibold">
                    Actual
                  </th>
                  <th scope="col" class="px-3 py-3 font-semibold">
                    Recurring
                  </th>

                  <th scope="col" class="px-3 py-3 font-semibold">
                    Unpaid
                  </th>
                  <th scope="col" class="px-3 py-3 font-semibold">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>

                {

                  // sort2==="A - Z"||sort2==="Z - A"?sortedArray:employee
                  sortedArray
                    // employee
                    // currentEmployeess
                    .filter((item) => {
                      return (item.personal.lastName+" "+item.personal.firstName)
                        .toLowerCase()
                        .includes(val.toLowerCase()) 
                    })

                    ?.map((item) => {

                      return (
                        // <tr className="border-b-[1.5px] dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                        <EmployItem key={item._id} employee={item} />
                      )
                    })
                }
              </tbody>
            </table>

            <nav
        className="flex items-center justify-between py-2 pt-1 pl-2"
        aria-label="Table navigation"
      >
        <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {endOffset >= employee?.length
              ? `${itemOffset + 1}-${employee?.length}`
              : `${itemOffset + 1}-${endOffset}`}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {employee?.length}
          </span>
        </span>

        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel="<"
          marginPagesDisplayed={2}
          renderOnZeroPageCount={null}
          className="inline-flex items-center -space-x-px"
          pageLinkClassName="px-2 py-2 text-xs text-gray-500 bg-white  border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          nextLinkClassName="px-2 py-2 text-xs text-gray-500 bg-white  border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          previousLinkClassName="px-2 py-2 text-xs text-gray-500 bg-white  border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          activeLinkClassName="px-2 py-2 text-xs text-gray-800 bg-white font-bold"
        />
      </nav>



          </div>
        </div>
      </section>
      
    </div>
  );
};


export default CandidatesPage;
