import './subfooter.css';
import React from 'react';
import team from '../../img/team-viewer.png';
import demo from '../../img/demodesk.png';
import urban from '../../img/urban-sport.png';
import loyalty from '../../img/Loyalty.png';

function SubFooter(){
    return(
        <div className="subfooter-component ">
            <div>
                <h3><strong>Get in touch</strong></h3>
            </div>
            <div>
                <p>Want to see how zengrowth can help you and your team?
                    well listen to your story and propose a data-driven growth,
                    plan with channel that fit across your customer journey 
                </p>
                <div className="container-circle">
                    <div className="left-circle">
                    <p className="circle">Predictible lead generation</p>
                    <p className="circle">Rapid marketing Experimentation</p>
                    </div>
                    <div className="right-circle">
                        <p className="circle">Lower Customer acquisition cost</p>
                        <p className="circle">Increase marketing dbi</p>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <p><strong>Trusted growth partner for hyper-growt companies</strong></p>
                <div className="container-image">
                    <div className="inside-image-left">
                        <img src={team}/>
                        <img src={demo}/>
                    </div>
                    <div className="inside-image-right">
                        <img src={urban}/>
                        <img src={loyalty}/>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}


export default SubFooter;