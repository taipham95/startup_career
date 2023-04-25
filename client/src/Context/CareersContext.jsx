import { useState, useEffect, createContext } from "react";
import axios from "axios";
import useFetchAllEmploy from "../hooks/useFetchAllEmploy";
import { dataService } from "../services/dataService";
import { BASE_URL, JOBS_ENDPOINT } from "../constants";
export const CareersContext = createContext({});
export const AppProvider = ({ children }) => {
  const [jobsData, setJobsData] = useState([]);
  const { employee, setEmploysData } = useFetchAllEmploy();

  useEffect(() => {
    // console.log("LOGGER");
    const handleFetchJobs = async () => {
      const response = await dataService.getData(`${BASE_URL}${JOBS_ENDPOINT}`);
      setJobsData(response.data);
      // console.log(response.data);
    };
    handleFetchJobs();
  }, []);
  
  return (
    <CareersContext.Provider value={{ jobsData, employee, setEmploysData }}>
      {children}
    </CareersContext.Provider>
  );
};
