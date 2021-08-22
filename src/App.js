import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

import $ from "jquery";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
    };
  }

  getResumeData() {
    const load = document.getElementById("siteLoading");
    var data = {
      main: {
        name: "Shreyansh Shrey",
        occupation: "Full-Stack Web Developer",
        description:
          "I like to code things from scratch, and enjoy bringing ideas to life in the browser",
        image: "profilepic.jpg",
        contactmessage:
          "Have me make stuff for you. If you like my work and have some cool projects to work on, just send me a direct message or contact me through social sites.",
        email: "shreyansh.shrey1999@gmail.com",
        phone: "+91 7296091010",
        address: {
          city: "Ranchi",
          state: "Jharkhand",
          zip: "834006",
        },
        website: "/",
        resumedownload:
          "https://drive.google.com/file/d/1SPl-8X0DpCI8EX0522zT5_jIRUMkiOwg/view?usp=sharing",
        social: [
          {
            name: "codechef",
            url: "https://codeforces.com/profile/cyberphobia",
            className: "fa fa-code",
          },
          {
            name: "linkedin",
            url: "https://www.linkedin.com/in/shreyansh-shrey-647870190/",
            className: "fa fa-linkedin",
          },
          {
            name: "github",
            url: "https://github.com/shreyshreyansh",
            className: "fa fa-github",
          },
          {
            name: "email",
            url: "mailto:shreyansh.shrey1999@gmail.com?subject=The%20subject%20of%20the%20mail",
            className: "fa fa-envelope",
          },
        ],
      },
      resume: {
        education: [
          {
            school: "Manipal University Jaipur",
            degree: "Computer Science",
            graduated: "2018-2022",
            description:
              "Involves the study of Algorithms and Data Structures, SQL syntax and statements, Full Stack Web Development in MERN Stack, JavaScript, React, Redux and CS fundamental subjects.",
          },
          {
            school: "DAV Gandhinagar",
            degree: "Science",
            graduated: "2016-2017",
            description: "Done my intermediate from CBSE board with 91%",
          },
          {
            school: "St.Thomas",
            degree: "General",
            graduated: "2014-2015",
            description: "Done my high school from ICSE board with 89.2%",
          },
        ],
        work: [
          {
            company: "Frugal Labs Pvt. Ltd.",
            title: "Full Stack Developer",
            years: "June 2021 - August 2021",
            description:
              "Converted a monolith application to a microservices-based application. Built the MongoDB and PostgreSQL database services for the application. Implemented a RabbitMQ service for connection between MQTT broker and MongoDB database. Implemented a token based authentication for the api services of the application using JSON web token. Documented the api services for the application using Swagger.io",
          },
        ],
      },
      testimonials: {
        testimonials: [
          {
            text: "Shreyansh has been a hard working developer right from the day 1 regardless of the project he works on.His technical capabilities will really help any firm that he works with.",
            user: "Himanshu Ranjan | SDE Intern @Practo | Backend | Android/Flutter | 4* @CodeChef",
          },
        ],
      },
    };
    this.setState({ resumeData: data });
    setTimeout(() => {
      load.outerHTML = "";
    }, 1250);
    // $.ajax({
    //   url: "/resumeData.json",
    //   dataType: "json",
    //   cache: false,
    //   success: function (data) {
    //     this.setState({ resumeData: data });
    //     setTimeout(() => {
    //       load.outerHTML = "";
    //     }, 1250);
    //   }.bind(this),
    //   error: function (xhr, status, err) {
    //     console.log(err);
    //     alert(err);
    //   },
    // });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
