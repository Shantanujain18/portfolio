import React from "react";
import Carousel from "react-multi-carousel";
import { css } from "@emotion/css";
// import funny-3d-asian-teenager from "./../public/"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Internships(props: { deviceType: string | undefined }) {
  const arr = [1, 2, 3, 4];
  const data = [
    {
      company:"Rhythmflows Solutions Pvt Ltd.",
      description: "Software development Intern where we designed and developed Projects in a CI/CD environment using Docker,  AWS, SonarQube,  Jira , Gitlab, and Slack. Developed OTT Platforms, Reconncilliation Platforms, Insurance Platform and ERP System.",
      duration: "2 December 2021 to Present",
      hastags:["Internships", "Development", "Full Stack Development"]
    },
    {
      company:"GeeksForGeeks.",
      description: "Technical Writing Intern where I authored and Collaborated technical articles on different languages such as Java, PHP, Python, JavaScript, Linux, Shell Script to help student community. ",
      duration: "06 July 2021 to 06 January 2022",
      hastags:["Technical Writing", "Documentations", "Article writing"]
    },
    {
      company:"FreeLancer.",
      description: "Freelancer where I developed and deployed DGCA Question Papers app using Android for aviator students to view and download their question papers and MCQ's for exam preparations nd deployed on Playstore with 5000+ downloads",
      duration: "09 September 2020 to 12 October 2022",
      hastags:["App development", "Deployment", "Android"]
    },
    {
      company:"IndiaFirst Robotics.",
      description: "Junior Technical Support Intern where I learned about company stands and worked under R&D engineers to build some amazing IoT based projects such as InMoov Robot, Lighting System and Line detection robot using Python and Embedded C language ",
      duration: "01 May 2019 to 01 August 2019",
      hastags:["R&D", "Research", "Intern", "Trainee"]
    }

  ]
  return (
    <div id="Internships" className={css`
    padding:20px 0 20px 0;
    `}>
      <section className="text-gray-600 body-font ">
        <Carousel
          swipeable={false}
          draggable={false}
          // showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={props.deviceType !== "mobile" ? true : false}
          // autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          centerMode={true}
        >
          {data.map((item) => {
            return (
              <div >
                <div className={"max-w-lg rounded overflow-hidden shadow-lg "+css`background-color:hotpink`}>
                 
                  <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                      {item.company}
                    </div>
                    <p className="text-gray-700 text-base">
                      {item.description}
                    </p>
                    <p className="text-gray-700 text-base">
                     Duration:  {item.duration}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    {
                      item.hastags.map((tag)=>{
                        return(
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          #{tag}
                          </span>
                      )})
                    }
                   
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </section>
    </div>
  );
}
