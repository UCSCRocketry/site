import '../projects.css';
import './leadership.css'
import background from "../../media/bluebackground.png";
import LeadsCard from "../../components/leads";
import React from "react";


/*import Heli from "../../media/leads/Screenshot 2024-10-12 at 3.11.00 PM.jpg"
import Aaron from "../../media/leads/ich2.png"
import Qingyuan from "../../media/leads/Screenshot 2024-11-18 at 11.35.06 PM.png"
import Marcus from "../../media/leads/IMG_5571.jpg"
import Laura from "../../media/leads/IMG_1754.jpg"
import Khanh from "../../media/leads/IMG_0713.png"*/

import Heli from "../../media/leads/Screenshot 2024-10-12 at 3.11.00 PM.jpg"
import Amber from "../../media/leads/IMG_8848.jpg"
import Julian from "../../media/leads/img_9983.jpg"
import Merrick from "../../media/leads/IMG_7105.jpg"
import Alexander from "../../media/leads/Alexander.png"
import Teo from "../../media/leads/IMG_2201.JPG"
import Sage from "../../media/leads/sage.jpg"
import Kayden from "../../media/leads/IMG_2167.jpg"
import Dayton from "../../media/leads/IMG_1950.jpg"
import Javier from "../../media/leads/IMG_3300_Original.jpg"
import Niv from "../../media/leads/IMG_7479.jpg"
import Max from "../../media/leads/IMG_5425.jpg"
import Dane from "../../media/leads/IMG_7737.jpg"
import Hennessy from "../../media/leads/IMG_4898.jpg"

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

                {/* President: Teodor Langan (moved from Vehicle Systems) */}
                <LeadsCard
                    big={true}
                    name="Teodor Langan"
                    title="President"
                    year="3rd"
                    major="Robotics Engineering"
                    image={Teo}
                    about="Teodor leads the Rocket Team’s strategy, engineering direction, and cross-team coordination."
                />

                {/* Vice President: Alexander Daltchev (also keeps Launch Operations card below) */}
                <LeadsCard
                    big={true}
                    name="Alexander Daltchev"
                    title="Vice President"
                    year="3rd"
                    major="Business Management Economics"
                    image={Alexander}
                    about="Alexander supports org operations, logistics, and execution across teams."
                />

                <hr/>

                <div className="leadsContainer">
                    {/* Lab Safety Officer now Heli (moved from Outreach) */}
                    <LeadsCard
                        big={false}
                        name="Heli Kadakia"
                        title="Lab Safety Officer"
                        year="3rd"
                        major="Computer Science and Computer Engineering"
                        image={Heli}
                    />

                    {/* Director of Internal Affairs now Amber (moved from Recovery) */}
                    <LeadsCard
                        big={false}
                        name="Amber Borjigin"
                        title="Director of Internal Affairs"
                        year="3rd"
                        major="Computer Engineering"
                        image={Amber}
                    />

                    {/* Launch Operations remains Alexander, name spelling corrected */}
                    <LeadsCard
                        big={false}
                        name="Alexander Daltchev"
                        title="Launch Operations"
                        year="3rd"
                        major="Business Management Economics"
                        image={Alexander}
                    />

                    
                    {
                    <LeadsCard
                        big={false}
                        name="Hennessy Soto-Silvas"
                        title="Outreach"
                        year="3rd"
                        major="Robotics"
                        image={Hennessy}
                    />
                    }
                </div>

                <hr/>
                <h5 className="H5Gray">Competition Leads</h5>
                <div className="leadsContainer">
                    {/* Vehicle Systems (Teodor) removed since Teodor is now President */}
                    { <LeadsCard big={false} name="Dayton Nguyen" title="Vehicle Systems" year="2nd" major="Robotics Engineering" image={Dayton}/> }

                    {/* Recovery (Amber) moved to Director of Internal Affairs above */}
                    {<LeadsCard big={false} name="Javier Valencia" title="Recovery" year="2nd" major="Applied Mathematics" image={Javier}/> }

                    <LeadsCard big={false} name="Nivedita Kamath" title="Payload" year="3rd"
                               major="Robotics" image={Niv}/>

                    <LeadsCard big={false} name="Julian Barberra" title="Avionics Electrical" year="3rd"
                               major="Electrical Engineering" image={Julian}/>
                    <LeadsCard big={false} name="Merrick Fort" title="Avionics Software" year="4th"
                               major="Computer Science" image={Merrick}/>
                    <LeadsCard big={false} name="Sage Silberman" title="Ground Control Systems" year="3rd"
                               major="Computer Science" image={Sage}/>
                </div>

                <hr/>
                <h5 className="H5Gray">Project Leads</h5>
                <div className="leadsContainer">
                    <LeadsCard big={false} name="Kayden Ozdemier" title="Thrust Vector Control" year="2nd"
                               major="Astrophysics" image={Kayden}/>
                    <LeadsCard big={false} name="Dayton Nugyen" title="ADAS" 
                            year="2nd" major="Robotics Engineering" image={Dayton}/> 
                    <LeadsCard big={false} name="Julian Barberra" title="ADAS" year="3rd"
                               major="Electrical Engineering" image={Julian}/>
                    <LeadsCard big={false} name="Maximilian Miler" title="ADAS" year="3rd"
                               major="Computer Engineering" image={Max}/>  
                    <LeadsCard
                        big={false} name="Amber Borjigin" title="Vison Project" year="3rd"
                        major="Computer Engineering" image={Amber}
                    />
                    <LeadsCard
                        big={false} name="Dane Pearson" title="Vison Project" year="3rd"
                        major="Computer Science" image={Dane}
                    />
                             
                </div>
            </div>
        </section>
    )
}

export default CurrentLeadership;
