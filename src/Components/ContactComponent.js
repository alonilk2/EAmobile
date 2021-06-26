import React, {Component, useState} from 'react';
import { history } from '../history';
import LOGO from '../Images/logo.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import '../CSS/ContactCSS.css'
import Footer from './Footer';
import MenuComponent from './MenuComponent'
import Form from 'react-bootstrap/Form'
import Axios from "axios";
import Alert from 'react-bootstrap/Alert'
import FB from '../Images/fb-big.jpg'
import INSTA from '../Images/insta-big.jpg'
import WHATSAPP from '../Images/whatsapp-big.jpg'
import PHONEICON from '../Images/phone.jpg'
import Spinner from 'react-bootstrap/Spinner'
class ContactComponent extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            Name: "",
            Mail: "",
            Phone: "",
            Content: "",
            show: false,
            loading: false
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    async handleSubmit(event) {
        event.preventDefault();

        try {
            var Name = this.state.Name;
            var Mail = this.state.Mail;
            var Phone = this.state.Phone;
            var Content = this.state.Content;
            this.setState({loading: true})
            var response = await Axios.post("https://eamobileisrael.com/contact", {Name, Mail, Phone, Content}); 
            if(response)
            {
                if(response.data.success)
                    this.setState({show: true, loading: false})
            } 
            else 
                console.log("Error: could not fetch posts list from server.");
        } 
        catch (error) 
        {
            console.log(error);
        }
    }
    render()
    {
        const isLoading = this.state.loading;
        let load;
        if(isLoading)
            load = <Spinner animation="border" variant="primary" />
        return (
            <div className="Container" >
                <div className="head" style={{
                transform: `translate(0, ${this.state.Slide})`,
                transition: 'transform 90ms linear',}}>
                    <div className="row logo">
                        <a href="/" style={{height: '100%'}} ><img className="logo-img" alt="EAMobile שחזור מידע ותיקון סמארטפונים" src={LOGO}  /></a>
                    </div>
                </div>
                <MenuComponent />
                <div className="row contact-form-container">
                    <Alert variant="success" show={this.state.show}>
                        <Alert.Heading>אנו שמחים לשמוע ממך!</Alert.Heading>
                        <p>
                            הודעתך התקבלה בהצלחה,
                            ואנו מבטיחים לחזור אליך בהקדם האפשרי!
                        </p>
                        <hr />
                        <p className="mb-0">
                            צוות EAmobile
                        </p>
                    </Alert>
                    <div className="contact-title"><h1> צור קשר </h1></div>

                    <div className="col-4 left-col divider">
                        <a href="tel:0547629284"><img className="contact-btn" src={PHONEICON} /></a>
                        <a className="icon-link" href="https://www.facebook.com/Eamobileisrael-108820004686438" ><img className="contact-btn" alt="Facebook" src={FB} /></a>
                        <a className="icon-link" href="https://www.instagram.com/eaphonerepairisrael/" ><img className="contact-btn" alt="Instagram" src={INSTA} /></a>
                        <a className="icon-link" href="https://wa.me/0547629284" ><img className="contact-btn" src={WHATSAPP} alt="Whatsapp"/></a>
                    </div>
                    <div className="col contact-container">

                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>שם מלא</Form.Label>
                                <Form.Control type="text" onChange={(e) => this.setState({Name: e.target.value})}/>
                                <br />
                                <Form.Label>כתובת אימייל</Form.Label>
                                <Form.Control type="email" onChange={(e) => this.setState({Mail: e.target.value})}/>
                                <br />
                                <Form.Label>מספר פלאפון</Form.Label>
                                <Form.Control type="text" onChange={(e) => this.setState({Phone: e.target.value})}/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>על מה תרצה לדבר איתנו ?</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={(e) => this.setState({Content: e.target.value})}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                שליחה
                            </Button>
                            {load}
                        </Form>
                    </div>
                </div>
                
                <Footer />
            </div>
        );
    }
}
export default ContactComponent;