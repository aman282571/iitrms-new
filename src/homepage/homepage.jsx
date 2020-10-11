import React, { Component } from "react";
import "./homepage.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
// import CarBackground from "../assets/car.png";
import Stripped from "../assets/stripped_back.png";
import Stripped2 from "../assets/stripped_back2.png";
import Heading from "../components/heading/heading";
import IITR from "../assets/iitrlogo.png";
import Melasta from "../assets/melasta.png";
import CFT from "../assets/cft.png";
import Goodluck from "../assets/goodluck.png";
import Jlcpcb from "../assets/jlcpcb.png";
import Pcb from "../assets/pcb.png";
import Coroplast from "../assets/coroplast.png";
import App from "../assets/app.png";
import Bqf from "../assets/bqf.png";
import Gigavac from "../assets/gigavac.png";
import Simscale from "../assets/simscale.png";
import Wilwood from "../assets/wilwood.png";
import Gri from "../assets/gripump.svg";
import Ipg from "../assets/ipg.png";
import Solidworks from "../assets/solidworks.svg";
import Facebook from "../assets/facebook2.png";
import Linkedin from "../assets/linkedin2.png";
import Insta from "../assets/Insta2.png";
import Twitter from "../assets/twitter2.png";
import Youtube from "../assets/youtube2.png";
import Car from "../assets/Car.png";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="homepage">
        <Navbar></Navbar>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            backgroundImage: `url(${Car})`,
            zIndex: "-2",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="homepage-intro">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "90vh",
              paddingTop: "15vh",
            }}
          >
            <div className="homepage-intro-box">
              <div className="homepage-intro-box-line"></div>
              <div className="homepage-intro-box-contents">
                <div className="homepage-intro-box-contents-heading1">
                  IIT ROORKEE MOTORSPORTS
                </div>
                <div className="homepage-intro-box-contents-heading2">
                  Electrifying Racing
                </div>
                <div className="homepage-intro-box-contents-heading3">
                  The official formula student racing team of IIT Roorkee.
                </div>
              </div>
            </div>
            <div style={{ width: "36vw" }}>
              <div className="homepage-intro-explore">Explore Our Projects</div>
            </div>
          </div>
          <div
            style={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="homepage-intro-socials">
              Connect on Social Media
              <div>
                <img src={Facebook} style={{ padding: "20px 10px" }}></img>
                <img src={Linkedin} style={{ padding: "20px 10px" }}></img>
                <img src={Insta} style={{ padding: "20px 10px" }}></img>
                <img src={Twitter} style={{ padding: "20px 10px" }}></img>
                <img src={Youtube} style={{ padding: "20px 10px" }}></img>
              </div>
            </div>
          </div>
        </div>

        <div className="homepage-recent">
          <img className="homepage-recent-stripped" src={Stripped}></img>
          <Heading text="RECENT EVENTS"></Heading>
          <div className="homepage-recent-scroll">
            <div className="homepage-recent-scroll-circle"></div>
            <div className="homepage-recent-scroll-circle"></div>
            <div className="homepage-recent-scroll-circle"></div>
            <div className="homepage-recent-scroll-circle"></div>
            <div className="homepage-recent-scroll-circle"></div>
          </div>
          <div style={{ display: "flex", zIndex: "1", position: "relative" }}>
            <div>
              <div className="homepage-eventscroller">
                <div className="homepage-eventscroller-description">
                  IITRMS holds an online team meeting on Zoom with Lorem Ipsum.
                  Nulla volutpat enim, urna, nunc urna vitae sit in.
                </div>
                <button
                  className="homepage-eventscroller-leftslide"
                  // onClick={this.leftscroll}
                >
                  <div className="arrow-left"></div>
                </button>
                <button
                  className="homepage-eventscroller-rightslide"
                  // onClick={this.rightscroll}
                >
                  <div className="arrow-right"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="homepage-projects">
          <img
            className="homepage-recent-stripped2 homepage-recent-stripped"
            src={Stripped2}
          ></img>
          <Heading text="OUR PROJECTS"></Heading>
          <div className="homepage-projects-allprojects">
            <div>
              <div
                className="homepage-projects-project1 homepage-projects-project"
                style={{ width: "98%" }}
              >
                <div className="homepage-projects-project-heading">
                  RMSE '19
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div className="homepage-projects-project3 homepage-projects-project">
                  <div className="homepage-projects-project-heading">
                    Saber - 17
                  </div>
                </div>
                <div className="homepage-projects-project4 homepage-projects-project">
                  <div className="homepage-projects-project-heading">
                    Bolt - 15
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="homepage-projects-project2 homepage-projects-project">
                <div className="homepage-projects-project-heading">
                  Car 2013
                </div>
              </div>
              <div className="homepage-projects-project5 homepage-projects-project">
                <div className="homepage-projects-project-heading">
                  Car 2011
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage-recent">
          <img className="homepage-recent-stripped" src={Stripped}></img>
          <Heading text="ACHIEVEMENTS"></Heading>
          <div style={{ display: "flex", zIndex: "1", position: "relative" }}>
            <div>
              <div className="homepage-achievement-eventscroller homepage-eventscroller"></div>
              <div className="homepage-eventline"></div>
              <div className="homepage-achievements-cars">
                <div className="homepage-achievements-cars-car">RMSE'19</div>
                <div className="homepage-achievements-cars-car">Saber</div>
                <div className="homepage-achievements-cars-car">Bolt</div>
                <div className="homepage-achievements-cars-car">Car 2013</div>
                <div className="homepage-achievements-cars-car">Car 2011</div>
              </div>
            </div>
            <div className="homepage-achievements-allachieve">
              <div className="homepage-allevents-heading">FORMULA GREEN<br></br><span style={{fontSize: "20px" }}>2020</span></div>
              <div className="homepage-allevents-event1">
                <div className="homepage-allevents-event-rank">1st</div>
                <div className="homepage-allevents-event-position">Acceleration Event</div>
              </div>
              <div className="homepage-allevents-event2">
                <div className="homepage-allevents-event-rank">2nd</div>
                <div className="homepage-allevents-event-position">Business Presentation</div>
              </div>
              <div className="homepage-allevents-event1">
                <div className="homepage-allevents-event-rank">3rd</div>
                <div className="homepage-allevents-event-position">Overall Competition</div>
              </div>
              <div className="homepage-allevents-event2">
                <div className="homepage-allevents-event-rank">3rd</div>
                <div className="homepage-allevents-event-position">Engg. Design Event</div>
              </div>
              <div className="homepage-allevents-event1">
                <div className="homepage-allevents-event-rank">2nd</div>
                <div className="homepage-allevents-event-position">Cost Presentation</div>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage-projects">
          <img
            className="homepage-recent-stripped2 homepage-recent-stripped"
            src={Stripped}
          ></img>
          <Heading text="OUR PROUD PARTNERS"></Heading>
          <div className="homepage-partners-allpartners">
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={IITR} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Melasta} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={CFT} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Goodluck} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Jlcpcb} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Pcb} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Coroplast} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={App} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Bqf} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Gigavac} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Simscale} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Wilwood} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Gri} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Ipg} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Solidworks} className="homepage-partners-partner"></img>
            </div>
          </div>
        </div>
        <div
          style={{ width: "100vw", height: "40px", backgroundColor: "#9D9FA8" }}
        ></div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Homepage;
