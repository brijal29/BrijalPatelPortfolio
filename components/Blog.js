"use client";
import { PortfolioContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { portfolioUtility } from "@/utility";
import { Fragment, useContext, useEffect, useState } from "react";
import BlogDetails from "./BlogDetails";
import SectionTitle from "./SectionTitle";

const Blog = () => {
  let sort = 3;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    portfolioUtility.pagination(".blog-list-item", sort, active);
    let list = document.querySelectorAll(".blog-list-item");
    setstate(portfolioUtility.getPagination(list.length, sort));
  }, [active]);
  const { blogs, changeNav, dark } = useContext(PortfolioContext);

  const [blogDetailsData, setBlogDetailsData] = useState(null);

  return (
    <Fragment>
      <SectionContainer id={"blog"}>
        <div className="w-full">
          {/* Section Title Starts */}
          <SectionTitle
            bigTitle={"posts"}
            colorTitle={"blog"}
            normalTitle={"my"}
          />
          {/* Section Title Ends */}
          <div className="xl:max-w-1140 lg:max-w-960 md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto">
            <h1 className="mt-13 mb-20 font-semibold capitalize text-fs-40 xs:text-fs-26 leading-lh-1.2" style={{ textAlign: 'center' }}>
              Coming soon :)
            </h1>
          </div>
        </div>
      </SectionContainer>
      {blogDetailsData && <BlogDetails blog={blogDetailsData} />}
    </Fragment>
  );
};
export default Blog;
