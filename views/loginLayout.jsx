var React = require('react');

class LoginLayout extends React.Component {
	render() {
		return(
			<html>
				<head>
					<link href="https://fonts.googleapis.com/css?family=Wendy+One" rel="stylesheet" />
					<link rel="stylesheet" type="text/css" href="/login.css" />
				</head>
				<body>
					{this.props.children}
				</body>
			</html>
		);
	};
};

module.exports = LoginLayout;