var React = require('react');

class loginLayout extends React.Component {
	render() {
		return(
			<html>
				<head>
					{/*<link rel= 'stylesheet' type= 'text/css' href= './style.css'>*/}
					<title>BudgetLah!</title>
				</head>
				<body>
					{this.props.children}
				</body>
			</html>
		)
	}
}

module.exports = loginLayout;