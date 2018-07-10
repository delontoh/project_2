-- Create users table --
CREATE TABLE IF NOT EXISTS usr (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT
);



-- Create expense table --
CREATE TABLE IF NOT EXISTS expense (
	id SERIAL PRIMARY KEY,
	exp_date DATE NOT NULL DEFAULT CURRENT_DATE,
	exp_item TEXT,
	exp_amt NUMERIC(15, 2),
	user_id INTEGER
);

