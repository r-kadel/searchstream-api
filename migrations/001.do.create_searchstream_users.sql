CREATE TABLE searchstream_users (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  email TEXT NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT now()
);