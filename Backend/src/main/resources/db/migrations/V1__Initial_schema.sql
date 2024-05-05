-- Create 'users' table
CREATE TABLE IF NOT EXISTS `users` (
                                       `id` INT AUTO_INCREMENT PRIMARY KEY,
                                       `username` VARCHAR(255) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE
    );

-- Create 'emails' table
CREATE TABLE IF NOT EXISTS `emails` (                                        `id` INT AUTO_INCREMENT PRIMARY KEY,
                                        `sender_id` INT NOT NULL,
                                        `receiver_id` INT NOT NULL,
                                        `subject` VARCHAR(255) NOT NULL,
    `body` TEXT NOT NULL,
    CONSTRAINT `fk_emails_sender_id` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`),
    CONSTRAINT `fk_emails_receiver_id` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`id`)
    );
