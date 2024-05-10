-- Renaming 'username' to 'firstname'
ALTER TABLE users
    RENAME COLUMN username TO firstname;
-- Adding new 'lastname' column
ALTER TABLE users
    ADD COLUMN lastname VARCHAR(255) NOT NULL DEFAULT 'Doe';
-- Update the column to remove the default if needed, and provide actual data
UPDATE users SET lastname = 'ActualLastName' WHERE lastname = 'Doe';
-- Alter the column to remove the default value if it was temporary
ALTER TABLE users
    ALTER COLUMN lastname DROP DEFAULT;
