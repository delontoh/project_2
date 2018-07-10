const myFunction = async function(params) {

	try {
		let result = await pool.query(queryString, values);
		//do something with result
	}

	catch (err) {  // if error => try catch after try's }
		//do something with error
	}
}




SELECT DISTINCT * FROM budget INNER JOIN expense ON budget.user_id = expense.user_id WHERE budget.user_id = 1 AND budget.budget_date BETWEEN '2018-07-01' AND '2018-07-31' AND expense.exp_date BETWEEN '2018-07-01' AND '2018-07-31';