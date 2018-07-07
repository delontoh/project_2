var React = require('react');

class ExpenseLayout extends React.Component {
	render() {
		return(
			<html>
				<head>

					<link rel="stylesheet" type="text/css" href="./css/expense.css" />
					<link href="https://fonts.googleapis.com/css?family=Wendy+One" rel="stylesheet" />

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