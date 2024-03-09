"use client";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Portfolio from "@/components/Portfolio";
import { PortfolioContext } from "@/context/context";
import Revealer from "@/layouts/Revealer";
import PortfolioLayout from "@/layouts/PortfolioLayout";
import { useContext, useEffect } from "react";

const Page = () => {
  const { darkToggle, changeColor } = useContext(PortfolioContext);
  useEffect(() => {
    darkToggle();
    changeColor("green");
  }, []);

  return (
    <PortfolioLayout>
      {/* Main Content Starts */}
      <div className="w-full h-full pages overflow-hidden">
        {/* Home Starts */}
        <Home authorImage={"assets/img/light.jpg"} />
        {/* Home Ends */}
        {/* About Starts */}
        <About />
        {/* About Ends */}
        {/* Portfolio Starts */}
        {/* <Portfolio /> */}
        {/* Portfolio Ends */}
        {/* Contact Starts */}
        <Contact />
        {/* Contact Ends */}
      </div>
      <Revealer />
    </PortfolioLayout>
  );
};
export default Page;
