import { useState, useEffect, createContext , useContext } from "react";
import useFetchAllEmploy from "../hooks/useFetchAllEmploy";
import { dataService } from "../services/dataService";
import { BASE_URL, JOBS_ENDPOINT } from "../constants";
export const CareersContext = createContext({});
import { AuthContext } from "./AuthContext";

export const AppProvider = ({ children }) => {
  const [jobsData, setJobsData] = useState([]);
  const { employee, setEmploysData } = useFetchAllEmploy();
  const { state } = useContext(AuthContext)

  useEffect(() => {
    const handleFetchJobs = async () => {
      const response = await dataServices.getData(`${BASE_URL}${JOBS_ENDPOINT}`);
      setJobsData(response.data);
      // console.log("day la respon ne : ",response.data.data);
      console.log("day la respon ne : ",response.data);

    };
      handleFetchJobs();
  }, [state]);
  
  return (
    <CareersContext.Provider value={{ jobsData, employee, setEmploysData , setJobsData }}>
      {children}
    </CareersContext.Provider>
  );
};
