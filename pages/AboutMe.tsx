import React from "react";
import { Link } from "react-scroll";
// import funny-3d-asian-teenager from "./../public/"

export default function AboutMe() {
  return (
    <div id="About Me">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-4/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/image3d.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-6xl text-7xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <div className="mb-8 leading-relaxed text-xl text-gray-400">
              I am currently <b>Final Year Computer Engineering Student</b> at
              Pune Institute Of Computer Engineering (PICT), Pune. I have
              interest in &nbsp;
              <b>
                Full Stack Application Development ,Cloud Computing and Machine
                Learning.
              </b>
            </div>


            <table>
              <tbody>
                <tr>
                  <td className="font-bold text-2xl pr-20">Name :</td>
                  <td className="mb-8 leading-relaxed text-2xl">Shantanu Ashok Jain</td>
                </tr>
                
                
                <tr>
                  <td className="font-bold text-2xl pr-20">Email Id :</td>
                  <td className="mb-8 leading-relaxed text-2xl">shantanujain18@gmail.com</td>
                </tr>
                <tr>
                  <td className="font-bold text-2xl pr-20">Mobile Number :</td>
                  <td className="mb-8 leading-relaxed text-2xl">+91 9834487344</td>
                </tr>
               
                <tr>
                  <td className="font-bold text-2xl pr-20">BirthDate :</td>
                  <td className="mb-8 leading-relaxed text-2xl">18 November 2001</td>
                </tr>
                <tr>
                  <td className="font-bold text-2xl pr-20">Birth Place :</td>
                  <td className="mb-8 leading-relaxed text-2xl">Pune</td>
                </tr>
                <tr>
                  <td className="font-bold text-2xl pr-20">Languages :</td>
                  <td className="mb-8 leading-relaxed text-2xl">English, Hindi, Marathi, Spanish</td>
                </tr>
                <tr>
                  <td className="font-bold text-2xl pr-20">Address :</td>
                  <td className="mb-8 leading-relaxed text-2xl">Shivne, Pune, Maharashtra, India</td>

                </tr>
                <tr>
                  <td className="font-bold text-2xl pr-20">Pincode :</td>
                  <td className="mb-8 leading-relaxed text-2xl">411023</td>
                </tr>
              </tbody>
             
            </table>

            
            <div className="flex justify-center my-10">
              <a href="https://firebasestorage.googleapis.com/v0/b/dgca-question-paper.appspot.com/o/Shantanu's%20Resume.pdf?alt=media&token=a2e28d17-3c21-4ddb-bda0-6736abde4047" target="_blank" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg rounded-full">
                Download Resume
              </a>
              <Link className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg rounded-full" to="contact" spy={true} smooth={true}>
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
