USE AleCrm_ZEM;

CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100),
    created_by INT,
    created_date DATETIME
);

CREATE TABLE genders (
    gender_id INT PRIMARY KEY AUTO_INCREMENT,
    gender VARCHAR(15),
    creation_date DATETIME,
    update_date DATETIME,
    created_by INT,
    updated_by INT,
    deletion_date DATETIME,
    deleted_by INT,
    FOREIGN KEY(created_by) REFERENCES users(user_id),
    FOREIGN KEY(updated_by) REFERENCES users(user_id),
    FOREIGN KEY(deleted_by) REFERENCES users(user_id)
);

CREATE TABLE addresses (
    address_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30),
    postal_code INT,
    street VARCHAR(50),
    neighborhood VARCHAR(30),
    exterior_number VARCHAR(10),
    interior_number VARCHAR(10),
    city VARCHAR(30),
    creation_date DATETIME,
    update_date DATETIME,
    created_by INT,
    updated_by INT,
    deletion_date DATETIME,
    deleted_by INT,
    FOREIGN KEY(deleted_by) REFERENCES users(user_id),
    FOREIGN KEY(created_by) REFERENCES users(user_id),
    FOREIGN KEY(updated_by) REFERENCES users(user_id)
);

CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(15),
    creation_date DATETIME,
    update_date DATETIME,
    created_by INT,
    updated_by INT,
    deletion_date DATETIME,
    deleted_by INT,
    FOREIGN KEY(created_by) REFERENCES users(user_id),
    FOREIGN KEY(updated_by) REFERENCES users(user_id),
    FOREIGN KEY(deleted_by) REFERENCES users(user_id)
);

CREATE TABLE customers (
    customer_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(15),
    last_name VARCHAR(15),
    birth_date DATETIME,
    fk_gender INT,
    phone_number VARCHAR(15),
    email VARCHAR(20),
    fk_address INT,
    creation_date DATETIME,
    update_date DATETIME,
    created_by INT,
    updated_by INT,
    deletion_date DATETIME,
    deleted_by INT,
    FOREIGN KEY(fk_address) REFERENCES address(address_id),
    FOREIGN KEY(fk_gender) REFERENCES gender(gender_id),
    FOREIGN KEY(created_by) REFERENCES users(user_id),
    FOREIGN KEY(updated_by) REFERENCES users(user_id),
    FOREIGN KEY(deleted_by) REFERENCES users(user_id)
);

CREATE TABLE sessions (
    session_id INT PRIMARY KEY AUTO_INCREMENT,
    session_date DATE,
    session_time TIME,
    fk_customer INT,
    sale_date DATETIME,
    creation_date DATETIME,
    update_date DATETIME,
    created_by INT,
    updated_by INT,
    deletion_date DATETIME,
    deleted_by INT,
    FOREIGN KEY(fk_customer) REFERENCES customers(customer_id),
    FOREIGN KEY(deleted_by) REFERENCES users(user_id),
    FOREIGN KEY(created_by) REFERENCES users(user_id),
    FOREIGN KEY(updated_by) REFERENCES users(user_id)
);

CREATE TABLE session_products (
    fk_session INT,
    fk_product INT,
    quantity INT,
    FOREIGN KEY(fk_session) REFERENCES sessions(session_id)
);

CREATE TABLE products (
    product_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    description VARCHAR(50),
    price FLOAT,
    fk_category INT,
    creation_date DATETIME,
    update_date DATETIME,
    created_by INT,
    updated_by INT,
    deletion_date DATETIME,
    deleted_by INT,
    FOREIGN KEY(fk_category) REFERENCES categories(category_id),
    FOREIGN KEY(deleted_by) REFERENCES users(user_id),
    FOREIGN KEY(created_by) REFERENCES users(user_id),
    FOREIGN KEY(updated_by) REFERENCES users(user_id)
);


-- Users
INSERT INTO users (name, last_name, email, created_by, created_date)
VALUES
    ('John', 'Doe', 'john.doe@example.com', 1, NOW()),
    ('Jane', 'Smith', 'jane.smith@example.com', 1, NOW()),
    ('Michael', 'Johnson', 'michael.johnson@example.com', 2, NOW()),
    ('Emily', 'Williams', 'emily.williams@example.com', 2, NOW()),
    ('David', 'Brown', 'david.brown@example.com', 3, NOW());

-- Gender
INSERT INTO genders (gender, creation_date, update_date, created_by, updated_by, deletion_date, deleted_by)
VALUES
    ('Male', NOW(), NOW(), 1, 1, NULL, NULL),
    ('Female', NOW(), NOW(), 1, 1, NULL, NULL),
    ('Other', NOW(), NOW(), 2, 2, NULL, NULL),
    ('Male', NOW(), NOW(), 3, 3, NULL, NULL),
    ('Female', NOW(), NOW(), 3, 3, NULL, NULL);

