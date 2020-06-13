import  React from 'react';
import './footer.css';

function Footer(){
    return(
        <div className="componente-footer">
                <div className="title"><p className="logo"><strong>Zengrowth</strong></p></div>
                <div className="social-network">
                    <p>Ins</p>
                    <p>Twit</p>
                </div>
                <nav className="menu-footer">
                    <ul>
                        <li>text </li>
                        <li>text </li>
                        <li>text </li>
                        <li>text </li>
                    </ul>
                </nav>
        </div>
    )
}

export default Footer;