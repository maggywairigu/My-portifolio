import React from 'react'
import webdesign from "../webdesign.png"
import webdevelopment from "../webdevelopment.png"
import socialmediaads from "../socialmediaads.png"



const Services = () => {
    return (
        <div className="services">
            <div className="serviceinfo">
            <h1>Our services</h1>
            <div className="row">
                <div className="servicecol">
            <img className="webdesign" src={webdesign} alt=""></img>
                <h3>Web Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Recusandae molestiae ea, eum deserunt saepe ullam rerum provident sed odio minus accusamus, adipisci tempore magni.Animi aliquam commodi consectetur temporibus ullam.</p>
            </div>
            <div className="servicecol">
            <img className="webdevelopment" src={webdevelopment} alt=""></img>
                <h3>Web development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Recusandae molestiae ea, eum deserunt saepe ullam rerum provident sed odio minus accusamus, adipisci tempore magni.Animi aliquam commodi consectetur temporibus ullam.</p>
            </div>
            <div className="servicecol">
            <img className="socialmediaads" src={socialmediaads} alt=""></img>
                <h3>Social media ads</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Recusandae molestiae ea, eum deserunt saepe ullam rerum provident sed odio minus accusamus, adipisci tempore magni.Animi aliquam commodi consectetur temporibus ullam.</p>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Services
