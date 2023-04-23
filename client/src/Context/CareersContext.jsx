import { useState, useEffect, createContext } from "react";
import axios from "axios";
import useFetchAllEmploy from "../hooks/useFetchAllEmploy";
import { dataServices } from "../services/dataService";
import { BASE_URL, JOBS_ENDPOINT } from "../constants";
export const CareersContext = createContext({});
export const AppProvider = ({ children }) => {
  const [jobsData, setJobsData] = useState([]);
  const { employee, setEmploysData } = useFetchAllEmploy();

  useEffect(() => {
    console.log("LOGGER");
    const handleFetchJobs = async () => {
      // const response = await dataServices.getData(`${BASE_URL}${JOBS_ENDPOINT}`);
      const response = await axios.get("http://localhost:8001/careers/jobs");

      setJobsData(response.data.data);
      console.log(response.data.data);
    };
    handleFetchJobs();
  }, []);
  
  return (
    <CareersContext.Provider value={{ jobsData, employee, setEmploysData }}>
      {children}
    </CareersContext.Provider>
  );
};
