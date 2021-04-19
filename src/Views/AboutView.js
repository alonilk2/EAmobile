import React, {Component, useState} from 'react';
import { history } from '../history';
import LOGO from '../Images/logo.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../CSS/ContactCSS.css'
import Footer from '../Components/Footer';
import MenuComponent from '../Components/MenuComponent'


class AboutView extends Component 
{
    render()
    {
        return (
            
            <div className="Container" >
                <div className="head">
                    <div className="row logo">
                        <a href="/" style={{height: '100%'}} ><img className="logo-img" src={LOGO}  /></a>
                    </div>
                </div>
                <MenuComponent />
                <div className="about-container">
                    <div className="contact-title"><h1> אודותינו </h1></div>
                    <p className="cont-ttl"><strong>מי אנחנו?<br /></strong>או יותר נכון ״מי אתה?״ איתן אברך, נעים מאוד 😄</p>
                    <p className="cont-ttl"><strong>מה הוא השירות העיקרי שלי?</strong><br />אני מתעסק בשיחזור מידע מאייפונים מושבתים.</p>
                    <p className="cont-ttl"><strong>אילו שירותים נוספים אני מציע?</strong><br />תיקון כל הרכיבים והמעגלים החשמליים באייפונים, תיקוני קורוזיה וקצרים.</p>
                    <p className="cont-ttl"><strong> כמה זמן אני בתחום?</strong><br />אני בתחום הסלולר מאז 2011.</p>
                    <p className="cont-ttl"><strong>מדוע לבחור דווקא בי?</strong><br />המידע הרגיש שלכם זקוק לידיים מקצועיות. ידיים לא מקצועיות מורידות את אחוזי ההצלחה בשיחזור המידע שלכם ל0%. הניסיון והאהבה שלי לעבודה שלי בפרט ולתחום הסלולר באופן כללי מאפשרים לי להתחייב על אחוזי הצלחה גבוהים בשיחזור המידע שלכם! אם אף אחד לא הצליח, תנו לי הזדמנות להוכיח לכם אחרת. בנוסף אני מאמין בשיטת הלא הצלחתי - לא שילמתם. אין עמלות או עלויות במידה ולא ניתן לשחזר את המידע שלכם.</p>

                </div>
                <Footer />
            </div>
        );
    }
}
export default AboutView;