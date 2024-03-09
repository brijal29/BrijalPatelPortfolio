"use client";
import { PortfolioContext } from "@/context/context";
import { Fragment, useContext } from "react";
const PortfolioCss = () => {
  const { color } = useContext(PortfolioContext);
  return (
    <Fragment>
      <link rel="stylesheet" href={`/assets/css/skins/${color}.css`} />
    </Fragment>
  );
};
export default PortfolioCss;
