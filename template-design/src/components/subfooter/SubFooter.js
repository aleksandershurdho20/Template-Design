import './subfooter.css';
import React from 'react';
import team from '../../img/team-viewer.png';
import demo from '../../img/demodesk.png';
import urban from '../../img/urban-sport.png';
import loyalty from '../../img/Loyalty.png';

const SubFooter = props =>{
    const {informationOne,informationTwo,informationThree,title,informationFour,clientTitle}=props;
    return(
        <div className="subfooter-component ">
            <div>
                <h3><strong>{title}</strong></h3>
            </div>
            <div>
                <p>{props.description}</p>
                
                <div className="container-circle">
                    <div className="left-circle">
                    <p className="circle">{informationOne}</p>
                    <p className="circle">{informationTwo}</p>
                    </div>
                    <div className="right-circle">
                        <p className="circle">{informationThree}</p>
                        <p className="circle">{informationFour}</p>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <p><strong>{clientTitle}</strong></p>
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
            <div className="right-half"></div>
        </div>
    );
}


export default SubFooter;