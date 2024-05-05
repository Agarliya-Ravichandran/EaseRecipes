import React, {useState, useEffect} from "react";
import loginImg from "../../login.svg";
import "./style.scss";
import Dashboard from "../../dashboard";
import Profile from "../userPage/profile";
import { withRouter, Redirect, Route, Link } from 'react-router-dom';
import HeroSection, {IsLoggedIn, Username} from '../../../../components/HeroSection.js';


var login = localStorage.getItem('loggedIn');
var username = localStorage.getItem('username');

function Login()
{
	const [value, setValue] = useState({auth:"true"});
	const [isLogin, setLogin] = useState({auth:login});
	const [userName, setUserName] = useState(username);

	var json;
	async function handleSubmit(event)
	{
		const temp = event.target[0].value;
		const url = '/login'
		console.log("making request")
		console.log(event.target[0].value)
		const response = await fetch('/login', {
		  method: "POST",
		  headers: {
		    'Content-type': 'application/json'
		  },
		  body: JSON.stringify({ "username": event.target[0].value, "password": event.target[1].value }),
		});

    	json = await response.json();
		console.log(json);

		setValue(json);
		setLogin(json);
		setUserName(temp);
		event.preventDefault();
	}

	useEffect(() => {
		login = isLogin.auth;
	},[isLogin])

	useEffect(() => {
		username = userName;
	}, [userName])

	function loginPage(){
		return (
		<div className="base-container4" style={{height:"40em"}}>
	      <div className="header4">Login</div>
		  <form onSubmit={handleSubmit} action="javascript:void(0);" method="POST">

			  <div className="content4">
				<div className="image4">
				  <img src={loginImg} alt="img" />
				</div>
				<div className="form4">
				  <div className="form-group4">
					<label className="label4" htmlFor="username">Username</label>
					<input className="input4" type="text" name="username" placeholder="username" required/>
				  </div>
				  <div className="form-group4">
					<label className="label4" htmlFor="password">Password</label>
					<input className="input4" type="password" name="password" placeholder="password" required/>
				  </div>
				</div>
				<div>
					{value.auth === "false" ? <p style={{color:"red"}}>Invalid username or password</p> : null}
				</div>
			  </div>
			  <div className="footer">
	  		  <button className="btn btn-secondary" type="submit">Login</button>
	  			{/*<button type="button" className="btn">
	  			  Login
	  			</button>*/}
			   </div>
		  </form>
	    </div>)
	}

	function redirect()
	{
		if(login==="true")
		{
			window.open("/","_self");
		}
	}

	function updateStorage()
	{
		localStorage.setItem("loggedIn", login);
		localStorage.setItem("username", userName);
	}

	return (
		<div>
			<div>{loginPage()}</div>
			<div>{updateStorage()}</div>
			<div>{redirect()}</div>
		</div>

	);
}

export default Login;

