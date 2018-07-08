/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Require necessary modules

const SALT = 'delon is awesome';
const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');
const sha256 = require('js-sha256');
const cookieParser = require('cookie-parser');

// Initialise Postgres client

const config = {
	user: 'delontoh89',
	host: '127.0.0.1',
	database: 'budget_app',
	port: 5432,
};

const pool = new pg.Pool(config);

pool.on('error', function (err) {
  console.log('Idle client error', err.message, err.stack);
});

// Initialise express app
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(cookieParser());

// Use files in public folder
app.use(express.static(__dirname + '/public'));

// Set react-views to be default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);


/**
 * ===================================
 * Route Handler Functions
 * ===================================
 */

const dateObj = {
	1: "'2018-01-01' AND '2018-01-31';",
	2: "'2018-02-01' AND '2018-02-28';",
	3: "'2018-03-01' AND '2018-03-31';",
	4: "'2018-04-01' AND '2018-04-30';",
	5: "'2018-05-01' AND '2018-05-31';",
	6: "'2018-06-01' AND '2018-06-30';",
	7: "'2018-07-01' AND '2018-07-31';",
	8: "'2018-08-01' AND '2018-08-31';",
	9: "'2018-09-01' AND '2018-09-30';",
	10: "'2018-10-01' AND '2018-10-31';",
	11: "'2018-11-01' AND '2018-11-30';",
	12: "'2018-12-01' AND '2018-12-30';"
};

/**
 * === Expense Handlers === *
 */

// const getExpense = (request, response) => {

// 	let monthId = parseInt(request.params['month']);

// 	let userId = parseInt(request.cookies['user_id']);

// 	let queryString = "SELECT exp_date, EXTRACT(month FROM exp_date), exp_item, exp_amt FROM expense WHERE user_id = $1 AND exp_date BETWEEN " + dateObj[monthId]; 

// 	let values = [userId];

// 	pool.query(queryString, values, (err, result) => {
// 		if(err) {
// 			console.error('Query error: ', err.message);
// 			response.sendStatus(500);
// 		}
// 		else {
// 			response.render('./expenselist', {getExpense: result.rows}); // render with Expense view
// 		};
// 	});
// };


// const newExpense = (request, response) => {
// 	response.render('./newexpense');
// }

// const postExpense = (request, response) => {
// 	let body = request.body;

// 	let userId = parseInt(request.cookies['user_id']);

// 	let queryString = 'INSERT INTO expense (exp_item, exp_amt, user_id) VALUES ($1, $2, $3);';

// 	let values = [body['exp_item'], body['exp_amt'], userId];

// 	pool.query(queryString, values, (err, result) => {
// 		if(err) {
// 			console.error('Query error: ', err.message);
// 			response.sendStatus(500);
// 		}
// 		else {
// 			response.redirect('/calendar');		// redirect to calendar page.
// 		};
// 	});
// };

// const editExpense = (request, response) => {	// render Edit form for Expense base on date and userId 
// 	let monthId = parseInt(request.params['month']);

// 	let userId = parseInt(request.cookies['user_id']);

// 	let queryString = "SELECT exp_date, EXTRACT(month FROM exp_date), exp_item, exp_amt FROM expense WHERE user_id = $1 AND exp_date BETWEEN " + dateObj[monthId];

// 	let values = [userId];

// 	pool.query(queryString, values, (err, result) => {
// 		if(err) {
// 			console.error('Query error: ', err.message);
// 			response.sendStatus(500);
// 		}
// 		else {
// 			response.render('./editexpense', {editExpense: result.rows});	
// 		};
// 	});
// };

// const putExpense = (request, response) => {	
// 	let body = request.body;

// 	let userId = parseInt(request.cookies['user_id']);

// 	let queryString = 'UPDATE expense SET exp_date = $1, exp_item = $2, exp_amt = $3 WHERE user_id = $4;';

// 	let values = [body['exp_amt'], body['exp_item'], body['exp_amt'], userId];

