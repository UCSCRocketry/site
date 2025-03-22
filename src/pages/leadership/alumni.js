import '../projects.css';
import './leadership.css'
import background from "../../media/bluebackground.png";
import LeadsCard from "../../components/leads";
import React from "react";

import Qingyuan from "../../media/leads/Screenshot 2024-11-18 at 11.35.06 PM.png"
import Khanh from "../../media/leads/IMG_0713.png"
import Laura from "../../media/leads/IMG_1754.jpg"
import Marcus from "../../media/leads/IMG_5571.jpg"

function Alumni() {
    return (
        <section>
            <section className="topImage">
                <img src={background} className="backgroundImage"/>
                <section className="pageHeadlineContainer">
                    <h2>Alumni</h2>
                </section>
            </section>
            <div className="contentContainer">
                    <h4>The UC Santa Cruz Rocket Team deeply values the dedication and achievements of our past members and leaders. Their contributions have laid the foundation for our continued success, inspiring new generations of engineers and innovators. Each year, we proudly pass the torch, carrying forward their legacy and pushing the boundaries of rocketry. With every launch, we reach new heights, driven by the knowledge, passion, and perseverance of those who came before us.</h4>                
                    {/* <div className="leadsContainer">
                    <LeadsCard big={false} name="Marcus Chan" title="Lab Saftey Officer" year="2025"
                               major="Computer Engineering" image={Marcus}/>
                    <LeadsCard big={false} name="Laura Ortiz" title="Payload" year="2025"
                               major="Robotics Engineering" image={Laura}/>
                    <LeadsCard big={false} name="Marcus Chan" title="Lab Saftey Officer" year="2025"
                               major="Computer Engineering" image={Marcus}/>
                    <LeadsCard big={false} name="Laura Ortiz" title="Payload" year="2025"
                               major="Robotics Engineering" image={Laura}/>
                </div> */}
            </div>
        </section>
    )
}

export default Alumni;