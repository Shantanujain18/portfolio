import React from "react";
import Typewriter from "typewriter-effect";
import { useTypewriter } from 'react-simple-typewriter'
export default function HomePage() {
  const [text] = useTypewriter({
    words: ['Student', 'Developer', 'Engineer'],
    loop: 0
  })
  return (
    <div id="home">
      <div className="gradient-background  grid place-items-center h-screen">
        
        <h1 className="font-sans text-5xl">
        <span className="text-2xl grid place-items-center">Hey! I am</span>
        <div className="text-8xl grid place-items-center font-bold">Shantanu Jain</div>
          
          <div className="grid place-items-center">
          <span className="text-red-300"><span className="text-black"> I am</span> {text}</span>
          </div>
          

        </h1>
       
        
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#93c5fd" fill-opacity="1" d="M0,320L15,314.7C30,309,60,299,90,245.3C120,192,150,96,180,53.3C210,11,240,21,270,37.3C300,53,330,75,360,80C390,85,420,75,450,112C480,149,510,235,540,266.7C570,299,600,277,630,261.3C660,245,690,235,720,208C750,181,780,139,810,112C840,85,870,75,900,112C930,149,960,235,990,261.3C1020,288,1050,256,1080,208C1110,160,1140,96,1170,96C1200,96,1230,160,1260,165.3C1290,171,1320,117,1350,101.3C1380,85,1410,107,1425,117.3L1440,128L1440,0L1425,0C1410,0,1380,0,1350,0C1320,0,1290,0,1260,0C1230,0,1200,0,1170,0C1140,0,1110,0,1080,0C1050,0,1020,0,990,0C960,0,930,0,900,0C870,0,840,0,810,0C780,0,750,0,720,0C690,0,660,0,630,0C600,0,570,0,540,0C510,0,480,0,450,0C420,0,390,0,360,0C330,0,300,0,270,0C240,0,210,0,180,0C150,0,120,0,90,0C60,0,30,0,15,0L0,0Z"></path></svg> */}
    </div>
  );
}
