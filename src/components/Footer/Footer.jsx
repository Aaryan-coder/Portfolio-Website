import "./Footer.css"
import logo from "../../assets/logo.png"
const Footer = () =>{
    return(
        <footer id = "contact">
              <div className = "footer-cpyright">
            <h1>Contact</h1><i className = "fa fa-envelope"></i> <a style={{textDecoration:"none", color: "white"}} href = "mailto:aryanmehta376@gmail.com" >  aryanmehta376@gmail.com</a>
        </div>
        <ul className = "footer-social-media">
            <li>
                <a href = "github.com/Aaryan-coder?tab=repositories">
                    <i className = "fa-brands fa-github"></i>
                </a>
            </li>
            <li>
                <a href = "https://www.instagram.com/aaryan_mehta_10/">
                    <i className = "fa-brands fa-instagram"></i>
                </a>
            </li>
            <li>
                <a href = "linkedin.com/in/aaryanmehta123">
                    <i className = "fa-brands fa-linkedin"></i>
                </a>
            </li>
        </ul>
         <div className = "footer-cpyright">
            <p>©️  2023, Aaryan Mehta. All Right reserved</p>

        </div>
        </footer>
    )
}

export default Footer;