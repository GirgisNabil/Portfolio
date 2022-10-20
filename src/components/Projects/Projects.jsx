import React from "react";
import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";

import "swiper/css";

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const Projects = [
    {
      title: "HomeDreams",
      subtitle: "Interior Design Company/Multi Page  Next.js Application",
      img: "./imgs/HomeDreams.PNG",
      refff: "https://homedreams.vercel.app/",
    },
    {
      title: "Netflix Clone",
      subtitle: "Dynamic website with API's",
      img: "./imgs/netflix.png",
      refff: "https://netflix-girgis.vercel.app/",
    },

    {
      title: "Stevdy Solutions",
      subtitle: "Web/Single Page React Application",
      img: "./imgs/stdy.png",
      refff: "https://webwtest.vercel.app/",
    },

    {
      title: "3D Faculty App",
      subtitle: "WebGL/Single Page Application",
      img: "./imgs/3D.png",
      refff: "https://girgisnabil.github.io/3D-website/",
    },
    {
      title: "Elzero Template",
      subtitle: "Web/Single Page Website",
      img: "./imgs/Elzero.png",
      refff: "https://girgisnabil.github.io/Elzero-Template/",
    },

    {
      title: "Kasper Template",
      subtitle: "Web/Single Page Website",
      img: "./imgs/Kasper.PNG",
      refff: "https://girgisnabil.github.io/Kasper-Template/",
    },
    {
      title: "Leon Template",
      subtitle: "Web/Single Page Website",
      img: "./imgs/Leon.PNG",
      refff: "https://girgisnabil.github.io/Leon-Template/",
    },

    {
      title: "LostPiratesClub",
      subtitle: "Web/Single Page website/Not responsive",
      img: "./imgs/pariate.PNG",
      refff: "https://girgisnabil.github.io/simple-store-page/",
    },
  ];
  return (
    <div className="Projects " id="projects">
      <div className="container zigzag">
        {/*data-aos="fade-right"*/}
        <div>
          <h1>Latest Projcets</h1>

          <div className="projects-container">
            <div className="arrow arrowleft"></div>
            <Swiper
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
                1350: {
                  slidesPerView: 3,
                },
              }}
              pagination={{
                type: "progressbar",
              }}
              navigation={true}
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={2}
            >
              {Projects.map((e, index) => {
                return (
                  <SwiperSlide>
                    <ProjectCard
                      title={e.title}
                      subtitle={e.subtitle}
                      img={e.img}
                      refff={e.refff}
                      key={index}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="arrow arrowright "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
