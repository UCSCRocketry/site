import '../projects.css';
import './leadership.css'
import background from "../../media/bluebackground.png";
import LeadsCard from "../../components/leads";
import React from "react";

import Qingyuan from "../../media/leads/Screenshot 2024-11-18 at 11.35.06 PM.png"
import Heli from "../../media/leads/Screenshot 2024-10-12 at 3.11.00 PM.jpg"
import Aaron from "../../media/leads/ich2.png"
import Khanh from "../../media/leads/IMG_0713.png"
import Amber from "../../media/leads/IMG_8848.jpg"
import Laura from "../../media/leads/IMG_1754.jpg"
import Marcus from "../../media/leads/IMG_5571.jpg"
import Arjun from "../../media/leads/IMG_5724.jpg"
import Julian from "../../media/leads/img_9983.jpg"
import Merrick from "../../media/leads/IMG_7105.jpg"
import Alex from "../../media/leads/FullSizeRender Kopie.png"
import Teo from "../../media/leads/IMG_2201.JPG"

function CurrentLeadership() {
    return (
        <section>
            <section className="topImage">
                <img src={background} className="backgroundImage"/>
                <section className="pageHeadlineContainer">
                    <h2>Leadership</h2>
                </section>
            </section>
            <div className="contentContainer">
                <h5 className="H5Gray">Administration Team</h5>
                <LeadsCard big={true} name="Qingyuan Cao" title="President" year="4th" major="Computer Engineering"
                           image={Qingyuan}
                           about="Qingyuan, at the helm of Rocket Team, directs engineering efforts, oversees launches, and fuels advancements in rocketry through leadership and innovation."
                />
                <LeadsCard big={true} name="Khanh Tran" title="Vice President" year="4th" major="Robotics" image={Khanh}
                           about="As vice president, Khanh supports leadership, manages logistics, and coordinates technical efforts to ensure mission success."
                />
                <hr/>
                <div className="leadsContainer">
                    <LeadsCard big={false} name="Marcus Chan" title="Lab Saftey Officer" year="4th"
                               major="Computer Engineering" image={Marcus}/>
                    <LeadsCard big={false} name="Aaron Spalding" title="Business and Finance" year="3rd"
                               major="Art and Design: Games and Playable Media" image={Aaron}/>
                    <LeadsCard big={false} name="Alexander Dalchev" title="Launch Operations" year="2nd"
                               major="Business Management Economics" image={Alex}/>
                    <LeadsCard big={false} name="Heli Kadakia" title="Outreach" year="2nd"
                               major="Computer Science and Computer Engineering" image={Heli}/>
                </div>
                <hr/>
                <h5 className="H5Gray">Competition Leads</h5>
                <div className="leadsContainer">
                <LeadsCard big={false} name="Teodor Langan" title="Vehicle Systems" year="2nd"
                               major="Computer Engineering" image={Teo}/>
                    <LeadsCard big={false} name="Amber Borjigin" title="Recovery" year="2nd"
                               major="Computer Engineering" image={Amber}/>
                    <LeadsCard big={false} name="Laura Ortiz" title="Payload" year="4th"
                               major="Robotics" image={Laura}/>
                </div>
                <hr/>
                <h5 className="H5Gray">Project Leads</h5>
                <div className="leadsContainer">
                <LeadsCard big={false} name="Julian Barberra" title="Avionics Electrical" year="2nd"
                               major="Electrical Engineering" image={Julian}/>
                    <LeadsCard big={false} name="Merrick Fort" title="Avionics Software" year="3rd"
                               major="Baskin Engineering" image={Merrick}/>
                    <LeadsCard big={false} name="Sage Silberman" title="Ground Control Systems" year="2nd"
                               major="Baskin Engineering" image={Aaron}/>
                    <LeadsCard big={false} name="Amber Borjigin" title="Thrust Vector Control" year="2nd"
                               major="Computer Engineering" image={Amber}/>
                </div>
            </div>
        </section>
    )
}

export default CurrentLeadership;