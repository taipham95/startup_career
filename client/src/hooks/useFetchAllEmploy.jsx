<<<<<<< HEAD
import { useState, useEffect , useContext } from "react";
=======
import { useState, useEffect, useRef } from "react";
>>>>>>> fba2e92 (optimized job form)
import { json, useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import EmployService from "../services/employSevice";

const useFetchAllEmploy = (props) => {
  const [employee, setEmployee] = useState([]);
<<<<<<< HEAD

  const { state } = useContext(AuthContext)

  useEffect(() => {
    fetchEmploy();
  }, [state]);
=======
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const prevState = useRef(true);
  useEffect(() => {
    if (prevState.current) {
      prevState.current = false;
      fetchEmploy();
    }
  }, []);
>>>>>>> fba2e92 (optimized job form)

  const setEmploysData = (newContacts) => setEmployee(newContacts);

  const fetchEmploy = async () => {

    try {
      const employResponse = await EmployService.getAll();
      const employData = employResponse.data.data;
      setEmployee(employData);
    } catch (error) {
      console.error(error.response.data);
    }
  };

<<<<<<< HEAD
  return { employee , setEmploysData};
=======
  return { employee, setEmploysData };
>>>>>>> fba2e92 (optimized job form)
};

export default useFetchAllEmploy;
