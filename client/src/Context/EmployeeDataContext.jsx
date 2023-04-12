import { useState, useEffect, createContext } from "react";
import axios from "axios";
import useFetchAllEmploy from "../hooks/useFetchAllEmploy";
export const EmployeeContext = createContext({});

export const EmployeeProvider = ({ children }) => {
    
    const { employee, loading, error , setEmploysData } = useFetchAllEmploy();

    console.log("LOG API Employee", employee);

    return (
        <EmployeeContext.Provider value={{ employee , setEmploysData }}>
            {children}
        </EmployeeContext.Provider>
    );
};

