import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useQuery } from "react-query";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

const getData = async (id: string): Promise<string> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/${id}/`
  );
  return await response.json();
};

export default function MyPhotos(props: { deviceType: string | undefined }) {

  
  const d = "character"

  const { error, isLoading ,data  } = useQuery(
    `queryKey${d}`,
    async () => await getData(d)
  );

  if(error){
    console.log(error)
    return <h1>Error</h1>
  }

  if(isLoading){

    console.log("loading");
    
    return <h1>Loading</h1>
  }

  return (
    <div id="home" className="bg-gray-200 ">
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
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data["results"].map((dog:any) => (
          <img src={dog.image} alt="dog" key="1"  />
        ))}
        <div>1</div>
      </Carousel>
      
    </div>
  );
}
