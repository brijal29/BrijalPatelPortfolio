"use client";
import { PortfolioContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import emailjs from "emailjs-com";
import { useContext, useState } from "react";
import SectionTitle from "./SectionTitle";

const socials = [
  { id: 1, icon: "fa fa-linkedin", link: "#" }
];

const Contact = () => {
  const { dark } = useContext(PortfolioContext);

  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    template: "portfolio tailwind react",
  });
  const { name, email, subject, message, template } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      subject.length === 0 ||
      message.length === 0
    ) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_gsps4gw", // service id
          "template_evezi69", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({
              name: "",
              email: "",
              message: "",
              phone: "",
              subject: "",
              template: "portfolio tailwind react",
            });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <SectionContainer id="contact">
      <div className="w-full">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"contact"}
          colorTitle={"touch"}
          normalTitle={"get in"}
        />
        {/* Section Title Ends */}
        <div className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] lg:max-w-960 md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto">
          <div className="flex down-lg:flex-col">
            {/* Contact Details Starts */}
            <div className="w-1/2 down-lg:w-full px-16 xs:px-0">
              <h3 className="text-fs-26 xs:text-fs-21 mb-16 font-semibold uppercase">
                don't be shy !
              </h3>
              <p className="mb-16 font-Open-sans text-fs-15 xs:text-fs-14">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
            </div>
            <div className="w-1/2 down-lg:w-full px-16 xs:px-0">
              <div className="relative font-Open-sans font-semibold pl-50 pt-5 leading-lh-21 text-fs-15 xs:text-fs-14 mb-16">
                <i className="fa fa-envelope-open absolute left-0 top-10 text-fs-33 text-accent" />
                <span className="block opacity-80 uppercase font-normal">
                  mail me
                </span>
                brijalpatel291@gmail.com
              </div>
              <div className="relative font-Open-sans font-semibold pl-50 pt-5 leading-lh-21 text-fs-15 xs:text-fs-14 mb-16">
                <i className="fa fa-phone-square absolute left-0 top-10 text-fs-39 text-accent" />
                <span className="block opacity-80 uppercase font-normal">
                  call me
                </span>
                +1 (765) 696-9767
              </div>
              <div className="relative font-Open-sans font-semibold pl-50 pt-5 leading-lh-21 text-fs-15 xs:text-fs-14 mb-16">
                <i className="fa fa-linkedin-square absolute left-0 top-10 text-fs-39 text-accent" />
                <span className="block opacity-80 uppercase font-normal">
                  LinkedIn
                </span>
                <a style={{ textDecoration: 'underline' }} target="_blank" href="https://www.linkedin.com/in/brijal-patel-52159b210/">Click here to connect with me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Contact;
