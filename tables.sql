-- Create users table --
CREATE TABLE IF NOT EXISTS usr (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT
);


-- Create income table --
CREATE TABLE IF NOT EXISTS income (
	id SERIAL PRIMARY KEY,
	inc_date DATE NOT NULL DEFAULT CURRENT_DATE,
	inc_item TEXT,
	inc_amt NUMERIC(15, 2),
	user_id INTEGER
);

-- Create expense table --
CREATE TABLE IF NOT EXISTS expense (
	id SERIAL PRIMARY KEY,
	exp_date DATE NOT NULL DEFAULT CURRENT_DATE,
	exp_item TEXT,
	exp_amt NUMERIC(15, 2),
	user_id INTEGER
);

-- Create salary and budget table --
CREATE TABLE IF NOT EXISTS budget (
	id SERIAL PRIMARY KEY,
	budget_date DATE NOT NULL DEFAULT CURRENT_DATE,
	budget_amt NUMERIC(15, 2),
	user_id INTEGER
);