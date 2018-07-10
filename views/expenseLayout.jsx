var React = require('react');

class ExpenseLayout extends React.Component {
	render() {
		return(
			<html>
				<head>
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous"/>	
					<link href="https://fonts.googleapis.com/css?family=Wendy+One" rel="stylesheet" />
					<link rel="stylesheet" type="text/css" href= "/expense.css" />
				</head>
				<body>
					{this.props.children}
				</body>
			</html>
		)
	}
}

module.exports = ExpenseLayout;