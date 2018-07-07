var React = require('react');

class CalendarLayout extends React.Component {
	render() {
		return(
			<html>
				<head>
					<link href="https://fonts.googleapis.com/css?family=Wendy+One" rel="stylesheet" />
					<link rel="stylesheet" type="text/css" href="./css/expense.css" />
				</head>
				<body>
					{this.props.children}
				</body>
			</html>
		)
	}
}

module.exports = CalendarLayout;