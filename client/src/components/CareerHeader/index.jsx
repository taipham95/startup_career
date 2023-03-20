import React from "react";
import { Link } from "react-router-dom";
function CareerHeader() {
  return (
    <header className="w-full h-[70px] md:h-[80px] sticky top-0 z-[90] flex items-center border border-solid border-[#eef3fb] bg-white">
      <div class="w-full md:container flex justify-between items-center mx-auto px-[24px]">
        <Link to={"/careers"}>  <a class="cursor-pointer" href="/" rel="noreferrer">
          <img
            width="178"
            src="https://www.skymavis.com/images/branding.svg"
            alt="sky-mavis-branding"
          />
        </a></Link>
        <ul class="h-full hidden md:flex">
          <li class="cursor-pointer h-full grid place-items-center font-semibold hover:text-blue-500 transition-all svelte-15jlsr3">
            <a class="p-[20px]" href="/products" rel="noreferrer">
              Products
            </a>
          </li>
          <li class="cursor-pointer h-full grid place-items-center font-semibold hover:text-blue-500 transition-all svelte-15jlsr3">
            <a class="p-[20px]" href="/team" rel="noreferrer">
              Team
            </a>
          </li>
          <li class="cursor-pointer h-full grid place-items-center font-semibold hover:text-blue-500 transition-all svelte-15jlsr3">
            <a
              class="p-[20px]"
              href="https://axie.substack.com/"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </li>
          <Link to="/careers"> <li class="cursor-pointer h-full grid place-items-center font-semibold hover:text-blue-500 transition-all svelte-15jlsr3 active">
            <a class="p-[20px]" href="/careers" rel="noreferrer">
              Careers
            </a>
          </li>      </Link>
        </ul>
        <button class="md:hidden" title="Open Drawer">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 14H36V17H12V14ZM12 22H36V25H12V22ZM36 30H12V33H36V30Z"
              fill="#1D273D"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default CareerHeader;
