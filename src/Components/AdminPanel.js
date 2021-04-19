import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import history from '../history';
import '../CSS/AdminCSS.css'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import {signin} from '../Actions/AdminActions'
function AdminPanel(username, password)
{
    if(username && password) return signin(username, password)
}
export default AdminPanel;