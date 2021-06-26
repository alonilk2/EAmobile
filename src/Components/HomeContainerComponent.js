import React, {Component, useState} from 'react';
import history from '../history';
import '../CSS/HomePageCSS.css'
import SupportIcon from '../Images/support_icon.jpg';
import PhoneRepairIcon from '../Images/phonerepair_icon.jpg';
import RecoveryIcon from '../Images/recovery_icon.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import InstagramEmbed from 'react-instagram-embed';
import InstaFeed from './InstaFeed';
import Footer from './Footer';

class HomeContainerComponent extends Component 
{
        constructor(props)
    {
        super(props);
        this.state = {
            yScroll: 0,
            Slide: 0,
            startDesc: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll);
        if(window.innerWidth > 800) this.setState({startDesc: true})
        
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        console.log(this.state.yScroll)
        if(window.scrollY > 150){
            this.setState({Slide: '0px', startDesc: true});

        } else if(window.scrollY <= 150){
            this.setState({Slide: '0px'});
        }
        this.setState({yScroll: window.scrollY});
    }
    desc = () => {
        if(this.state.startDesc){
            return (
            <div className="preview">
                <div className="firstParagraph">
                    <p className="first-title high">
                    רכושו האמיתי של האדם
                    </p>
                    <p className="first-title lower">
                    הוא זכרונו.
                    </p>
                </div>

                <div className="left-txtbox desc">
                    <p>אנחנו יודעים כמה המידע האישי בפלאפון שלך חשוב.
                    </p>
                    <p className="sowhy">
                    אז למה לוותר עליו?
                    </p>
                </div>
                    <div className="circles">
                        <div className="left-txtbox circle redc">
                        <h1 className="recoverytxt">
                        שחזור<br/> מידע
                        </h1>
                        </div>
                        <div className="left-txtbox circle bluec">
                        <h2 className="recoverytxt">
                        תיקון פלאפונים
                        </h2>
                        </div>
                        <div className="left-txtbox circle greenc">
                        <h2 className="recoverytxt">
                        שירות למעבדות
                        </h2>
                    </div>
                </div>
            </div>
            )
        }
        else {
            return (<div> </div>)
        }
    }
    render()
    {
        return (
            <div className="content-container">
                <div className="first-container">
                    <div className="frame">
                        <div className="fade1"></div>
                    </div>
                    <div className="txt-box" >
                <this.desc />
                    </div>
                </div>
                <div className="sec-container">
                    <div className="img-txt">
                        <img src={SupportIcon} alt="שירות מקצועי" className="second_section_img"/>
                        <h2 className="text_under_icons">שירות אישי ומקצועי</h2>
                        <h3 className="text_under_icons paragraph">לא הצלחנו ? לא שילמתם.</h3>
                        <h3 className="text_under_icons paragraph">אצלנו אין הפתעות. לפני תיקון מכשיר תקבלו דיאגנוסטיקה מקיפה</h3>
                        <h3 className="text_under_icons paragraph"> והסברים בשפה שכל אדם יבין ע"י טכנאי הפלאפונים שלנו</h3>
                    </div>
                    <div className="img-txt">
                        <img src={PhoneRepairIcon} alt="תיקון סמארטפונים" className="second_section_img"/>
                        <h2 className="text_under_icons">תיקון סמארטפונים דרג ד'</h2>
                        <h3 className="text_under_icons paragraph">אייפון ? גלאקסי ? כולם הולכים.</h3>
                        <h3 className="text_under_icons paragraph">תיקוני אייפונים וסמארטפונים אחרים</h3>
                        <h3 className="text_under_icons paragraph">אייפון שנרטב, נזקי מים, שברים ונזקי נפילות</h3>
                    </div>
                    <div className="img-txt">
                        <img src={RecoveryIcon} alt="שחזור מידע" className="second_section_img"/>
                        <h2 className="text_under_icons">שחזור מידע ממכשירים שניזוקו</h2>
                        <h3 className="text_under_icons paragraph">שחזור מידע מאייפון מכל סיבה</h3>
                        <h3 className="text_under_icons paragraph">אייפון נרטב, אייפון נסדק, אייפון נפל</h3>
                        <h3 className="text_under_icons paragraph">לא משנה מה קרה - אל תוותרו על המידע</h3>
                    </div>
                </div>
                <div className="third-container">
                    <div className="row instarow1">
                        <h2 className="col insta-title">
                            Follow 
                        </h2>
                        <h2 className="col insta-title">
                            Us 
                        </h2>
                    </div>
                   <InstaFeed />
                </div>
                <Footer />
            </div>
        );
    }

}
export default HomeContainerComponent;