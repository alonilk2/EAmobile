import React, {useEffect, useState} from 'react';

import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
//import NavBar from '../Components/NavbarComponent';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../CSS/AdminCSS.css'
import LOGO from '../Images/logo.png';
import {signin, updateposts} from '../Actions/AdminActions'
import Cookie from 'js-cookie';
import jwt_decode from "jwt-decode";
function AdminView(props)
{
	const [Username, setUsername] = useState("");
	const [Password, setPassword] = useState("");
	const [post1, setPostOne] = useState("");
	const [post2, setPostTwo] = useState("");
	const [post3, setPostThree] = useState("");

	const dispatch = useDispatch();
	var token = Cookie.get('userInstance');
	useEffect(() => {
		token = Cookie.get('userInstance');
		if(token) checkJWTexpired(token);
	});
	const checkJWTexpired = (token) => {
		var decoded = jwt_decode(token);
		if (Date.now() >= decoded.exp * 1000){
			token = null
			Cookie.remove('userInstance')
			return true
		}
		return false
	}
	const login = (event) => {
		event.preventDefault();
		dispatch(signin(Username, Password))
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		let jsonData = {
			"post1": post1,
			"post2": post2,
			"post3": post3,
			"token": token.substring(1, token.length-1)
		}
		dispatch(updateposts(jsonData))
	}
	if(token){
		return (	//Admin MAIN panel - token saved
			<div className="Container-admin">
				<div className="row logo">
					<img className="logo-img" src={LOGO}  />
				</div>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="formBasicEmail">
						<div className="row">
							<div className="col instblock">
								<Form.Control size="text" type="text" placeholder="Enter Instagram Post 1 URL" onChange={(e)=>setPostOne(e.target.value)}/>
							</div>
							<div className="col instblock">
								<Form.Control size="text" type="text" placeholder="Enter Instagram Post 2 URL" onChange={(e)=>setPostTwo(e.target.value)}/>
							</div>
							<div className="col instblock">
								<Form.Control size="text" type="text" placeholder="Enter Instagram Post 3 URL" onChange={(e)=>setPostThree(e.target.value)}/>
							</div>
						</div>
					</Form.Group>
					<div className="row">
						<Button variant="primary" type="submit">
							Save
						</Button>
						כל שינוי בתיבות הטקסט יגרום לשמירת הטקסט ככתובת פוסט.
						אם אחד הפוסטים נעלמים אחרי שמירה - כדאי לשמור את כל שלושת הפוסטים ביחד, לא 1 ולא 2
					</div>
				</Form>
			</div>
		)
	} else {
		return (	//Admin Login Panel - no token
			<div className="Container-admin">
				<div className="row logo">
					<img className="logo-img" src={LOGO}  />
				</div>
				<Form onSubmit={login}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Username</Form.Label>
						<Form.Control onChange={(e)=>setUsername(e.target.value)} placeholder="Enter email" />
						<Form.Text className="text-muted">
						</Form.Text>
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Login
					</Button>
				</Form>
			</div>
		)
	}


}
export default AdminView;