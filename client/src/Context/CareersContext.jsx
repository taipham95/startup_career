import { useState, useEffect, createContext } from "react";
import axios from "axios";
export const CareersContext = createContext({});
export const AppProvider = ({ children }) => {
  const [jobsData, setJobsData] = useState([]);
  useEffect(() => {
    console.log("LOGGER");
    const handleFetchJobs = async () => {
      const response = await axios.get("http://localhost:8001/careers/jobs");
      setJobsData(response.data.data);
      console.log(response.data.data);
    };
    handleFetchJobs();
  }, []);
  return (
    <CareersContext.Provider value={{ jobsData }}>
      {children}
    </CareersContext.Provider>
  );
};
