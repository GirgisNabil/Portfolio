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
      title: "Smouha Club website",
      subtitle: "sports club smouha /Multi Page Application",
      img: "./imgs/smouha.jpg",
      refff: "https://www.smouhaclub.com/en/",
    },
    {
      title: "Noonen",
      subtitle: "E-commerce website/Multi Page  Application",
      img: "./imgs/noonen.jpg",
      refff: "https://nooneen.com/en/shop",
    },
    {
      title: "Riders",
      subtitle: "e-scooters app/Landing Page Application",
      img: "./imgs/riders.jpg",
      refff: "https://riders.sa/en/",
    },
    {
      title: "Rahal",
      subtitle: "Tourism mobile app/Landing Page Application",
      img: "./imgs/rahal.jpg",
      refff: "https://rahal.app/en",
    },
    {
      title: "Esli",
      subtitle: "water treatment Company/Multi Page Application",
      img: "./imgs/esli.jpg",
      refff: "https://esliegypt.com/en/",
    },
    {
      title: "Amek",
      subtitle: "Geo textiles Company/Landing Page Application",
      img: "./imgs/amek.jpg",
      refff: "https://amekgeo.com/",
    },
    {
      title: "ISRAA",
      subtitle: "Engineered Supplies Company/Landing Page Application",
      img: "./imgs/israa.jpg",
      refff: "https://israagroup.com/en ",
    },

    {
      title: "ISRAA Mining",
      subtitle: "Mining Company/Landing Page Application",
      img: "./imgs/mining.jpg",
      refff: "https://mining.israagroup.com/en/",
    },
    {
      title: "AFIGR",
      subtitle: "International group/Landing Page Application",
      img: "./imgs/afig.jpg",
      refff: "https://afigr.com/en/",
    },
    {
      title: "Nour Stores locations",
      subtitle: "e-commerce store/Map Application",
      img: "./imgs/nour.jpg",
      refff: "https://nour-store-b77fe.web.app/",
    },
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
          </div>
        </div>
      </div>
    </div>
  );
}
