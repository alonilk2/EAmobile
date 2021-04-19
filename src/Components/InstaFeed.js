import React, {Component, useState} from 'react';
import history from '../history';
import {useDispatch, useSelector} from 'react-redux';
import '../CSS/HomePageCSS.css'
import Axios from 'axios';
import InstagramEmbed from 'react-instagram-embed';

class InstaFeed extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {posts:[]};
    }
    async componentWillMount() {
        this.postList = this.postList.bind(this);
        try {
            var posts = await Axios.post("http://eamobileisrael.com/getFeed"); 

            if(posts.data)
            {
                this.setState({posts: posts.data});
                console.log(this.state.posts[0].url);
            } 
            else 
                console.log("Error: could not fetch posts list from server.");
        } 
        catch (error) 
        {
            console.log(error);
        }
    }
    
    postList = () => 
    {
        if(this.state.posts) 
        {    
            const list = this.state.posts.map((post) => 
                <div className="col insta">
                    <InstagramEmbed
                        url={post.url}
                        clientAccessToken='509431357132312|b27a2d88f0f6ccbf9063868304dd9bef'
                        maxWidth={320}
                        hideCaption={false}
                        containerTagName='instablock'
                        protocol=''
                        injectScript
                        onLoading={() => {}}
                        onSuccess={() => {}}
                        onAfterRender={() => {}}
                        onFailure={() => {}}
                    />
                </div>  
            )
            console.log(list)
            return (list);
        }
        else console.log("ba")
    }
    
    
    render()
    {
        return (
            <div className="row instarow">
                {this.postList()}
            </div>
        );
    }

}
export default InstaFeed;