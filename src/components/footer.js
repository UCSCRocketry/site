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
                        <a>Vehicle Systems</a>
                        <a>Payload</a>
                    </div>
                    <div className="footerColumn">
                        <h5>TECHNICAL PROJECTS</h5>
                        <a>Avionics</a>
                        <a>Ground Control Systems</a>
                        <a>Thrust Vector Control</a>
                        <a>Simulations</a>
                    </div>
                    <div className="footerColumn">
                    <h5>OUTREACH</h5>
                        <a>Outreach</a>
                        <a>Media</a>
                        <a>Our Sponsors</a>
                        <a>Become a Sponsor</a>
                    </div>
                    <div className="footerColumn">
                        <h5>LEADERSHIP</h5>
                        <a>Current Leads</a>
                        <a>Alumni</a>
                    </div>
                    <div className="footerColumn">
                        <h5>NEW MEMBERS</h5>
                        <a>How to Join</a>
                        <a>Events Calendar</a>
                        <a>Slack Link</a>
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
