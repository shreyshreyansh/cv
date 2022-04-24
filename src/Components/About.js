import React, { Component } from 'react';
import resume from '../assets/resume.pdf';
import picture from '../images/thumbs/profilepic.jpg';

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={picture}
              alt="Shreyansh Shrey Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
              Strong in design and integration with intuitive problem-solving
              skills. Proficient in MERN Stack Development, (Highest Rating 1879
              [4⭐]) on CodeChef, (max. specialist, 1476) on Codeforces, ACM
              ICPC Regionalist '20. <br />
              <br />
              Passionate about implementing and launching new projects. Ability
              to translate business requirements into technical solutions.
              Looking to start the career as an entry-level software engineer
              with a reputed firm driven by technology.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>
                    <a
                      href={`mailto:${email}?subject=The%20subject%20of%20the%20mail`}
                    >
                      {email}
                    </a>
                  </span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
