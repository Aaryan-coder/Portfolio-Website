import './Services.css'
const Services = () =>{
    return(
        <div className = "services-container">
        <div className = "services-list-container">
        <div className = "services-desc-container">
        <h1>
            My Awesome <span>Services</span>
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima tenetur repellat adipisci velit modi ipsa possimus tempora repellendus, hic debitis dicta quasi voluptas totam, aperiam magnam quis recusandae provident unde!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima tenetur repellat adipisci velit modi ipsa possimus tempora repellendus, hic debitis dicta quasi voluptas totam, aperiam magnam quis recusandae provident unde!
            </p>
            <button>Hire Me</button>
            </div>
        <div className = "service-item-container">
            <div className = "services-item">
                <i className = "fa-solid fa-code"></i>
                <div className = "item-desc">
                    <h3>Web Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam exercitationem fuga sequi similique corporis assumenda enim tenetur maxime, illo amet? Quaerat in maxime itaque eius nobis qui veniam cupiditate sed.</p>

                </div>
            </div>
            <div className = "services-item">
                <i className = "fa-solid fa-desktop"></i>
                <div className = "item-desc">
                    <h3>Desktop Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam exercitationem fuga sequi similique corporis assumenda enim tenetur maxime, illo amet? Quaerat in maxime itaque eius nobis qui veniam cupiditate sed.</p>
                    
                </div>
            </div>
            <div className = "services-item">
                <i className = "fa-solid fa-tablet-alt"></i>
                <div className = "item-desc">
                    <h3>UI/UX Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam exercitationem fuga sequi similique corporis assumenda enim tenetur maxime, illo amet? Quaerat in maxime itaque eius nobis qui veniam cupiditate sed.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Services