import '../projects.css';
import splashImage from "../../media/outreach/IMG_0379.jpg";
import SideNavigation from "../../components/sideNavigation";

function OurSponsors() {
    return (
        <section>
            <section className="splashImage">
                <img src={splashImage} className="backgroundImage"/>
                <div className="overlay"></div>
                <section className="contentContainer">
                    <h2>OUR SPONSORS</h2>
                    <h4>Thank You for Your Support!</h4>
                </section>
            </section>
            <section className="contentContainer">
                <div className="flexContainer g30">
                    <SideNavigation/>
                    <div className="textContainer">
                        <h6>Our Appreciation</h6>
                        <p>
                            We extend our deepest gratitude to our sponsors for their generous support. Their
                            contributions enable us to innovate, build, and push the boundaries of rocketry and
                            engineering excellence. Without their support, our projects and competitions would not be
                            possible.
                        </p>
                        <p>
                            The resources provided by our sponsors help fund critical components, manufacturing, and
                            research efforts, ensuring that we continue to excel in aerospace engineering and
                            competition environments.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default OurSponsors;
