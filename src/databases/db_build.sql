BEGIN;

DROP TABLE IF EXISTS users, feedback CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL,
  password TEXT NOT NULL
);

INSERT INTO users (first_name, last_name, username, email, password)
VALUES ('test', 'mctest', 'testusername', 'testing@test.com', 'password');

COMMIT;
