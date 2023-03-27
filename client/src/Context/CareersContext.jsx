import {useState,useEffect, createContext} from 'react'
import axios from 'axios'

export const CareersContext=createContext({});

export const AppProvider=({children})=>{
    const [jobsData,setJobsData]=useState();
    useEffect(()=>{
        const handleFetchJobs=async()=>{
            const response=await axios.get();
            setJobsData(response.data.data)
            console.log(response.data.data)
        }
    },[])
    return <CareersContext.Provider value={{jobsData}}>
        {children}
    </CareersContext.Provider>

}
