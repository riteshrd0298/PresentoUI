import React, { useEffect } from "react";
import "../CSS/main.css";
import "aos/dist/aos.css";
import AOS from "aos";

const Servcies = () => {
  useEffect(()=>{
     AOS.init({
          duration: 1000,
        });
  },[])
  return (
    <>
      <section id="services" className="services section section-bg dark-background">
        <div className="container section-title" data-aos="fade-up">
          <h2 className="text-light">Services</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className="container">
          <div className="row">
            {[
              {
                id: 1,
                icon: "bi bi-briefcase",
                head: "Lorem Ipsum",
                desc: " Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
              },
              {
                id: 2,
                icon: "bi bi-card-checklist",
                head: "Dolor Sitema",
                desc: " Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata"
              }, {
                id: 3,
                icon: "bi bi-bar-chart",
                head: "Sed ut perspiciatis",
                desc: " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
              }, {
                id: 4,
                icon: "bi bi-binoculars",
                head: "Magni Dolores",
                desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum "
              }, {
                id: 5,
                icon: "bi bi-brightness-high",
                head: "Nemo Enim",
                desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque "
              }, {
                id: 6,
                icon: "bi bi-calendar4-week",
                head: "Eiusmod Tempor",
                desc: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligend"
              }
            ].map((val, index) => (

              <div className="col-md-6 mt-4" data-aos="fade-up" data-aos-delay="100" key={val.id}>
                <div className="service-item d-flex position-relative h-100">
                  <i className={`${val.icon} icon flex-shrink-0`}></i>
                  <div>
                    <h4 className="title">
                      <a href="service-details.html" className="stretched-link">
                        {val.head}
                      </a>
                    </h4>
                    <p className="description">
                      {val.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Servcies;
