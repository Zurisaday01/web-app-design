USE AleCrm_ZEM;

CREATE TABLE Users (
    User_ID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(15),
    Created_By INT,
    Updated_By INT,
    Deletion_Date DATETIME,
    Deleted_By INT
);

CREATE TABLE Gender (
    Gender_ID INT PRIMARY KEY AUTO_INCREMENT,
    Gender VARCHAR(15),
    Creation_Date DATETIME,
    Update_Date DATETIME,
    Created_By INT,
    Updated_By INT,
    Deletion_Date DATETIME,
    Deleted_By INT,
    FOREIGN KEY(Created_By) REFERENCES Users(User_ID),
    FOREIGN KEY(Updated_By) REFERENCES Users(User_ID),
    FOREIGN KEY(Deleted_By) REFERENCES Users(User_ID)
);

CREATE TABLE Address (
    Address_ID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(30),
    Postal_Code INT,
    Street VARCHAR(50),
    Neighborhood VARCHAR(30),
    Exterior_Number VARCHAR(10),
    Interior_Number VARCHAR(10),
    City VARCHAR(30),
    Creation_Date DATETIME,
    Update_Date DATETIME,
    Created_By INT,
    Updated_By INT,
    Deletion_Date DATETIME,
    Deleted_By INT,
    FOREIGN KEY(Deleted_By) REFERENCES Users(User_ID),
    FOREIGN KEY(Created_By) REFERENCES Users(User_ID),
    FOREIGN KEY(Updated_By) REFERENCES Users(User_ID)
);

CREATE TABLE Categories (
    Category_ID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(15),
    Creation_Date DATETIME,
    Update_Date DATETIME,
    Created_By INT,
    Updated_By INT,
    Deletion_Date DATETIME,
    Deleted_By INT,
    FOREIGN KEY(Created_By) REFERENCES Users(User_ID),
    FOREIGN KEY(Updated_By) REFERENCES Users(User_ID),
    FOREIGN KEY(Deleted_By) REFERENCES Users(User_ID)
);

CREATE TABLE Customers (
    Customer_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    First_Name VARCHAR(15),
    Last_Name VARCHAR(15),
    Birth_Date DATETIME,
    FK_Gender INT,
    Phone_Number VARCHAR(15),
    Email VARCHAR(20),
    FK_Address INT,
    Creation_Date DATETIME,
    Update_Date DATETIME,
    Created_By INT,
    Updated_By INT,
    Deletion_Date DATETIME,
    Deleted_By INT,
    FOREIGN KEY(FK_Address) REFERENCES Address(Address_ID),
    FOREIGN KEY(FK_Gender) REFERENCES Gender(Gender_ID),
    FOREIGN KEY(Created_By) REFERENCES Users(User_ID),
    FOREIGN KEY(Updated_By) REFERENCES Users(User_ID),
    FOREIGN KEY(Deleted_By) REFERENCES Users(User_ID)
);

CREATE TABLE Sessions (
    Session_ID INT PRIMARY KEY AUTO_INCREMENT,
    Session_Date DATE,
    Session_Time TIME,
    FK_Customer INT,
    Sale_Date DATETIME,
    Creation_Date DATETIME,
    Update_Date DATETIME,
    Created_By INT,
    Updated_By INT,
    Deletion_Date DATETIME,
    Deleted_By INT,
    FOREIGN KEY(FK_Customer) REFERENCES Customers(Customer_ID),
    FOREIGN KEY(Deleted_By) REFERENCES Users(User_ID),
    FOREIGN KEY(Created_By) REFERENCES Users(User_ID),
    FOREIGN KEY(Updated_By) REFERENCES Users(User_ID)
);

CREATE TABLE Session_Products (
    FK_Session INT,
    FK_Product INT,
    Quantity INT,
    FOREIGN KEY(FK_Session) REFERENCES Sessions(Session_ID)
);

CREATE TABLE Products (
    Product_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Description VARCHAR(50),
    Price FLOAT,
    FK_Category INT,
    Creation_Date DATETIME,
    Update_Date DATETIME,
    Created_By INT,
    Updated_By INT,
    Deletion_Date DATETIME,
    Deleted_By INT,
    FOREIGN KEY(FK_Category) REFERENCES Categories(Category_ID),
    FOREIGN KEY(Deleted_By) REFERENCES Users(User_ID),
    FOREIGN KEY(Created_By) REFERENCES Users(User_ID),
    FOREIGN KEY(Updated_By) REFERENCES Users(User_ID)
);
