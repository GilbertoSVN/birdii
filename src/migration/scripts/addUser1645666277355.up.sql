CREATE TABLE users (
  id uuid NOT NULL,
  username VARCHAR(14) NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  CONSTRAINT PK__USERS PRIMARY KEY (id)
)