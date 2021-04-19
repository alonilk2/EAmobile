import React, {Component} from 'react';
import '../CSS/HomePageCSS.css'
import {Link} from 'react-router-dom';
//import NavBar from '../Components/NavbarComponent';
import HomePageComp from '../Components/HomePageComponent';

class HomePageView extends Component 
{
	render() 
    {
		return (
			<div>
				<HomePageComp />
			</div>
		)
	}
}
export default HomePageView;