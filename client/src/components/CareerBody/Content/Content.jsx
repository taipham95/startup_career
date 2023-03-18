import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import CardItem from '../Components/CardItem/CardItem';
const Content = () => {

    const jobList = [
        {
            id:1,
            title: "DevOps Engineer",
            descriptions: "VietNam , Ho Chi Minh City - Full-time",
            position: "Engineer"
        },
        {
            id:2,
            title: "QA Engineer",
            descriptions: "VietNam , Ho Chi Minh City - Full-time",
            position: "Engineer"
        },
        {
            id:3,
            title: "Senior Game Engineer",
            descriptions: "VietNam , Ho Chi Minh City - Full-time",
            position: "Engineer"
        },
        {
            id:4,
            title: "Product Designer",
            descriptions: "VietNam , Ho Chi Minh City - Full-time",
            position: "Engineer"
        },
        {
            id:5,
            title: "Senior Analytics Engineer",
            descriptions: "VietNam , Ho Chi Minh City - Full-time",
            position: "Engineer"
        },
        {
            id:6,
            title: "Growth Data Analyst (APAC Remote/HCMC, relocation support available)",
            descriptions: "VietNam , Ho Chi Minh City - Full-time",
            position: "Engineer"
        },
        {
            id:7,
            title: "Social Media Specialist",
            descriptions: "United States , Michigan Center - Full-time",
            position: "Growth"
        },
        {
            id:8,
            title: "Marketing Creative Manager",
            descriptions: "VietNam , Ho Chi Minh City - Full-time",
            position: "Growth"
        }
    ]

    const [key, setKey] = useState("");
    const [select1,setSelect1]=useState("");
    const [select2,setSelect2]=useState("");
    const handleChangeKey = (e) => {
        setKey(e.target.value);
    }
    const handleReset=()=>{
        setKey("");
        setSelect1("");
        setSelect2("");
    }
    const handleChangeSelect1=(e)=>{
        setSelect1(e.target.value);
        console.log(select1)
    }
    const handleChangeSelect2=(e)=>{
        setSelect2(e.target.value);
        console.log(select2)

    }
    return (
        <div className='w-2/3 m-auto'>
            <div className=' flex justify-between mt-20 mb-8'>
                <div className="w-88 flex  justify-around ">
                    <div class="relative w-1/3">
                        <div className=" absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <input value={key} onChange={handleChangeKey} type="search" id="default-search" className=" block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                    </div>

                    <select onChange={handleChangeSelect1} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-2/5">
                        <option selected value="">Location</option>
                        <option value="Remote">Remote</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="United States">United States</option>
                    </select>
                    <select onChange={handleChangeSelect2} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-1/5">
                        <option selected value="">Department</option>
                        <option value="Art">Art</option>
                        <option value="Engineer">Engineer</option>
                        <option value="Finance">Finance</option>
                        <option value="Game Production">Game Production</option>
                        <option value="Growth">Growth</option>

                        <option value="HR & Admin">HR & Admin</option>

                        <option value="Legal">Legal</option>
                        <option value="Product">Product</option>


                    </select>

                </div>
                <button onClick={handleReset} className='text-blue-500 text-base font-medium'>Reset Filter</button>
            </div>

            <div className=' p-2 '>
                <div className=' text-3xl font-bold border-b-2 pb-7 '>{jobList.length} total position</div>
                {/* <CardItem/> */}
                {jobList
                    // filter item by keyword
                    .filter((item) => {
                        return (
                            item.title.toLowerCase().includes(key.toLowerCase()) ||
                            item.descriptions.toLowerCase().includes(key.toLowerCase())
                        );
                    })
                    .filter((item) => (select1 === "" || item.descriptions.toLowerCase().includes(select1.toLowerCase())) && (select2 === "" || item.position.toLowerCase().includes(select2.toLowerCase())))
                    // .filter((item) => select2 === "" || item.position.toLowerCase().includes(select2.toLowerCase()))
                  
                    .map((item) => {
                        return (
                            <Link to={`/item/${item.id}`}>
                            <CardItem
                                id={item.id}
                                title={item.title}
                                descriptions={item.descriptions}
                                position={item.position}
                            />
                            </Link>
                        );
                    })}
            </div>
        </div>
    );
}
export default Content;