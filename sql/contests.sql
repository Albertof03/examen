DROP TABLE IF EXISTS Contests;

CREATE TABLE Contests (
    contestId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    organizer VARCHAR(512) NOT NULL,
    contestDate DATE NOT NULL,
    prize DEC(6,2) NOT NULL,
    description VARCHAR(512) NOT NULL,
    imageUrl VARCHAR(512)
);

INSERT INTO Contests (name, organizer, contestDate, prize, description, imageUrl) VALUES
    ('Pencil drawing XIX edition', 'Daniel Ayala', '2023-08-08', 99.99, 'Send a pencil drawing of any theme. Best three will be chosen as winners', 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pencils_hb.jpg'),
    ('CoD tournament', 'Jesús Lozano', '2023-09-09', 777.00, '5 rounds. No perks. No custom controllers.', 'https://upload.wikimedia.org/wikipedia/en/5/5d/A_Dance_With_Dragons_US.jpg'),
    ('Jumping tournament', 'Daniel Ayala', '2020-05-21', 200.00, 'Whoever makes the longest jump will be the winner. Free drinks for all participants.', 'https://upload.wikimedia.org/wikipedia/en/5/5d/A_Dance_With_Dragons_US.jpg'),
    ('Physics olympics', 'Pablo Hernández', '2024-01-01', 2250.50, 'Participants will have 5 hours to complete a physics exam with 879 questions', 'https://upload.wikimedia.org/wikipedia/en/5/5d/A_Dance_With_Dragons_US.jpg');
