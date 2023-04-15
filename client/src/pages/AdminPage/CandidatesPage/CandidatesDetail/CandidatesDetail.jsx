import React from "react";
import { useEffect, useState } from "react";
import DetailHeader from "./DetailHeader/DetailHeader";
import Field from "./Field/Field";
const CandidatesDetail=()=>{
    return(
        <div className="p-2">
            <DetailHeader/>
            <div className="grid grid-cols-3">
                <div className="m-[auto] w-[60%]">
                    <Field text="FIRST NAME"/>
                    <Field text="LAST NAME"/>
                    <Field text="EMAIL"></Field>
                    <Field text="PHONE"></Field>
                    <Field text="ADDRESS"></Field>
                    <Field text="SCHOOL"></Field>
                    <Field text="EXPERIENCES"></Field>
                </div>



                <div className="text-center">hai</div>



                <div className="text-center">ba</div>
            </div>
        </div>
    )
}
export default CandidatesDetail;