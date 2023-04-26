import React, { useState, useContext , useContext } from "react";
import { CareersContext } from "../../../Context/CareersContext";
import { dataService } from "../../../services/dataService";
import Swal from "sweetalert2";
import JobForm from "../../../components/JobForm/JobForm";
import { CareersContext } from "../../../Context/CareersContext";

const JobCreatorPage = () => {
  return <JobForm />;
};

export default JobCreatorPage;
