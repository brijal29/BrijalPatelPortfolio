"use client";
import DayLight from "@/components/DayLight";
import Popup from "@/components/Popup";
import Preloader from "@/components/Preloader";
import Switcher from "@/components/Switcher";
import { PortfolioContext } from "@/context/context";
import { portfolioUtility } from "@/utility";
import { useContext, useEffect } from "react";
import Cursor from "./Cursor";
import Header from "./Header";

const PortfolioLayout = ({ children }) => {
  const { direction, popup, dark } = useContext(PortfolioContext);
  useEffect(() => {
    portfolioUtility.customCursor();
  }, []);
  return (
    <div
      className={`home ${dark ? "dark" : ""} bg-${dark ? "black" : "white"
        } text-${dark ? "white" : "black-6"
        } relative w-full h-full overflow-hidden anim--effect-3 animation-${direction}`}
    >
      <Preloader />
      {popup && <Popup />}
      {/* <Switcher /> */}
      <DayLight />
      {/* Live Style Switcher Ends - demo only */}

      {/* Header Starts */}
      <Header />
      {/* Header Ends */}
      {children}
      <Cursor />
    </div>
  );
};
export default PortfolioLayout;
