"use client";
import { PortfolioContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const bio = [
  {
    id: 11,
    data: [
      { id: 1, type: "First Name", value: "Brijal" },
      { id: 2, type: "Last Name", value: "Patel" },
      { id: 4, type: "Nationality", value: "Indian (Based in US)" },
      { id: 5, type: "Freelance", value: "Available" },
    ],
  },
  {
    id: 12,
    data: [
      { id: 6, type: "Address", value: "1445 Bank Place, Indianapolis IN, USA" },
      { id: 7, type: "Phone", value: "+1 (765) 696-9767" },
      { id: 8, type: "Email", value: "brijalpatel291@gmail.com" },
      { id: 10, type: "Langages", value: "English" },
    ],
  },
];

const counters = [
  {
    id: 1,
    title: 'years of <span className="block">experience</span>',
    value: "5",
  },
  {
    id: 2,
    title: 'completed <span className="block">projects</span>',
    value: "47",
  },
  {
    id: 3,
    title: 'Organizations <span className="block">collaborated with</span>',
    value: "3",
  },
];

const experiences = [
  {
    id: 1,
    date: "2022 - 2024",
    title: "Senior Front End Developer",
    company: "Health Care, USA",
    desc: <ul style={{ 'list-style-type': 'square' }}><li>Working with New advance Search experience for patients to find health care locations and providers near them.</li>
      <li>Playing a vital role for developing web experience using <b>React Js</b> (Hooks concept), <b>Redux</b> (For maintaining the state and devtools for monitoring custom UI component), Typescript, Apollo client and integrating GraphQL apis.</li>
      <li>Built and currently maintaining custom Map functionality for showing locations and providers data on map using Google map apis.</li>
      <li>Collaborating with UX/UI team for designing and maintaining webview and created responsive experience using CSS3, SCSS, Bootstrap and mainly used MUI react component.</li>
      <li>Getting involved in higher level architecture design discussion / product refinement and given suggestions on design, code structure approach.</li>
      <li>Written Comprehensive JS unit test cases using Jest, enzyme and expect test runner. Using Jira for tracking user stories and streamlining agile planning.</li>
      <li>Using GIT for version control and best practice for handling pre-commit hooks.</li></ul>
    ,
  },
  {
    id: 2,
    date: "2020 - 2022",
    title: "Full Stack Developer",
    company: "Sensovium Technologies, India (Based in California)",
    desc: <ul style={{ 'list-style-type': 'square' }}><li>Responsible for all backend requirements of product 'OtoZen' <a style={{ color: '#9ecaff' }} href="https://www.otozen.com/">(www.otozen.com)</a></li><li>Developed HTTP REST APIs using NodeJs (Express) framework for OtoZen mobile app.</li><li>Worked on Socket.io and Redis Json for maintaining real time data.</li><li>Managed AWS services for security purposes - API gateway, IAM, S3, Lambda (serverless) etc.</li> <li>Extensive knowledge for developing Custom Alexa skill using Lambda (Developed 'OtoZen' Alexa skill - Live in US region).</li>
      <li>Worked on load balancing the data using containerization in docker and Kubernetes Worked with Postman REST client and JMeter for testing web services.</li>
      <li>Written Queries, Sub Queries in MySQL using Knex query builder for managing data in application Interacted closely with mobile app team, AWS team, QA team and product manager.
      </li></ul>,
  },
  {
    id: 3,
    date: "2017 - 2020",
    title: "Full Stack Developer",
    company: "iRoid Solutions, India",
    desc: <ul style={{ 'list-style-type': 'square' }}><li>Played a key role in the development of REST API for android / ios applications.</li><li>Gained hands-on expertise in front-end and back-end skills like HTML,CSS3, Jquery, Bootstrap, PHP (Laravel
      Framework), ReactJs, NodeJs (Express framework), Socket.io in number of Web applications and projects.</li>
      <li>Involved in developing Chatbot using Dialogflow and Google Cloud Platform.</li>
      <li>Worked closely with mobile app development team including project and product manager, developers, and QA to determine problems.
      </li></ul>,
  },
];

const educations = [
  {
    id: 3,
    date: "2017",
    title: "Bachelor Degree",
    unv: "Gujarat Technological University, India",
    desc: "My educational background includes a bachelor's degree in Information & Technology.",
  },
];

const skills = [
  { id: 1, name: "reactjs + redux", value: "90" },
  { id: 2, name: "javascript", value: "89" },
  { id: 3, name: "typescript", value: "85" },
  { id: 4, name: "nodejs", value: "75" },
  { id: 5, name: "php", value: "70" },
  { id: 6, name: "html", value: "90" },
  { id: 7, name: "css", value: "90" },
  { id: 8, name: "bootstrap", value: "85" },
  { id: 9, name: "jquery & Ajax", value: "85" },
  { id: 10, name: "Mysql", value: "90" },
  { id: 11, name: "AWS", value: "60" },
  { id: 12, name: "Socket.io", value: "85" },
];

const About = () => {
  const { dark } = useContext(PortfolioContext);
  return (
    <SectionContainer id="about">
      <div className="w-full">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"resume"}
          colorTitle={"me"}
          normalTitle={"about"}
        />
        {/* Section Title Ends */}
        <div className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] lg:max-w-960 md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto">
          <div className="flex flex-row down-lg:flex-col">
            {/* Personal Informations Starts */}
            <div className="xl:basis-1/2 lg:basis-5/12 down-lg:basis-full">
              <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-22 text-white font-semibold">
                personal infos
              </h3>
              <img
                className="hidden xs:block rounded-full border-4 border-solid border-black-3 w-230 h-230 mb-25 mx-auto"
                src="assets/img/dark-img-mobile.jpg"
                alt=""
              />
              <div className="flex justify-between xs:justify-start font-Open-sans">
                {bio.map((item) => (
                  <div
                    className="basis-1/2 [&>div]:pb-20 [&>div:last-child]:pb-0 text-fs-15 xs:text-fs-14"
                    key={item.id}
                  >
                    {item.data.map((bio) => (
                      <div key={bio.id}>
                        <span className="opacity-80">{bio.type} : </span>
                        <span className="xs:block custom-md-2:block font-semibold">
                          {bio.value}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {/* Personal Informations Ends */}
            {/* Facts Starts */}
            <div className="xl:basis-1/2 lg:basis-7/12 down-lg:basis-full down-lg:mt-50">
              <div className="flex down-lg:-mx-15 flex-wrap">
                {counters.map((counter) => (
                  <div className="w-1/2 px-15" key={counter.id}>
                    <div
                      className={`pt-20 xs:pt-15 pr-30 xs:pr-20 pb-25 xs:pb-20 pl-40 xs:pl-25 border border-${dark ? "black-3" : "grey"
                        } rounded-5 mb-30 xs:mb-25`}
                    >
                      <h3 className="relative inline-block font-bold text-fs-50 xs:text-fs-40 text-accent leading-lh-1.2 after:content-['+'] after:absolute after:-right-24 after:text-fs-33 after:font-light after:top-2">
                        {counter.value}
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: counter.title,
                        }}
                        className="relative xs:text-fs-14 uppercase pl-45 xs:pl-0 xs:before:hidden font-Open-sans font-medium before:absolute before:left-0 before:top-13 before:w-30 before:h-1 before:bg-black-5"
                      ></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Facts Ends */}
          </div>
          <hr
            className={`border-t border-solid border-t-${dark ? "black-3" : "grey"
              } mx-auto max-w-40prcent mt-70 mb-55`}
          />
          <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-48 text-white font-semibold text-center">
            my skills
          </h3>
          {/* Skills Starts */}
          <div className="flex w-full flex-wrap">
            {skills.map((skill) => (
              <div
                className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16"
                key={skill.id}
              >
                <div
                  className={`c100 p${skill.value} float-none mx-auto ${dark ? "bg-black-3" : "bg-light-grey after:!bg-white"
                    }`}
                >
                  <span className={dark ? "" : "!text-black-6"}>
                    {skill.value}%
                  </span>
                  <div className="slice">
                    <div className="bar" />
                    <div className="fill" />
                  </div>
                </div>
                <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                  {skill.name}
                </h6>
              </div>
            ))}
          </div>
          {/* Skills Ends */}
          <hr
            className={`border-t border-solid border-t-${dark ? "black-3" : "grey"
              } mx-auto max-w-40prcent mt-35 mb-55`}
          />
          <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-48 text-white font-semibold text-center">
            experience &amp; education
          </h3>
          {/* Resume Starts */}
          <div className="flex down-sm:flex-col from-sm:mb-40">
            {/* Experience Starts */}
            <div className="w-1/2 down-sm:w-full">
              <ul>
                {experiences.map((experience) => (
                  <li
                    key={experience.id}
                    className={`relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-${dark ? "black-4" : "grey"
                      } after:w-1 after:h-full`}
                  >
                    <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                      <i className="fa fa-briefcase"></i>
                    </div>
                    <span
                      className={`text-${dark ? "white" : "black-6"
                        } text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-${dark ? "black-3" : "light-grey"
                        } opacity-80 font-Open-sans uppercase`}
                    >
                      {experience.date}
                    </span>
                    <h5 className="uppercase text-fs-18 mt-7 mb-10">
                      {experience.title}
                      <span
                        className={`opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-${dark ? "white" : "black-6"
                          } before:left-7 before:top-9 before:opacity-80`}
                      >
                        {experience.company}
                      </span>
                    </h5>
                    <div
                      className={`font-Open-sans ${dark ? "text-light-grey" : ""
                        } text-fs-14`}
                    >
                      {experience.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="w-1/2 down-sm:w-full">
              <ul>
                {educations.map((education) => (
                  <li
                    key={education.id}
                    className={`relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-${dark ? "black-4" : "grey"
                      } after:w-1 after:h-full`}
                  >
                    <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                      <i className="fa fa-graduation-cap"></i>
                    </div>
                    <span
                      className={`text-${dark ? "white" : "black-6"
                        } text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-${dark ? "black-3" : "light-grey"
                        } opacity-80 font-Open-sans uppercase`}
                    >
                      {education.date}
                    </span>
                    <h5 className="uppercase text-fs-18 mt-7 mb-10">
                      {education.title}
                      <span
                        className={`opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-${dark ? "white" : "black-6"
                          } before:left-7 before:top-9 before:opacity-80`}
                      >
                        {education.unv}
                      </span>
                    </h5>
                    <p
                      className={`font-Open-sans ${dark ? "text-light-grey" : ""
                        } text-fs-14`}
                    >
                      {education.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Education Ends */}
          </div>
          {/* Resume Ends */}
        </div>
      </div>
    </SectionContainer>
  );
};
export default About;
