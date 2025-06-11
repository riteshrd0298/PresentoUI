import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/main.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PureCounter from "@srexi/purecounterjs";

import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    new PureCounter();
  }, []);

  const data = [
    {
      id: 1,
      emoji: "bi bi-emoji-smile",
      count: "232",
      name: "Happy Clients",
    },
    {
      id: 2,
      emoji: "bi bi-journal-richtext",
      count: 521,
      name: "Projects",
    },
    {
      id: 3,
      emoji: "bi bi-headset",
      count: 1463,
      name: "Hours Of Support",
    },
    {
      id: 4,
      emoji: "bi bi-people",
      count: 15,
      name: "Hard Workers",
    },
  ];
  return (
    <>
      <section id="about" className="about section section-bg dark-background">
        <div className="container-fluid position-relative">
          <div className="row gy-5">
            <div className="content col-xl-5 d-flex flex-column" data-aos="fade-up" data-aos-delay="100">
              <h3>Voluptatem dignissimos provident quasi</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute
                irure dolor in reprehenderit
              </p>
              <a href="#" className="about-btn align-self-center align-self-xl-start">
                <span>About us</span> <i className="bi bi-chevron-right"></i>
              </a>
            </div>

            <div className="col-xl-7" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                {[
                  {
                    id: 1,
                    emoji: "bi bi-briefcase",
                    title: "Corporis voluptates sit",
                    desc: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
                  },
                  {
                    id: 2,
                    emoji: "bi bi-gem",
                    title: "Ullamco laboris nis",
                    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
                  },
                  {
                    id: 3,
                    emoji: "bi bi-broadcast",
                    title: "Labore consequatur",
                    desc: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
                  },
                  {
                    id: 4,
                    emoji: "bi bi-easel",
                    title: "Beatae veritatis",
                    desc: "Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta",
                  },
                ].map((val, index) => (
                  <div className="col-md-6 icon-box position-relative" key={index}>
                    <i className={val.emoji}></i>
                    <h4>
                      <a href="" className="stretched-link">
                        {val.title}
                      </a>
                    </h4>
                    <p>{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section stats */}
      <section id="stats" className="stats section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {data.map((val, index) => {
              return (
                <>
                  <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                    <i className={val.emoji}></i>
                    <div className="stats-item">
                      <span data-purecounter-start="0" data-purecounter-end={val.count} data-purecounter-duration="1" className="purecounter">
                        {val.count}
                      </span>
                      <p>{val.name}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      {/* /* tab section */}
      <section id="tabs" className="tabs section">
        <div className="container">
          <ul className="nav nav-tabs row d-flex" data-aos="fade-up" data-aos-delay="100">
            {[
              {
                icon: "bi bi-binoculars",
                label: "Modi sit est dela pireda nest",
              },
              {
                icon: "bi bi-box-seam",
                label: "Unde praesenti mara setra le",
              },
              {
                icon: "bi bi-brightness-high",
                label: "Pariatur explica nitro dela",
              },
              {
                icon: "bi bi-command",
                label: "Nostrum qui dile node",
              },
            ].map((tab, idx) => (
              <li className="nav-item col-3" key={idx}>
                <a
                  className={`nav-link ${activeTab === idx ? "active show" : ""}`}
                  data-bs-toggle="tab"
                  onClick={() => setActiveTab(idx)}
                  style={{ cursor: "pointer" }}
                >
                  <i className={tab.icon}></i>
                  <h4>{tab.label}</h4>
                </a>
              </li>
            ))}
          </ul>
          {/* End Tab Nav */}

          <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div className="tab-pane fade active show" id="tabs-tab-1">
              <div className="row">
                
                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                      <h3>Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda</h3>
                      <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        </li>
                        <li>
                          <i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                        </li>
                        <li>
                          <i className="bi bi-check2-all"></i>{" "}
                          <span>Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</span>
                        </li>
                      </ul>
                      <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                      <img src="public/img/working-3.jpg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
      </section>
    </>
  );
};

export default About;
