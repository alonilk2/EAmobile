import React, {Component, useState} from 'react';
import history from '../history';
import '../CSS/HomePageCSS.css'
import insta from '../Images/insta.png'
import whatsapp from '../Images/whatsapp.png'
import fb from '../Images/fb.png'
import abdev from '../Images/abdev.png'
class Footer extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        return (
            <div className="foot">
                <div className="row foot-header">
                    <div className="col sitemap-container">
                        <h5>מפת האתר</h5>
                        <a className="foot-link" href="/">דף הבית</a>
                        <a className="foot-link" href="/about">אודותינו</a>
                        <a className="foot-link" href="https://www.instagram.com/eaphonerepairisrael/">תיק עבודות</a>
                        <a className="foot-link" href="/contactus">צור קשר</a>
                    </div>
                    <div className="col contact-home">
                        <a className="icon-link" href="https://www.instagram.com/eaphonerepairisrael/" ><img src={insta} alt="instagram" className="contact-icon"/></a>
                        <a className="icon-link" href="https://wa.me/0547629284" ><img src={whatsapp} alt="whatsapp" className="contact-icon"/></a>
                        <a className="icon-link" href="https://www.facebook.com/Eamobileisrael-108820004686438" ><img src={fb} alt="facebook" className="contact-icon1"/></a>
                    </div>
                </div>
                <div className="row copyright_txt">
                        כל הזכויות שמורות © EAmobile 2011
                </div>
                <div className="row">
                    <a className="abdev" href="https://github.com/alonilk2" ><img src={abdev} alt="ABdev" className="abdev" /></a>
                </div>
            </div>
        );
    }

}
export default Footer;