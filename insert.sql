USE AleCrm_ZEM;

INSERT INTO Users (Name, Created_By, Updated_By, Deletion_Date, Deleted_By) VALUES
('John Doe', 0, 0, NULL, NULL),
('Alice Smith', 0, 0, NULL, NULL),
('Bob Johnson', 0, 0, NULL, NULL),
('Emily Davis', 0, 0, NULL, NULL),
('Michael Wilson', 0, 0, NULL, NULL);


INSERT INTO Gender (Gender, Creation_Date, Update_Date, Created_By, Updated_By, Deletion_Date, Deleted_By) VALUES
('Male', NOW(), NOW(), 1, 1, NULL, NULL),
('Female', NOW(), NOW(), 1, 1, NULL, NULL),
('Other', NOW(), NOW(), 1, 1, NULL, NULL),
('Male', NOW(), NOW(), 1, 1, NULL, NULL),
('Female', NOW(), NOW(), 1, 1, NULL, NULL);

INSERT INTO Address (Name, Postal_Code, Street, Neighborhood, Exterior_Number, Interior_Number, City, Creation_Date, Update_Date, Created_By, Updated_By, Deletion_Date, Deleted_By) VALUES
('Home', 12345, 'Main St', 'Downtown', '123', 'Apt 1', 'Cityville', NOW(), NOW(), 1, 1, NULL, NULL),
('Work', 54321, 'Elm St', 'Suburb', '456', '', 'Suburbia', NOW(), NOW(), 1, 1, NULL, NULL),
('Home', 98765, 'Oak St', 'Hillside', '789', '', 'Hilltown', NOW(), NOW(), 1, 1, NULL, NULL),
('Office', 67890, 'Maple St', 'Business District', '101', 'Suite 200', 'Metropolis', NOW(), NOW(), 1, 1, NULL, NULL),
('Home', 13579, 'Pine St', 'Rural', '246', '', 'Countryside', NOW(), NOW(), 1, 1, NULL, NULL);

INSERT INTO Categories (Name, Creation_Date, Update_Date, Created_By, Updated_By, Deletion_Date, Deleted_By) VALUES
('Category 1', NOW(), NOW(), 1, 1, NULL, NULL),
('Category 2', NOW(), NOW(), 1, 1, NULL, NULL),
('Category 3', NOW(), NOW(), 1, 1, NULL, NULL),
('Category 4', NOW(), NOW(), 1, 1, NULL, NULL),
('Category 5', NOW(), NOW(), 1, 1, NULL, NULL);

INSERT INTO Customers (First_Name, Last_Name, Birth_Date, FK_Gender, Phone_Number, Email, FK_Address, Creation_Date, Update_Date, Created_By, Updated_By, Deletion_Date, Deleted_By) VALUES
('Alice', 'Johnson', '1990-05-15', 1, '1234567890', 'alice@example.com', 1, NOW(), NOW(), 1, 1, NULL, NULL),
('Bob', 'Smith', '1985-10-25', 2, '9876543210', 'bob@example.com', 2, NOW(), NOW(), 1, 1, NULL, NULL),
('Charlie', 'Brown', '1978-03-12', 1, '4567890123', 'charlie@example.com', 3, NOW(), NOW(), 1, 1, NULL, NULL),
('Diana', 'Miller', '1995-12-30', 2, '6543210987', 'diana@example.com', 4, NOW(), NOW(), 1, 1, NULL, NULL),
('Eva', 'Garcia', '1982-07-18', 2, '7890123456', 'eva@example.com', 5, NOW(), NOW(), 1, 1, NULL, NULL);

