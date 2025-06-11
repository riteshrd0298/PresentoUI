import React, { use } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../CSS/main.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import About from "./About";
import Servcies from "./Servcies";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Contact from "./Contact";
import { hero } from "..";


function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <About />
      <Servcies />
      <Portfolio />
      <Testimonials />
      <Team/>
      <Contact/>
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
        <img src={hero} alt="Hero section" />

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
      <section id="clients" className="clients section " style={{ marginTop: "60px" }}>
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
                "public/compnylogo1.png",
                "public/compnylogo2.png",
                "public/compnylogo3.png",
                "public/compnylogo4.png",
                "public/compnylogo5.png",
                "public/compnylogo6.png",
                "public/compnylogo7.png",
                "public/compnylogo8.png",
              ].map((img, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <img src={img} className="img-fluid" alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Testimonials = () => {
  return (
    <>
      <section id="testimonials" className="testimonials section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
        
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper init-swiper">
            <Swiper
              modules={[Autoplay, Pagination]}
              loop={true}
              speed={600}
              autoplay={{ delay: 5000 }}
              slidesPerView="auto"
              pagination={{
                clickable: true,
                type: "bullets",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              className="mySwiper"
            >
              {[
                {
                  img: "public/img/testimonials/testimonials-1.jpg",
                  name: "Saul Goodman",
                  title: "Ceo & Founder",

                  text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
                },
                {
                  img: "public/img/testimonials/testimonials-2.jpg",
                  name: "Sara Wilsson",
                  title: "Designer",

                  text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
                },
                {
                  img: "public/img/testimonials/testimonials-3.jpg",
                  name: "Jena Karlis",
                  title: "Store Owner",

                  text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
                },
                {
                  img: "public/img/testimonials/testimonials-4.jpg",
                  name: "Matt Brandon",
                  title: "Freelancer",

                  text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
                },
                {
                  img: "public/img/testimonials/testimonials-5.jpg",
                  name: "John Larson",
                  title: "Entrepreneur",

                  text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
                },

                // Add more testimonials here as needed
              ].map((testimonial, idx) => (
                <SwiperSlide key={idx} className="swiper-slide">
                  <div className="testimonial-item">
                    <img src={testimonial.img} className="testimonial-img" alt="" />
                    <h3>{testimonial.name}</h3>
                    <h4>{testimonial.title}</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>{testimonial.text}</span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
};
