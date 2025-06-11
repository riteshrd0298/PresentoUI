import React, { useEffect } from "react";
import "../CSS/main.css";
import "aos/dist/aos.css";
import AOS from "aos";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const Portfolio = [
    {
      id: 1,
      img: "src/assets/img/portfolio/app-1.jpg",
      category: "App",
    },
    {
      id: 2,
      img: "src/assets/img/portfolio/product-1.jpg",
      category: "Product",
    },
    {
      id: 3,
      img: "src/assets/img/portfolio/branding-1.jpg",
      category: "Branding",
    },
    {
      id: 4,
      img: "src/assets/img/portfolio/books-1.jpg",
      category: "Books",
    },
    {
      id: 5,
      img: "src/assets/img/portfolio/app-2.jpg",
      category: "App",
    },
    {
      id: 6,
      img: "src/assets/img/portfolio/product-2.jpg",
      category: "Product",
    },
    {
      id: 7,
      img: "src/assets/img/portfolio/branding-2.jpg",
      category: "Branding",
    },
    {
      id: 8,
      img: "src/assets/img/portfolio/books-2.jpg",
      category: "Books",
    },
     {
      id: 9,
      img: "src/assets/img/portfolio/app-3.jpg",
      category: "App",
    },
    {
      id: 10,
      img: "src/assets/img/portfolio/product-3.jpg",
      category: "Product",
    },
    {
      id: 11,
      img: "src/assets/img/portfolio/branding-3.jpg",
      category: "Branding",
    },
    {
      id: 12,
      img: "src/assets/img/portfolio/books-3.jpg",
      category: "Books",
    }
  ];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  // Get unique categories from Portfolio data
  const categories = ["All", ...Array.from(new Set(Portfolio.map(item => item.category)))];

  // Filter portfolio items based on selected category
  const filteredPortfolio = selectedCategory === "All"
    ? Portfolio
    : Portfolio.filter(item => item.category === selectedCategory);

  return (
    <>
      <section id="portfolio" className="portfolio section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="container">
          <div className="isotope-layout">
            <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className={selectedCategory === cat ? "filter-active" : ""}
                  onClick={() => setSelectedCategory(cat)}
                  style={{ cursor: "pointer" }}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {filteredPortfolio.map((val, index) => (
              <div
                className="col-lg-4 col-md-6 portfolio-item isotope-item"
                key={val.id}
              >
                <div className="portfolio-content h-100">
                  <img src={val.img} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>{val.category}</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a
                      href={val.img}
                      title={val.category}
                      data-gallery={`portfolio-gallery-${val.category.toLowerCase()}`}
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
