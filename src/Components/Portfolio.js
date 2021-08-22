import React, { Component } from "react";
import o1 from "../images/thumbs/01.png";
import o2 from "../images/thumbs/02.png";
import o3 from "../images/thumbs/03.png";

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row projects">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a
                    href="https://github.com/shreyshreyansh/Peer-Coder"
                    className="image fit thumb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={o1} alt="peer-coder" />
                  </a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Peer Coder</h3>
                      <p>
                        An online code editor for interviews, troubleshooting,
                        teaching & more…
                      </p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                          <a
                            href="https://shreyshreyansh.github.io/Peer-Coder-Web/"
                            className="button project-button"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Demo
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/shreyshreyansh/Peer-Coder"
                            className="button project-button brands"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-github icon"></i>View Source
                          </a>
                        </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-nodejs-plain technology"></i>
                        <i className="devicon-react-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a
                    href="https://github.com/shreyshreyansh/GreenMile"
                    className="image fit thumb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={o2} alt="green-mile" />
                  </a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Green Mile</h3>
                      <p>
                        Green Mile is a smart system which monitors fill level
                        of dustbin using IoT sensors and gives an optimized
                        route to garbage truck drivers passing through all the
                        dustbins with 60% or above fill level and the dustbin
                        which hasn't been picked since 3 days using Google Maps
                        Apis.
                      </p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                          <a
                            href="/maintenance.html"
                            className="button project-button"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Demo
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/shreyshreyansh/GreenMile"
                            className="button project-button brands"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-github icon"></i>View Source
                          </a>
                        </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-nodejs-plain technology"></i>
                        <i className="devicon-arduino-plain technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a
                    href="https://github.com/shreyshreyansh/Smart-Water"
                    className="image fit thumb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={o3} alt="smart-water" />
                  </a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Smart Water Meter</h3>
                      <p>
                        A smart water meter with the help of IoT, and it measure
                        the water consumption of the user. It tells the water
                        consumption of the user throughout the month and the
                        through the water consumption data, the authorities can
                        charge the user.
                      </p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                          <a
                            href="https://sleepy-garden-05786.herokuapp.com/"
                            className="button project-button"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Demo
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/shreyshreyansh/Smart-Water"
                            className="button project-button brands"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-github icon"></i>View Source
                          </a>
                        </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-nodejs-plain technology"></i>
                        <i className="devicon-arduino-plain technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <ul className="actions">
                <li className="wide-button">
                  <a
                    href="https://github.com/shreyshreyansh"
                    className="button portfolio-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Full Portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
