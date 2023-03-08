import React from "react";

const Input = ({ text, idInput, required, option, customClass}) => {
  return (
    <div className="relative mb-3 grow font-light text-sm" data-te-input-wrapper-init>
      <input
        type="text"
        className={customClass ? `${customClass} peer w-full min-h-[auto] rounded-lg border-[1px] bg-white py-[0.5rem] px-3 leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0` : "peer w-full min-h-[auto] rounded-lg border-[1px] bg-white py-[0.5rem] px-3 leading-[1.5] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"} 
        id={idInput}
        required={required}
        placeholder={text}
      />
      <label
        forHTML={idInput}
        className="pointer-events-none bg-transparent absolute h-full top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] px-3 leading-[1.6] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] peer-focus:bg-white motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-sky-500"
      >
        {option ? `${text} (${option})` : text}
      </label>
    </div>
  );
};

export default Input;
