import React, { useEffect } from 'react'
import "../CSS/main.css"
import "aos/dist/aos.css";
import AOS from "aos";
import { team1,team2,team3,team4 } from '..';

const Team = () => {
  useEffect(()=>{
    AOS.init({
          duration: 1000,
        });
  },[])
  return (
    <section id="team" className="team section section-bg dark-background">

     
      <div className="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">

        <div className="row gy-4">
        {
          [
            {
              img:team1,
              name:"Walter White",
              Position:"Chief Executive Officer"
            },{
               img:team2,
              name:"Sarah Jhonson",
              Position:"Product Manager"
            }
            ,{
               img:team3,
              name:"William Anderson",
              Position:"CTO"
            }
            ,{
               img:team4,
              name:"Amanda Jepson",
              Position:"Accountant"
            }
          ].map((val,index)=>(
            <>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100" key={index}>
            <div className="team-member">
              <div className="member-img">
                <img src={val.img} className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>{val.name}</h4>
                <span>{val.Position}</span>
              </div>
            </div>
          </div>
            </>
          ))
        }
          </div>
          </div>
          </section>
  )
}

export default Team
