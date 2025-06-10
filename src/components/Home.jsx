import React, { use } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../CSS/main.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import About from "./About";
import Servcies from "./Servcies";

function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <About/>
      <Servcies/>
    </>
  );
}

export default Home;

export const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <section id="hero" className="hero section ">
        <img src="src/assets/mainimg.jpg" alt="Hero section" />

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 data-aos="fade-up" data-aos-delay="100">
                Bettter digital experience with Presento
              </h2>
              <p data-aos="fade-up" data-aos-delay="200">
                We are team of talented designers making websites with Bootstrap
              </p>

              <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
                <a href="#about" className="btn-get-started" style={{ textDecoration: "none" }}>
                  {" "}
                  Get Started
                </a>
                <a
                  href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                  className="glightbox btn-watch-video d-flex align-items-center"
                  style={{ textDecoration: "none" }}
                >
                  <i className="bi bi-play-circle "></i>
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Clients = () => {
  return (
    <>
      <section id="clients" className="clients section " style={{marginTop: "60px"}}>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper init-swiper">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          slidesPerView="auto"
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
            992: {
              slidesPerView: 6,
              spaceBetween: 120,
            },
          }}
          className="mySwiper"
        >
          
          {[
            "src/assets/compnylogo1.png",
            "src/assets/compnylogo2.png",
            "src/assets/compnylogo3.png",
            "src/assets/compnylogo4.png",
            "src/assets/compnylogo5.png",
            "src/assets/compnylogo6.png",
            "src/assets/compnylogo7.png",
            "src/assets/compnylogo8.png",
          ].map((img, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <img src={img} className="img-fluid" alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div class="swiper-pagination"></div>
        </div>
        </div>
      </section>
    </>
  );
};
