import React from 'react'
import project1 from "../project1.jpg"
import project2 from "../project2.jpg"
import project3 from "../project3.jpg"
import project4 from "../project4.jpg"
import person from "../person.png"

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="portfolioinfo">
                <h1>Our portfolio</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <div className="row">
                    <div className="portcol">
                    <a href="https://git-scm.com/"><img className="project1" src={project1} alt=""></img></a>
                    </div>
                    <div className="portcol">
                    <a href="https://git-scm.com/"><img className="project2" src={project2} alt=""></img></a>
                    </div>
                    <div className="portcol">
                    <a href="https://git-scm.com/"><img className="project3" src={project3} alt=""></img></a>
                    </div>
                    <div className="portcol">
                    <a href="https://git-scm.com/"><img className="project4" src={project4} alt=""></img></a>
                    </div>
                </div>
            </div>


            <div className="clients">
                <div className="happyclients">
                    <h1>What our clients say</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <div className="row">
                        <div className="clientcol">
                    <img className="client1" src={person} alt=""></img>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Recusandae molestiae ea, eum deserunt saepe ullam rerum provident sed odio minus accusamus, adipisci tempore magni.Animi aliquam commodi consectetur temporibus ullam.</p>
                        <h3>Lorem Ipsum</h3>
                    </div>
                        </div>
                        <div className="clientcol">
                    <img className="client2" src={person} alt=""></img>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Recusandae molestiae ea, eum deserunt saepe ullam rerum provident sed odio minus accusamus, adipisci tempore magni.Animi aliquam commodi consectetur temporibus ullam.</p>
                        <h3>Lorem Ipsum</h3>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
