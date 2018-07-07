var React = require('react');

class ExpenseLayout extends React.Component {
	render() {
		return(
			<html>
				<head>
					<link href="https://fonts.googleapis.com/css?family=Wendy+One" rel="stylesheet" />
					<link rel="stylesheet" type="text/css" href="./css/expense.css" />
					<title>BudgetLah!</title>
				</head>
				<body>
					{this.props.children}
				</body>
			</html>
		)
	}
}

module.exports = ExpenseLayout;