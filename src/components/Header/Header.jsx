import "./Header.css"
import profileImg from "../../assets/icon.jpg"
import Typical from "react-typical";
const Header = () =>{
    return(
        <div id = "about" className = "header-container">
        <div className = "header-content">
            <h1>Hey! I Am</h1>
            <h2 className = "fullname">Aaryan Mehta</h2>
            <h2>
                I'm a {""}
                <Typical steps = {[ 
                    "Full Stack Developer 🚀",
              1000,
              "Frontend Developer ✅",
              1000,
              "Backend Developer 🏆",
              1000,
              "React Developer ⚛️",
              1000,
              "AI and ML enthusiast ✅",
              1000,
              "Programmer 🏆",
              1000
              ]} loop = {Infinity} wrapper = "b" />
            </h2>
            <p>As an ambitious Undergraduate (UG) student at VIT University, Chennai campus, I am currently specializing in Computer Science(AI&ML). My passion for web development has driven me to become a proficient web developer, and I have showcased my skills by actively participating in numerous global hackathons. Machine Learning has captivated me, and I find immense joy in exploring its endless possibilities. Through my dedication and commitment,
I aim to contribute effectively to any team I am a part of, fostering a collaborative environment where we can
collectively make a positive impact on society. With an unwavering enthusiasm for technology, I am driven to
continuously learn, evolve, and enhance my skill set. I firmly believe that through my endeavors, I can not only
broaden my horizons as an individual but also play a significant role in shaping a better future for society.</p>
       
        </div>
        <div className = "profile-img-container">
            <img src = {profileImg} alt = "" />
        </div>
        </div>
    )
}
 export default Header;