// 	pool.query(queryString, values, (err, result) => {
// 		if(err) {
// 			console.error('Query error: ', err.message);
// 			response.sendStatus(500);
// 		}
// 		else {
// 			response.redirect('/calendar');	// redirect to calendar page
// 		};
// 	});
// };

// const deleteExpense = (request, response) => {
// 	let month = request.params['month']; 

// 	let userId = parseInt(request.cookies['user_id']);

// 	let queryString = 'DELETE * FROM expense WHERE user_id = $1 AND exp_date BETWEEN ' + dateObj['month'];

// 	let values = [userId];

// 	pool.query(queryString, values, (err, result) => {
// 		if(err) {
// 			console.error('Query error: ', err.message);
// 			response.sendStatus(500);
// 		}
// 		else {
// 			response.redirect('/calendar'); // redirect to calendar page
// 		};
// 	});
// };


/**
 * === User Account Handlers === *
 */

const loginPage = (request, response) => {
	response.render('userlogin');
};

const createUser = (request, response) => {
	let body = request.body;
	let req_password = sha256(body['password']);
	let queryString = 'INSERT INTO usr (username, password) VALUES ($1, $2) RETURNING *;';

	const values = [body['username'], req_password];

	pool.query(queryString, values, (err, result) => {
		if(err) {
			response.send('Query error: ', err.message);
		}
		else{
			let userId = result.rows[0].id
			let currentSessionCookie = sha256(userId + 'logged_in' + SALT);

			response.cookie('logged_in', currentSessionCookie);
			response.cookie('user_id', userId);
			response.redirect('/calendar');
		};
	});
};

const verifyUser = (request, response) => {
	let body = request.body;
	let queryString = 'SELECT * FROM usr WHERE username = $1;';

	const values = [body['username']];	// retrieve user details using username entered

	pool.query(queryString, values, (err, result) => {
		if(err) {
			response.send('Query error: ' + err.message);
		}
		else {
			const queryResult = result.rows;
			const userId = queryResult[0].id;

			if(queryResult < 1) {
				response.status(401);
				response.send('Username does not exist');	// error if username not found
			}
			else {
				let db_password = queryResult[0].password;
				let req_password = sha256(body['password']);

				if(db_password === req_password) {
					let currentSessionCookie = sha256(userId + 'logged_in' + SALT);
					response.cookie('logged_in', currentSessionCookie);
					response.cookie('user_id', userId);

					response.redirect('/calendar');	// redirect to calendar's page.
				}
				else {
					response.status(401);
					response.send('Wrong Password!');
				};
			};
		};
	});
};


const logoutPage = (request, response) => {
	response.clearCookie('user_id');
	response.clearCookie('logged_in');
	response.send('You are safely logged out');
};

// * Calendar page handler

const getCalendar = (request, response) => {
	response.render('./calendarlist');
};


/**
 * ===================================
 * Routes
 * ===================================
 */

// ** Expense routes **

// app.get('/user/totalexpense/:month', getExpenseTotal);

// app.get('/user/expense/:month', getExpense);

// app.get('/user/expense/:month/new', newExpense);
// app.post('/user/expense/post', postExpense);

// app.get('/user/expense/:month/edit', editExpense);
// app.post('/user/expense/put', putExpense);

// app.delete('/user/expense/delete', deleteExpense);


// ** User routes **

app.get('/', loginPage);

app.post('/user/login', verifyUser);
app.post('/user/new', createUser);

app.delete('/user/logout', logoutPage);


// * Calendar route **

app.get('/calendar', getCalendar);


 /**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */

const server = app.listen(3000, () => console.log('~~~ Ahoy we go from the port of 3000!!!'));

// Handles CTRL-C shutdown
function shutDown() {
  console.log('Recalling all ships to harbour...');
  server.close(() => {
    console.log('... all ships returned...');
    pool.end(() => {
      console.log('... all loot turned in!');
      process.exit(0);
    });
  });
};

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);