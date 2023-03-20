import React from "react";
import MainFooter from "../CareerBody/MainFooter/MainFooter/MainFooter";
import Header from "../CareerBody/Header/Header";
import Content from "../CareerBody/Content/Content";

const CareerPage = () => {
    return (
      <div className="min-h-screen flex flex-col ml-0">
        <main className="flex-1 w-full">
          <Header />
          <Content />
        </main>
        <MainFooter />
      </div>
    )
  }
  export default CareerPage