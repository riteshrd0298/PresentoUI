import React from "react";
import { blog1,blog2,blog4,blog3,recent1,recent2,recent3,recent4,recent5 } from "..";

const Blog = () => {
  return (
    <>
      <div className="page-title dark-background">
        <div className="container">
          <h2>Blog</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* <!-- Blog Posts Section --> */}
            {[
              {
                img: blog1,
                title: "Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia",
                description:
                  "Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et  quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore. ",
              },
              {
                img: blog2,
                title: "Nisi magni odit consequatur autem nulla dolorem",
                description:
                  " Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.",
              },
              {
                img: blog3,
                title: "Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.",
                description:
                  "Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.Doloremque est saepe laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit.",
              },
              {
                img: blog4,
                title: "Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem.",
                description:
                  "Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui. Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo.",
              },
            ].map((val,index) => {
                return (
                <>
                  <section id={`blog-posts-${index}`} className="blog-posts section" style={{ marginTop: "-50px" }} key={index}>
                  <div className="container" >
                    <div className="row gy-4" >
                    <div className="col-12">
                      <article >
                      <div className="post-img">
                        <img src={val.img} alt="" className="img-fluid" />
                      </div>

                      <h2 className="title">{val.title}</h2>

                      <div className="meta-top">
                        <ul>
                        <li className="d-flex align-items-center">
                          <i className="bi bi-person"></i> John Doe
                        </li>
                        <li className="d-flex align-items-center">
                          <i className="bi bi-clock"></i> <time dateTime="2022-01-01">Jan 1, 2022</time>
                        </li>
                        <li className="d-flex align-items-center">
                          <i className="bi bi-chat-dots"></i> 12 Comments
                        </li>
                        </ul>
                      </div>

                      <div className="content">
                        <p>{val.description}</p>
                      </div>
                      </article>
                    </div>
                    </div>
                  </div>
                  </section>
                </>
                );
            })}

            <section id="blog-pagination" className="blog-pagination section">
              <div className="container">
                <div className="d-flex justify-content-center">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="bi bi-chevron-left"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#" className="active">
                        2
                      </a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>...</li>
                    <li>
                      <a href="#">10</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="col-lg-4 sidebar" style={{ marginTop: "-50px" }}>
            <div className="widgets-container">
              {/* <!-- Search Widget --> */}
              <div className="search-widget widget-item">
                <h3 className="widget-title">Search</h3>
                <form action="">
                  <input type="text" />
                  <button type="submit" title="Search">
                    <i className="bi bi-search"></i>
                  </button>
                </form>
              </div>

              {/* <!-- Categories Widget --> */}
              <div className="categories-widget widget-item">
                <h3 className="widget-title">Categories</h3>
                <ul className="mt-3">
                  <li>
                    <a href="#">
                      General <span>(25)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Lifestyle <span>(12)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Travel <span>(5)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Design <span>(22)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Creative <span>(8)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Educaion <span>(14)</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Recent Posts Widget --> */}
              <div className="recent-posts-widget widget-item">
                <h3 className="widget-title">Recent Posts</h3>
                {[
                  {
                    img: recent1,
                    Name: "Nihil blanditiis at in nihil autem",
                  },
                  {
                    img: recent2,
                    Name: "Quidem autem et impedit",
                  },
                  {
                    img: recent3,
                    Name: "Id quia et et ut maxime similique occaecati ut",
                  },
                  {
                    img: recent4,
                    Name: "Laborum corporis quo dara net para",
                  },
                  {
                    img: recent5,
                    Name: "Et dolores corrupti quae illo quod dolor",
                  },
                ].map((val, index) => (
                  <>
                    <div className="post-item" key={index}>
                      <img src={val.img} alt="" className="flex-shrink-0" />
                      <div>
                        <h4>
                          <a href="#">{val.Name}</a>
                        </h4>
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </div>
                    </div>
                  </>
                ))}
              </div>

              {/* <!-- Tags Widget --> */}
              <div className="tags-widget widget-item">
                <h3 className="widget-title">Tags</h3>
                <ul>
                  {["App", "IT", "Business", "Mac", "Design", "Office", "Creative", "Studio", "Smart", "Tips", "Marketing"].map((val) => (
                    <li key={val}>
                      <a href="#">{val}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
