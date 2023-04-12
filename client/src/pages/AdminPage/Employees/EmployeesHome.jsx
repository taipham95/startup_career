import React from 'react'
import EmployeesPage from './EmployeesPage'
import EmployeesList from './EmployeesList'
import EmployService from '../../../services/employService';
import { useState, useEffect , useContext } from "react";
import { EmployeeContext } from '../../../Context/EmployeeDataContext';

const EmployeesHome = () => {
  const { employee , setEmploysData } = useContext(EmployeeContext);
  
  return (
    <div>
      <EmployeesPage employee={employee}/>
    </div>
  )
}

export default EmployeesHome