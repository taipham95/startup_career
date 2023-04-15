import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import icon cụ thể

const DetailHeader = ()=>{
    return(
        <div className="flex justify-between items-center p-2 h-1/6">
            <div className="flex items-center">
            {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> */}
            <FontAwesomeIcon icon={faArrowLeft} />
                <img className="rounded-[100%] w-[40px] h-[40px]" src="/person-icon.png"></img>
                <h3 className="p-2">Thinh Phuc</h3>
            </div>
            <div>
                <button className="text-[#b91c1c] bg-[#fda4af] p-3 rounded-[10px]">
                    <FontAwesomeIcon icon={faTrash} /> {/* Sử dụng icon */}
                    Delete
                </button>
            </div>
        </div>
    )
}
export default DetailHeader;
