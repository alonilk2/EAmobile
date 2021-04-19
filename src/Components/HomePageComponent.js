import React, {Component, useState} from 'react';
import history from '../history';
import '../CSS/HomePageCSS.css'
import LOGO from '../Images/logo.png';
import HomeBack from '../Images/homeback.jpg';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import HomeContainer from './HomeContainerComponent';
import MenuComponent from './MenuComponent'

class HomePageComponent extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            yScroll: 0,
            Slide: 0,
            logoHidden: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        console.log(this.state.yScroll)
        if(window.scrollY > 200){
            this.setState({Slide: '-300px', logoHidden: true});
        } else if(window.scrollY <= 200){
            this.setState({Slide: '0px', logoHidden: false});
        }
        this.setState({yScroll: window.scrollY});
    }
    navBar = () => {
        if(this.state.logoHidden){
            return (
                <div className="nav-collapsed">
                    <MenuComponent />
                </div>
            )
        }
        else {
            return (
                <div className="nav">
                    <MenuComponent />
                </div>
            )
        }
    }
    render()
    {
        return (
            <div className="Container" >
                <div className="head">
                    <div className="row logo">
                        <a href="/" style={{height: '100%'}} ><img className="logo-img" src={LOGO}  /></a>
                    </div>
                </div>
                <this.navBar />
                <div className="row" style={{transition: 'transform 90ms linear',position: 'absolute', width: '100%'}}>
                    <HomeContainer className="content-container"/>
                </div>
                <div className="row">
                    <div className="foot">

                    </div>
                </div>
            </div>
        );
    }

}
export default HomePageComponent;