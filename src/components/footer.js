import '../pages/home.css';
import RTLogo from '../media/RocketTeamLogoWhite.png'
import UCSCLogo from '../media/UC_Santa_Cruz_logo.svg'
import BaskinLogo from '../media/UCSC_BaskinEng_Logo_Color_RGB.svg'
import './footer.css'

function Footer() {
    return (
        <footer>
            <section className="footerContainer">
                <div className="footerLogos">
                    <div>
                        <img src={RTLogo} className="RocketTeamLogoWhite"/>
                    </div>
                    <div className="UCSCLogos">
                        <img src={UCSCLogo} className="UCSCLogo"/>
                        <img src={BaskinLogo} className="BaskinLogo"/>
                    </div>
                </div>

                <div className="footerLinks">
                    <div className="footerColumn">
                        <h5>IREC 2025</h5>
                        <a href="/site#/irec/vehicle-systems">Vehicle Systems</a>
                        <a href="/site#/irec/payload">Payload</a>
                    </div>
                    <div className="footerColumn">
                        <h5>TECHNICAL PROJECTS</h5>
                        <a href="/site#/technical-projects/avionics">Avionics</a>
                        <a href="/site#/technical-projects/ground-control-systems">Ground Control Systems</a>
                        <a href="/site#/technical-projects/thrust-vector-control">Thrust Vector Control</a>
                        <a href="/site#/technical-projects/simulations">Simulations</a>
                    </div>
                    <div className="footerColumn">
                    <h5>OUTREACH</h5>
                        <a href="/site#/outreach/outreach">Outreach</a>
                        <a href="/site#/outreach/media">Media</a>
                        <a href="/site#/outreach/outreach">Our Sponsors</a>
                        <a href="/site#/outreach/cinematics">Become a Sponsor</a>
                    </div>
                    <div className="footerColumn">
                        <h5>LEADERSHIP</h5>
                        <a href="/site#/leadership/current-leadership">Current Leads</a>
                        <a href="/site#/leadership/alumni">Alumni</a>
                    </div>
                    <div className="footerColumn">
                        <h5>NEW MEMBERS</h5>
                        <a href="/site#/new-members/how-to-join">How to Join</a>
                        <a href="https://ucscrocketry.notion.site/">Events Calendar</a>
                        <a href="https://rocketslug.slack.com">Slack Link</a>
                    </div>
                </div>
                <div className="footerInfo">
                    <div className="copywrite">
                        <h5>© 2025 Regents of the University of California</h5>
                    </div>
                    <div className="preferences">
                        <h5> Rocket Team is a 501(c)(3) nonprofit organization (EIN 94-1539563). </h5>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
