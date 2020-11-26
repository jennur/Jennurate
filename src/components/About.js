import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import React from "react";
import "../styles/About.scss";

class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contentAnimation: {
        transform: "translateX(-20%)",
        opacity: 0
      },
      imageTopAnimation: {
        top: "-500px"
      },
      imageBottomAnimation: {
        bottom: "-500px"
      }
    }
  }
  render() {

    return (
      <section className="about">
        <img style={this.state.imageTopAnimation} className="picture picture-top" src="/spa.png" alt="It's me at spa" />
        <img style={this.state.imageBottomAnimation} className="picture picture-bottom" src="/eskimo.png" alt="It's me as eskimo" />

        <div className="content-box" style={this.state.contentAnimation}>
          <span className="content-heading">Hello</span>
          <p>I'm a girl{" "}
              <span role="img" aria-label="emoji">
                💁‍♀️
              </span>
              , born in the beginning of the 90's, in between the deepest
              forests of Norway, surrounded by fields of grains,{" "}
              <span role="img" aria-label="emoji">
                🌾
              </span>{" "}
              where moose and deer are your nearest friends{" "}
              <span role="img" aria-label="emoji">
                🦌
              </span>, and signal suits are fashion.
              <br />
              <br />
              During a play about the solar system in elementary school, 
              where I got the honor of being dressed up as Tellus {" "}
              <span role="img" aria-label="emoji">
                🌍
              </span>,
              I discovered my love for space which triggered my curiosity for natural science. 
              Around the same time, I got caught in the piczo.com universe where I knocked myself out, making meaningless 
              websites about everything from celebrities to killer whales {" "} 
              <span role="img" aria-label="emoji">
                🐳
              </span>.
              <br />
              <br />
              I ended up following my inner scientist after finishing high school, 
              but after completing a degree which involved staring at
              lines and lines of equations {" "}
              <span role="img" aria-label="emoji">
                🤓
              </span>, I found my creativity neurons screaming{" "}
              <span role="img" aria-label="emoji">
                💀
              </span>
              . So I decided to pick up my child hood career as a web developer.
              <br />
              <br />
              Now here I am, happily living off of turning
              my own, and others', sketches into living things on the internet.
              <span role="img" aria-label="emoji">
                👩‍🎨💻
              </span>
              <br />
              <br/>
              And I'm loving it {" "}
              <span role="img" aria-label="emoji">
                💖
              </span>
            </p>
            <figure className="cat-gif text-center">
                <iframe
                  title="programming-cat"
                  src="https://giphy.com/embed/lXiRzPb8C5JTJcfPq"
                  width="480"
                  height="264"
                  frameBorder="0"
                />
            </figure>
            <img className="pinky-gif" src="/pinky.gif" alt="Pinky hair"/>
            <h3>Contact or stalk</h3>
            <ul>
              <li>
                <FontAwesomeIcon className="icon" icon={faEnvelope}/> 
                <a href="mailto:jenny.bonsak@gmail.com">E-mail</a>
              </li>
              <li>
                <FontAwesomeIcon className="icon" icon={faLinkedin}/> 
                <a href="https://linkedin.com/in/jenny-bonsak">LinkedIn</a>
              </li>
              <li>
                <FontAwesomeIcon className="icon" icon={faGithub}/> 
                <a href="https://github.com/jennur">Github</a>
              </li>
            </ul>
          </div>
      </section>
    )
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        contentAnimation: {
          transform: "translateX(0px)",
          opacity: 1
        }
      })
    }, 0)
    setTimeout(() => {
      this.setState({
        imageTopAnimation: {
          top: "-50px"
        },
        imageBottomAnimation: {
          bottom: "-50px"
        }
    })
    }, 300)
  }
}

export default About;