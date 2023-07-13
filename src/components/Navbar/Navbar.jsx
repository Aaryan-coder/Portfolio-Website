import "./Navbar.css"
import AnchorLink from "react-anchor-link-smooth-scroll";
const Navbar =() =>{
    return(
        <nav>
        <div className="nab-links">
            <ul>
                <li>
                <AnchorLink href='#about'>About</AnchorLink>
                </li>
                <li>
                <AnchorLink href='#project'>Projects</AnchorLink>
                </li>
                <li>
                <AnchorLink href='#contact'>Contact</AnchorLink>
                </li>
            </ul>
        </div>
        </nav>
    )
}

export default Navbar;