CREATE TABLE followers (
  id uuid NOT NULL,
  followedId TEXT NOT NULL,
  followedById DATETIME NOT NULL,
  createdAt DATETIME NOT NULL,
  CONSTRAINT PK__FOLLOWERS PRIMARY KEY (id)
);

ALTER TABLE followers ADD CONSTRAINT FK__FOLLOWERS__FOLLOWED
FOREIGN KEY (followedId) 
REFERENCES users (id) MATCH FULL
ON DELETE SET NULL
ON UPDATE CASCADE;

ALTER TABLE followers ADD CONSTRAINT FK__FOLLOWERS__FOLLOWEDBY
FOREIGN KEY (followedById) 
REFERENCES users (id) MATCH FULL
ON DELETE SET NULL
ON UPDATE CASCADE;