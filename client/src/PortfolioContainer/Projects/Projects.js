import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";

export default function Projects(props) {
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };
  
    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
    const options = {
      loop: true,
      margin: 0,
      nav: true,
      animateIn: "bounceInRight",
      animateOut: "bounceOutRight",
      dots: true,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1000: {
          items: 3,
        },
      },
    };
  
    return (
      <div>
        <ScreenHeading
          title={"A Bit of My Project"}
          subHeading={"E&P - IT Related"}
        />
        <section className="project-section fade-in" id={props.id || ""}>
          <div className="container">
            <div className="row">
              <OwlCarousel
                className="owl-carousel"
                id="project-carousel"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="project-item">
                    <div className="project-desc">
                      <p>
                        <i className="fa fa-quote-left" />
                        Transforming daily production report from differ raw document to
                        both database and Json format with Python and Talend Open Studio Tools
                        <i className="fa fa-quote-right" />
                      </p>
                    </div>
                    <div className="project-info">
                      <h5>ETL Integration Workflow</h5>
                      <p>IT Related</p>
                    </div>
                  </div>
                </div>
  
                <div className="col-lg-12">
                  <div className="project-item">
                    <div className="project-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        Develop a simple REST-API service to deliver data to partner in real-time
                        with MongoDB and NodeJs as backend.
                        <i className="fa fa-quote-right" />
                      </p>
                    </div>
                    <div className="project-info">
                      <h5>Gas Production API Service</h5>
                      <p>IT Related</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="project-item">
                    <div className="project-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        Develop stream data pipeline as enhancement of ETL process for production
                        and facility data with Kafka and Docker
                        <i className="fa fa-quote-right" />
                      </p>
                    </div>
                    <div className="project-info">
                      <h5>Implementation Kafka and Docker for Real-Time Monitoring</h5>
                      <p>IT Related</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="project-item">
                    <div className="project-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        Build end-to-end solution for GIS Web Application from raw data to
                        visualization with ArcGIS Server and Python
                        <i className="fa fa-quote-right" />
                      </p>
                    </div>
                    <div className="project-info">
                      <h5>GIS Web Apps and Visualization: Production Monitoring</h5>
                      <p>IT-GIS Related</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="project-item">
                    <div className="project-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        Administer several E&P technical application from Geoscience, Drilling
                        to Production.
                        <i className="fa fa-quote-right" />
                      </p>
                    </div>
                    <div className="project-info">
                      <h5>Application Technical Support</h5>
                      <p>E&P Related</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="project-item">
                    <div className="project-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        Multi-attribute and pore pressure analysis for several field area in Indonesia
                        <i className="fa fa-quote-right" />
                      </p>
                    </div>
                    <div className="project-info">
                      <h5>Reservoir Analysis Project</h5>
                      <p>E&P Related</p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>

      </div>
    );
  }