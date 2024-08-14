
import './WorkExp.css';

const WorkExp =()=>{
    return(
        <section id='work'>
            <h2>Work Experience</h2>
            <div className="cardContainer">
                <div className="cardContent flipLeft">
                    <div className="frontSide">
                        <img src={require('./images/TheMobiadz-Logo-Copy.png')} alt="TheMobiAdz" />
                        <h2>Full Stack Web Developer Intern</h2>
                        <h3>03 JUN, 2024 - 02 AUG, 2024</h3>
                    </div>
                    <div className="backSide">
                        <p>On-Site Intern</p>
                        <ul>
                            <li>
                                Designed and deployed advanced features using ReactJS and PHP, including responsive loaders and Swiper carousel sliders; now used in 10+ projects to enhance user experience.
                            </li>
                            <li>
                                Integrated external APIs and services, including Amazon’s Product Advertising API 5.0 and Google Sheets, for efficient data exchange and lead generation.
                            </li>
                            <li>
                                Created engaging landing pages and HTML5 ads for client product advertisements, boosting lead generation by 20% and improving client satisfaction.
                            </li>
                            <li>
                                Crafted a custom Node.js API and implemented MySQL to enhance handling and processing of two-step form inputs, increasing data consistency and application performance.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="cardContent flipRight">
                    <div className="frontSide">
                        <img src={require('./images/NIC-logo2.png')} alt="NIC" />
                        <h2>Front-End Developer Intern</h2>
                        <h3>15 Jan, 2024 - 23 Feb, 2024</h3>
                    </div>
                    <div className="backSide">
                        <p>Remote Intern</p>
                        <ul>
                            <li>
                                Built a comprehensive website using React.js, HTML5, and CSS3, enhancing accessibility and transparency of parliamentary information.
                            </li>
                            <li>
                                Redesigned interactive user interfaces optimized for various devices, resulting in a 15% rise in user satisfaction and improved accessibility across different screen sizes and resolutions.
                            </li>
                            <a href='https://harshverma2609.github.io/NIC-Intern-Project/'>Demo Work</a>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default WorkExp;
