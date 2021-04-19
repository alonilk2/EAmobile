import React, {Component, useState} from 'react';
import history from '../history';
import '../CSS/HomePageCSS.css'
import HomeBack from '../Images/homeback.jpg';
import SupportIcon from '../Images/support_icon.png';
import PhoneRepairIcon from '../Images/phonerepair_icon.png';
import RecoveryIcon from '../Images/recovery_icon.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import InstagramEmbed from 'react-instagram-embed';
import InstaFeed from './InstaFeed';
import Footer from './Footer';

class HomeContainerComponent extends Component 
{
    render()
    {
        return (
            <div className="content-container">
                <div className="first-container">
                    <div className="frame">
                        <div className="fade1"></div>
                        <img src={HomeBack} className="back-img"/>
                    </div>
                    <div className="txt-box" >
                        <div className="left-txtbox">
                        מעבדת שירות לסמארטפונים
                        </div>
                        <div className="row left-txtbox-small">
                        תיקוני לוחות והלחמות, שירות לחנויות ושיחזור מידע
                        </div>    
                    </div>
                </div>
                <div className="sec-container">
                    <div className="img-txt">
                        <img src={SupportIcon} className="second_section_img"/>
                        <div className="text_under_icons">שירות אישי ומקצועי</div>
                    </div>
                    <div className="img-txt">
                        <img src={PhoneRepairIcon} className="second_section_img"/>
                        <div className="text_under_icons">תיקון סמארטפונים דרג ד'</div>
                    </div>
                    <div className="img-txt">
                        <img src={RecoveryIcon} className="second_section_img"/>
                        <div className="text_under_icons">שחזור מידע ממכשירים שניזוקו</div>
                    </div>
                </div>
                <div className="third-container">
                    <div className="row">
                        <div className="col insta-title">
                            Follow Us
                        </div>
                    </div>
                   <InstaFeed />
                </div>
                <Footer />
            </div>
        );
    }

}
export default HomeContainerComponent;