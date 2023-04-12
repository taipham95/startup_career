import { useState, useEffect } from "react";
import { json, useParams } from "react-router-dom";
import EmployService from "../services/employService";

const useFetchAllEmploy = (props) => {
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const param = useParams()
  
  useEffect(() => {
    fetchEmploy();
  }, []);

  const setEmploysData = (newContacts) => setEmployee(newContacts);

  const fetchEmploy = async () => {
    setLoading(true);

    try {
      const employResponse = await EmployService.getAll();
      const employData = employResponse.data.data;
      setEmployee(employData);
      setLoading(false);
    } catch (error) {
      console.error(error.response.data);
      setError(error.response.data);
      setLoading(false);
    }
  };

  return { employee, loading, error , setEmploysData};
};

export default useFetchAllEmploy;
