import React from "react"
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="headerwrap">
            <div className="maininfo">
                <h1>Website and web development promotion</h1>
                <Typed 
                className="typedtext"
                strings={["Web design", "Web development", "Social Media ads", "Google ads"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="contacts" className="btn-mainoffer">contact us</a>
            </div>
        </div>
    )
}

export default Header
