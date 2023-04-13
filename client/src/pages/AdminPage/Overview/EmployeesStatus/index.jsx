import DoughnutChart from "../DoughnutChart";

const EmployeesStatus = () => {
  return (
    <section className="px-4 py-2 flex justify-between">
      <div className=" flex flex-col  w-2/3">
        <div className="flex items-center justify-between pb-2 bg-white dark:bg-gray-900  ">
          <div>
            <p className="font-semibold">Employee Status</p>
          </div>

          <button
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
        </div>
        <div className="relative overflow-x-auto border-[1.5px] rounded-lg ">
          <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-500  bg-gray-100 border-b-[1.5px] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-3 py-3 font-semibold">
                  Employee Name
                </th>
                <th scope="col" className="px-3 py-3 font-semibold">
                  Job Title
                </th>
                <th scope="col" className="px-3 py-3 font-semibold">
                  Team Lead
                </th>
                <th scope="col" className="px-3 py-3 font-semibold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white  border-b-[1.5px] dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="flex items-center px-6 py-1 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://huanluyenchothanhtai.com/wp-content/uploads/2019/07/mau-mat-husky.jpg"
                    alt="Jese image"
                  ></img>

                  <div className="text-xs font-semibold pl-3">Neil Sims</div>
                </th>
                <td className="px-6 py-4 text-xs">React Developer</td>
                <td className="px-6 py-4">
                  <div className="text-xs ">sawd sda</div>
                </td>
                <td className="pl-6 pr-2 py-4">
                  <mark className="text-xs px-3 py-2 font-semibold bg-orange-100 text-orange-600 rounded-md">
                    Offboarding
                  </mark>
                </td>
              </tr>
              <tr className="bg-white  border-b-[1.5px] dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="flex items-center px-6 py-1 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://huanluyenchothanhtai.com/wp-content/uploads/2019/07/mau-mat-husky.jpg"
                    alt="Jese image"
                  ></img>

                  <div className="text-xs font-semibold pl-3">Neil Sims</div>
                </th>
                <td className="px-6 py-4 text-xs">React Developer</td>
                <td className="px-6 py-4">
                  <div className="text-xs ">sawd sda</div>
                </td>
                <td className="pl-6 pr-2 py-4">
                  <mark className="text-xs px-3 py-2 font-semibold bg-green-100 text-green-600 rounded-md">
                    Onboarding
                  </mark>
                </td>
              </tr>
              <tr className="bg-white  border-b-[1.5px] dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="flex items-center px-6 py-1 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://huanluyenchothanhtai.com/wp-content/uploads/2019/07/mau-mat-husky.jpg"
                    alt="Jese image"
                  ></img>

                  <div className="text-xs font-semibold pl-3">Neil Sims</div>
                </th>
                <td className="px-6 py-4 text-xs">React Developer</td>
                <td className="px-6 py-4">
                  <div className="text-xs ">sawd sda</div>
                </td>
                <td className="pl-6 pr-2 py-4">
                  <mark className="text-xs px-3 py-2 font-semibold bg-green-100 text-green-600 rounded-md">
                    Onboarding
                  </mark>
                </td>
              </tr>
              <tr className="bg-white  border-b-[1.5px] dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="flex items-center px-6 py-1 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://huanluyenchothanhtai.com/wp-content/uploads/2019/07/mau-mat-husky.jpg"
                    alt="Jese image"
                  ></img>

                  <div className="text-xs font-semibold pl-3">Neil Sims</div>
                </th>
                <td className="px-6 py-4 text-xs">React Developer</td>
                <td className="px-6 py-4">
                  <div className="text-xs ">sawd sda</div>
                </td>
                <td className="pl-6 pr-2 py-4">
                  <mark className="text-xs px-3 py-2 font-semibold bg-green-100 text-green-600 rounded-md">
                    Onboarding
                  </mark>
                </td>
              </tr>
              <tr className="bg-white  border-b-[1.5px] dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="flex items-center px-6 py-1 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://huanluyenchothanhtai.com/wp-content/uploads/2019/07/mau-mat-husky.jpg"
                    alt="Jese image"
                  ></img>

                  <div className="text-xs font-semibold pl-3">Neil Sims</div>
                </th>
                <td className="px-6 py-4 text-xs">React Developer</td>
                <td className="px-6 py-4">
                  <div className="text-xs ">sawd sda</div>
                </td>
                <td className="pl-6 pr-2 py-4">
                  <mark className="text-xs px-3 py-2 font-semibold bg-orange-100 text-orange-600 rounded-md">
                    Offboarding
                  </mark>
                </td>
              </tr>
            </tbody>
          </table>
          <nav
            className="flex items-center justify-between py-2 pt-1 pl-2"
            aria-label="Table navigation"
          >
            <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                1-5
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                1000
              </span>
            </span>
            <ul className="inline-flex items-center -space-x-px">
              <li>
                <a
                  href="#"
                  className="block px-2 py-2 ml-0  text-gray-500 bg-white  hover:bg-slate-100 hover:rounded-full  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-2 py-2 text-xs text-gray-500 bg-white  border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-2 py-2 text-xs text-gray-500 bg-white  border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-2 py-2 text-xs text-gray-500 bg-white  border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-2 py-2 text-xs text-gray-500 bg-white  border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  ...
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-2 py-2 text-xs text-gray-500 bg-white  border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  100
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-1 py-1 ml-0  text-gray-500 bg-white  hover:bg-slate-100 hover:rounded-full  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="w-1/3 pl-7 pr-2 ">
        <p className="font-semibold pt-1 pb-4">Working Format</p>
        <div className="border-[1.5px] rounded-lg h-[356px] flex justify-center items-center">
          <DoughnutChart />
        </div>
      </div>
    </section>
  );
};
export default EmployeesStatus;
