import { Link } from "react-router-dom"
import w1 from "../../assets/w1.jpg"
import w2 from "../../assets/w2.jpg"
import w3 from "../../assets/w3.jpg"
import w4 from "../../assets/w4.jpg"
import w5 from "../../assets/w5.jpg"
import w6 from "../../assets/w6.jpg"
import "./Works.css"
function Works(){
    return(
        <div id = "project" className = "works-container">
            <h1>Projects</h1>
            <div className = "works-list-container">
                <div className = "works-item">
                    <img src = {w1} alt = "work1"/>
                    <h1>Blog Application</h1>
                    <p>Best place for developers to share their knowledge on various technical projects. A application which allows user to create posts, read posts and comment on posts.</p>
                    <p><b>Tools Used: </b>MongoDB, Express, EJS, NodeJS. I have used cloudinary API for storing images and have taken of security of users by hashing password and using sessions to store user information</p>
                    <b>Website Link: </b><a href = "https://blog-co1i.onrender.com/"><b> Website </b></a>
               
                </div>
                <div className = "works-item">
                <img src = {w2} alt = "work2"/>
                <h1>Weather Forecast Prediction</h1>
                    <p>A simple weather application which gives forecast of the day and predicts the
forecast was next three days as well. Made use of weather API for making this application</p>
<b>Website Link: </b> <a  href = "https://deluxe-flan-c2eb31.netlify.app/"><b>Website </b> </a>
                </div>
                <div className = "works-item">
                    <img src = {w3} alt = "work3"/>
                    <h1>Amazon Data Visualization using Power BI</h1>
                    <p>Complete Visualisation of Amazon Sales, Revenue, Customers, Product, Returns and territories using Power BI
</p>
<b>Website Link: </b><a  href = "https://github.com/Aaryan-coder/Amazon-Data-Visualisation"><b>Link</b></a>
                </div>
                <div className = "works-item">
                    <img src = {w4} alt = "work4"/>
                    <h1>End-to-End Heart Disease Prediction</h1>
                    <p>A End-to-End Heart Disease Prediction Model which can accurately predict whether a patient is suffering from heart disease or not by taking into
consideration various parameters. </p>
<p><b>Tools Used: </b> Logistic Regression, KNN, Random Forest Classifier, RandmizedSearchCV, GridSearchCV</p>
<b>Dataset link: </b><a href = "https://archive.ics.uci.edu/dataset/45/heart+disease"><b>link</b></a><br />
<b>Project: </b><a href = "https://github.com/Aaryan-coder/End-to-End-Heart-Disease-Prediction"><b>link</b></a>
                </div>
                <div className = "works-item">
                    <img src = {w5} alt = "work5"/>
                    <h1>Dog Vision</h1>
                    <p>A Deep learning project to predict the breed of the image given the image of
dog as input. Project is submitted to Kaggle and prediction score is calculated
for each dog in the test dataset. </p>
<p><b>Tools used: </b> Pre-processing images, batches, Tensorflow hub, Classification with
MobileNet V2, Callbacks </p>
<b>Dataset link: </b><a href = " https://www.kaggle.com/c/dog-breed-identification/data "><b>link</b></a><br />
<b>Project: </b><a href = "https://github.com/Aaryan-coder/Dog-Vision"><b>link</b></a>
                </div>
                <div className = "works-item">
                    <img src = {w6} alt = "work6"/>
                    <h1>Node Mailer App</h1>
                    <p>
This Node.js application uses Node Mailer to send emails. It includes a server that renders an email form using an EJS template. When the form is submitted, it sends an email using the provided form data. The SMTP configuration is set for a Gmail account, and the email content includes the recipient, subject, and message. If successful, it logs the message ID; otherwise, it throws an error.</p>
<a className="link" href = "https://github.com/Aaryan-coder/NodeMailer-App"><b>Link</b></a>
                </div>
            </div>
        </div>
    )
}

export default Works;