/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Require necessary modules

const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');
const sha256 = require('js-sha256');
const cookieParser = require('cookie-parser');

const SALT = 'delon is awesome';

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


/**
 * === Expense Handlers === *
 */

const getExpense = (request, response) => {
	let something;

	let userId = parseInt(request.cookies['user_id']);	

	let queryString = 'SELECT * FROM expense WHERE EXTRACT(MONTH FROM ''exp_date'') = $1 AND EXTRACT(YEAR FROM ''exp_date'') = $2 AND user_id = $3;'

	let values = [something.month, something.year, userId];

	pool.query(queryString, values, (err, result) => {
		if(err) {
			response.send('Query error: ', err.message);
		}
		else {
			response.render('./expense', {expense: result.rows}); // render with view jsx file
		};
	});
};

const getExpenseTotal = (request, response) => {
	let something;

	let userId = parseInt(request.cookies['user_id']);

	let queryString = 'SELECT COALESCE(SUM(exp_amt), 0) AS exp_total FROM expense WHERE EXTRACT(month FROM ''exp_date'') = $1 AND EXTRACT(year FROM ''exp_date'') = $2 AND user_id = $3;';

	let values = [something.month, something.year, userId];

	pool.query(queryString, values, (err, result) => {
		if(err) {
			response.send('Query error: ', err.message);
		}
		else {
			response.render('./expense', {total: result.rows[0]});
		};
	});
};



/**
 * === Budget Handlers === *
 */


const getBudget = (request, response) => {
	let something;

	let userId = parseInt(request.cookies['user_id']);

	let queryString = 'SELECT COALESCE(budget_amt, 0) FROM budget WHERE EXTRACT(MONTH FROM ''budget_date'') = $1 AND EXTRACT(year FROM ''budget_date'') = $2 AND user_id = $3;'

	let values = [something.month, something.year, userId];

	pool.query(queryString, values, (err, result) => {
		if(err) {
			response.send('Query error: ', err.message);
		}
		else {
			response.render('./budget', {budget: result.rows[0]});
		};
	});
};

const newBudget = (request, response) => {
	let queryString = ''	
}













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

	const values = [body.username, req_password];

	pool.query(queryString, values, (err, result) => {
		if(err) {
			response.send('Query error: ', err.message);
		}
		else{
			let userId = result.rows[0].id
			let currentSessionCookie = sha256(userId + 'logged_in' + SALT);

			response.cookie('logged_in', currentSessionCookie);
			response.cookie('user_id', userId);
			response.redirect('/user/home');
		};
	});
};

const verifyUser = (request, response) => {
	let body = request.body;
	let queryString = 'SELECT FROM usr WHERE username = $1;';

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


/**
 * ===================================
 * Routes
 * ===================================
 */






// ** Budget routes **

app.get('/user/budget', getBudget);
app.post()


// ** User routes **

app.get('/', loginPage);

app.post('/user/login', verifyUser);
app.post('/user/new', createUser);

app.delete('/user/logout', logoutPage);


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