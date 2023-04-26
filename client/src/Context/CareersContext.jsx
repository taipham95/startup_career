import { useState, useEffect, useRef, createContext } from "react";
import axios from "axios";
import useFetchAllEmploy from "../hooks/useFetchAllEmploy";
import { dataService } from "../services/dataService";
import { BASE_URL, JOBS_ENDPOINT } from "../constants";
export const CareersContext = createContext({});
export const AppProvider = ({ children }) => {
  const [jobsData, setJobsData] = useState([]);
  const { employee, setEmploysData } = useFetchAllEmploy();
  const prevState = useRef(true);

  const handleFetchJobs = async () => {
    const response = await dataService.getData(`${BASE_URL}${JOBS_ENDPOINT}`);
    setJobsData(response.data);
  };

  const onUpdateJobs = (newJob) => {
    console.log("newJob/updated job: ", newJob);
    handleFetchJobs();
  };


  // solve useEffect being called twice
  useEffect(() => {    
    if(prevState.current) {
      prevState.current = false;
      handleFetchJobs();
    }
  }, []);
  
  return (
    <CareersContext.Provider value={{ jobsData, employee, setEmploysData, onUpdateJobs }}>
      {children}
    </CareersContext.Provider>
  );
};
