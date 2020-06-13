import './header.css';
import React, {Component} from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
        this.mobileNav = React.createRef();
        this.showNav = this.showNav.bind(this);
    }

    showNav(){
        if(this.state.show == false){
         
            this.mobileNav.current.style.transform ="translateX(-30%)"
            this.setState({
                show: true
            })
        }else{
           
            this.mobileNav.current.style.transform ="translateX(100%)"
            this.setState({
                show: false
            })
        }
        
    }

    render(){
        return(
            <div className="header-component">
                <div className="logo">
                    <p>Zengrowtch</p>
                </div>
                <div className="container-nav">
                    <nav className="nav" ref={this.mobileNav}> 
                        <ul>
                            <li>Services</li>
                            <li>About</li>
                            <li>Blog</li>
                            <li className="button">Started</li>
                            <li>icon</li>
                        </ul>
                    </nav>
                </div>
                <div className="mobile-menu">
                    <div className="bars-menu" onClick={this.showNav}>
                        <span className="line-1"></span>
                        <span className="line-2"></span>
                        <span className="line-3"></span>
                    </div>
                    <nav className="mobile-nav" ref={this.mobileNav}> 
                        <ul>
                            <li>Services</li>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Get Started</li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}


export default Header;