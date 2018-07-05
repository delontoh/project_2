var React = require('react');

class userlogin extends React.Component {
	render() {
		return(
			<div>
			 <h3>Please Login</h3>
			  <form method= 'POST' action= '/user/login'>
			   <input name= 'username' type= 'text' placeholder= 'Username'/><br/>
			   <input name= 'password' type= 'password' placeholder= 'Password'/><br/><br/>
			   <input name= 'login' type= 'submit' value= 'Login'/><br/>
			   <input name= 'create' type= 'submit' value= 'Create User' formAction= '/user/new'/>
			  </form>
			</div>
		);
	};
};

module.exports = userlogin;