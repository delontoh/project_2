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
			   		<input className= 'username' type= 'text' placeholder= 'Username'/><br/>
			   		<input className= 'password' type= 'password' placeholder= 'Password'/><br/><br/>
			   		<input className= 'submit' type= 'submit' value= 'Login'/>
			   		<input className= 'submit' type= 'submit' value= 'Create User' formAction= '/user/new'/>
			  	</form>
			 </body>
			</div>
		 </LoginLayout>
		);
	};
};

module.exports = userlogin;