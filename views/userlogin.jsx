var React = require('react');
var LoginLayout = require('./loginLayout');

class userlogin extends React.Component {
	render() {
		return(
		 <LoginLayout>	
			<div className= 'loginContainer'>
			 <body>
			 	<h1>SaveLah!</h1>
			 	<h3>User Login</h3>
			  	<form method= 'POST' action= '/user/login'>
			   		<input name='username' type= 'text' placeholder= 'Username' required /><br/>
			   		<input name='password' type= 'password' placeholder= 'Password' required /><br/><br/>
			   		<input className= 'submit' name= 'login' type= 'submit' value= 'Login'/>
			   		<input className= 'submit' name= 'create' type= 'submit' value= 'Create User' formAction= '/user/new'/>
			  	</form>
			  	<footer className= 'version'>Version 1.0</footer>
 			 </body>
			</div>
		 </LoginLayout>
		);
	};
};

module.exports = userlogin;