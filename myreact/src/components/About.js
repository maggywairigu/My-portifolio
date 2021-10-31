import React from 'react'
import person from "../person.png"

const About = () => {
    return (
        <div id="about" className="about">
            <div className="aboutinfo">
                <div className= "row">
            <h1>About us</h1>
            <div className="personcol">
            <img className="person" src={person} alt=""></img>
            </div>
            <div className="col">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur eum illum, illo odio repellat architecto. 
            Quod cum, vitae architecto obcaecati rerum recusandae deleniti odit laudantium molestiae accusamus quae explicabo quam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Recusandae molestiae ea, eum deserunt saepe ullam rerum provident sed odio minus accusamus, adipisci tempore magni. 
                Animi aliquam commodi consectetur temporibus ullam.</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About