-- Address
INSERT INTO addresses (name, postal_code, street, neighborhood, exterior_number, interior_number, city, creation_date, update_date, created_by, updated_by, deletion_date, deleted_by)
VALUES
    ('Main Street 123', 12345, 'Main Street', 'Downtown', '123', NULL, 'Cityville', NOW(), NOW(), 1, 1, NULL, NULL),
    ('Elm Street 456', 54321, 'Elm Street', 'Suburbia', '456', NULL, 'Townsville', NOW(), NOW(), 1, 1, NULL, NULL),
    ('Oak Avenue 789', 67890, 'Oak Avenue', 'Rural', '789', NULL, 'Villageville', NOW(), NOW(), 2, 2, NULL, NULL),
    ('Maple Drive 101', 10987, 'Maple Drive', 'Hills', '101', NULL, 'Countryside', NOW(), NOW(), 2, 2, NULL, NULL),
    ('Cedar Lane 246', 24680, 'Cedar Lane', 'Forest', '246', NULL, 'Woodstown', NOW(), NOW(), 3, 3, NULL, NULL);

-- Categories
INSERT INTO categories (name, creation_date, update_date, created_by, updated_by, deletion_date, deleted_by)
VALUES
    ('Electronics', NOW(), NOW(), 1, 1, NULL, NULL),
    ('Clothing', NOW(), NOW(), 1, 1, NULL, NULL),
    ('Books', NOW(), NOW(), 2, 2, NULL, NULL),
    ('Home & Kitchen', NOW(), NOW(), 2, 2, NULL, NULL),
    ('Sports & Outdoors', NOW(), NOW(), 3, 3, NULL, NULL);

-- Customers
INSERT INTO customers (first_name, last_name, birth_date, fk_gender, phone_number, email, fk_address, creation_date, update_date, created_by, updated_by, deletion_date, deleted_by)
VALUES
    ('Alice', 'Johnson', '1990-05-15', 2, '123-456-7890', 'alice.johnson@example.com', 1, NOW(), NOW(), 1, 1, NULL, NULL),
    ('Bob', 'Smith', '1985-10-20', 1, '987-654-3210', 'bob.smith@example.com', 2, NOW(), NOW(), 1, 1, NULL, NULL),
    ('Charlie', 'Brown', '1988-12-25', 1, '555-555-5555', 'charlie.brown@example.com', 3, NOW(), NOW(), 2, 2, NULL, NULL),
    ('Diana', 'Williams', '1993-08-30', 2, '111-222-3333', 'diana.williams@example.com', 4, NOW(), NOW(), 2, 2, NULL, NULL),
    ('Eva', 'Miller', '1980-04-05', 2, '444-444-4444', 'eva.miller@example.com', 5, NOW(), NOW(), 3, 3, NULL, NULL);

-- Sessions
INSERT INTO sessions (session_date, session_time, fk_customer, sale_date, creation_date, update_date, created_by, updated_by, deletion_date, deleted_by)
VALUES
    ('2024-03-01', '10:00:00', 1, '2024-03-01 10:30:00', NOW(), NOW(), 1, 1, NULL, NULL),
    ('2024-03-02', '11:00:00', 2, '2024-03-02 11:30:00', NOW(), NOW(), 1, 1, NULL, NULL),
    ('2024-03-03', '12:00:00', 3, '2024-03-03 12:30:00', NOW(), NOW(), 2, 2, NULL, NULL),
    ('2024-03-04', '13:00:00', 4, '2024-03-04 13:30:00', NOW(), NOW(), 2, 2, NULL, NULL),
    ('2024-03-05', '14:00:00', 5, '2024-03-05 14:30:00', NOW(), NOW(), 3, 3, NULL, NULL);

-- Session Products
INSERT INTO session_products (fk_session, fk_product, quantity)
VALUES
    (1, 1, 2),
    (1, 2, 1),
    (2, 3, 1),
    (2, 4, 3),
    (3, 5, 2);

-- Products
INSERT INTO products (description, price, fk_category, creation_date, update_date, created_by, updated_by, deletion_date, deleted_by)
VALUES
    ('Laptop', 999.99, 1, NOW(), NOW(), 1, 1, NULL, NULL),
    ('Smartphone', 599.99, 1, NOW(), NOW(), 1, 1, NULL, NULL),
    ('T-Shirt', 19.99, 2, NOW(), NOW(), 2, 2, NULL, NULL),
    ('Jeans', 49.99, 2, NOW(), NOW(), 2, 2, NULL, NULL),
    ('Cookware Set', 149.99, 4, NOW(), NOW(), 3, 3, NULL, NULL);
