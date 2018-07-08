/**
 * === Total Expense Handler === *
 */


const getReport = async (request, response) => {
	let monthId = 7; /*request.params['month'];*/

	let userId = 1;//parseInt(request.cookies['user_id']);

	let queryExpenseTotal = 'SELECT COALESCE( SUM(exp_amt), 0) AS exp_total FROM expense WHERE user_id = 1 AND exp_date BETWEEN ' + dateObj['7'];

	let queryBudget = 'SELECT COALESCE(budget_amt, 0) FROM budget WHERE user_id = $1 AND budget_date BETWEEN ' + dateObj['7'];

	let values = [monthId, userId];

	let resultArray = [];

	let errorArray = [];
		/*let budgetReport = await pool.query(queryBudget, values);
		resultArray.push(budgetReport);*/	

	try {
		let expenseReport = await pool.query(queryExpenseTotal, values);
		console.log(expenseReport);
		resultArray.push(expenseReport);
		console.log(resultArray);

	} catch(err1) {
		errorArray.push(err1);
	};

	if(errorArray.length === 0) {
		console.log('query success!');
		console.log(resultArray);
	};
};

getReport();



/**
 * === Budget Handlers === *
 */

const getBudget = (request, response) => {		// GET budget from db if Budget exist. This view will have an 'Edit' button.
	let somedate;
	let userId = parseInt(request.cookies['user_id']);
	let queryString = 'SELECT COALESCE(budget_amt, 0) FROM budget WHERE EXTRACT(MONTH FROM ''budget_date'') = $1 AND EXTRACT(year FROM ''budget_date'') = $2 AND user_id = $3;'
	let values = [something.month, something.year, userId];
	pool.query(queryString, values, (err, result) => {
		if(err) {
			response.send('Query error: ', err.message);
		}
		else {
			response.render('./budget', {getBudget: result.rows[0]});	// return result as OBJECT KEY-- budget
		};
	});
};


const newBudget = (request, response) => {		// GET budget form if Budget not yet created. This will have a New Budget view with 'save' button.
	response.render('./newbudget');  
};


const postBudget = (request, response) => {		// once 'save' is clicked and submitted, redirect to getBudget route.
	let body = request.body;

	let userId = parseInt(request.cookies['user_id']);

	let queryString = 'INSERT INTO budget(budget_amt, user_id) VALUES ($1, $2) RETURNING *;';

	let values = [body['budget_amt'], userId];

	pool.query(queryString, values, (err, result) => {
		if(err) {
			response.send('Query error: ', err.message);
		}
		else {
			response.redirect('/user/budget')  // once 'save' is clicked and submitted, redirect to getBudget route.
		};
	});
};	


const editBudget = (request, response) => {		// render Edit form view once 'Edit' button is clicked.
	let somedate;

	let userId = parseInt(request.cookies['user_id']);

	let queryString = 'SELECT budget_amt FROM budget WHERE EXTRACT(MONTH FROM ''budget_date'') = $1 AND EXTRACT(YEAR FROM ''budget_date'') = $2 AND user_id = $3;'

	let values = [somedate.month, somedate.year, userId];

	pool.query(queryString, values, (err, result) => {
		if(err) {
			response.send('Query error: ', err.message);
		}
		else {
			response.render('./editbudget', {editBudget: result.rows[0]});	
		};
	});
};

const putBudget = (request, response) => {		// update budget_amt base on date and user_id selected in edit form above.
	let body = request.body;

	let userId = parseInt(request.cookies['user_id']);

	let queryString = 'UPDATE budget SET budget_amt = $1 WHERE user_id = $2;';

	let values = [body['budget_amt', userId]];

	pool.query(queryString, values, (err, result) => {
		if(err) {
			console.error('Query error: ', err.message);
		}
		else {
			response.redirect('/user/budget'); // once 'save' is clicked and submitted, redirect to getBudget route.
		};
	});
};


// ** Budget routes **

app.get('/user/budget/:month', getBudget);

app.get('/user/budget/new', newBudget);
app.post('/user/budget/post', postBudget);

app.get('/user/budget/edit/:month', editBudget);
app.put('/user/budget/put', putBudget);
