
-- CREATE DATABASE BASE_DE_DATOS_SEMESTRE;

USE BASE_DE_DATOS_SEMESTRE;

CREATE TABLE Sesiones_Productos (
	FK_Sesion INTEGER,
	FK_Productos INTEGER,
	Cantidad INTEGER,
	FOREIGN KEY(FK_Sesion) REFERENCES Sesiones(ID_Sesion)
);

CREATE TABLE Productos (
	ID_Productos INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	Descripcion VARCHAR(50),
	Precio FLOAT,
	FK_Categoria INTEGER,
	Fecha_Creacion DATETIME,
	Fecha_Actualizacion DATETIME,
	FK_Creado_Por INTEGER,
	FK_Actualizado_por INTEGER,
	Fecha_Eliminacion DATETIME,
	FK_Eliminado_Por INTEGER,
	FOREIGN KEY(FK_Categoria) REFERENCES Categorias(ID_Categoria),
	FOREIGN KEY(FK_Eliminado_Por) REFERENCES Usuarios(ID_Usuario),
	FOREIGN KEY(FK_Creado_Por) REFERENCES Usuarios(ID_Usuario),
	FOREIGN KEY(FK_Actualizado_por) REFERENCES Usuarios(ID_Usuario)
);

CREATE TABLE Direccion (
	ID_Direccion INTEGER PRIMARY KEY AUTO_INCREMENT,
	Nombre VARCHAR(30),
	Codigo_Postal INTEGER,
	Calle VARCHAR(50),
	Colonia VARCHAR(30),
	Numero_Exterior VARCHAR(10),
	Numero_Interior VARCHAR(10),
	Ciudad VARCHAR(30),
	Fecha_Creacion DATETIME,
	Fecha_Actualizacion DATETIME,
	FK_Creado_Por INTEGER,
	FK_Actualizado_por INTEGER,
	Fecha_Eliminacion DATETIME,
	FK_Eliminado_Por INTEGER,
	FOREIGN KEY(FK_Eliminado_Por) REFERENCES Usuarios(ID_Usuario),
	FOREIGN KEY(FK_Creado_Por) REFERENCES Usuarios(ID_Usuario),
	FOREIGN KEY(FK_Actualizado_por) REFERENCES Usuarios(ID_Usuario)
);

CREATE TABLE Genero (
	ID_Genero INTEGER PRIMARY KEY AUTO_INCREMENT,
	Genero VARCHAR(15),
	Fecha_Creacion DATETIME,
	Fecha_Actualizacion DATETIME,
	FK_Creado_Por INTEGER,
	FK_Actualizado_por INTEGER,
	Fecha_Eliminacion DATETIME,
	FK_Eliminado_Por INTEGER,
	FOREIGN KEY(FK_Creado_Por) REFERENCES Usuarios(ID_Usuario),
	FOREIGN KEY(FK_Actualizado_por) REFERENCES Usuarios(ID_Usuario),
	FOREIGN KEY(FK_Eliminado_Por) REFERENCES Usuarios(ID_Usuario)
);

CREATE TABLE Clientes (
	id_cliente INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	Nombre VARCHAR(15),
	Apellido VARCHAR(15),
	FechaDeNacimiento DATETIME,
	FK_Genero INTEGER,
	Telefono VARCHAR(15),
	Correo VARCHAR(20),
	FK_Direccion INTEGER,
	Fecha_Creacion DATETIME,
	Fecha_Actualizacion DATETIME,
	FK_Creado_Por INTEGER,
	FK_Actualizado_Por INTEGER,
	Fecha_Eliminacion DATETIME,
	FK_Eliminado_Por INTEGER,
	FOREIGN KEY(FK_Direccion) REFERENCES Direccion(ID_Direccion),
	FOREIGN KEY(FK_Genero) REFERENCES Genero(ID_Genero),
	FOREIGN KEY(FK_Creado_Por) REFERENCES Usuarios(ID_Usuario),
	FOREIGN KEY(FK_Actualizado_Por) REFERENCES Usuarios(ID_Usuario),
	FOREIGN KEY(FK_Eliminado_Por) REFERENCES Usuarios(ID_Usuario)
);

CREATE TABLE Categorias (
	ID_Categoria INTEGER PRIMARY KEY AUTO_INCREMENT,
	Nombre VARCHAR(15),
	Fecha_Creacion DATETIME,
	Fecha_Actualizacion DATETIME,
	FK_Creado_Por INTEGER,
	FK_Actualizado_Por INTEGER,
	Fecha_Eliminacion DATETIME,
	FK_Eliminado_Por INTEGER,
	FOREIGN KEY(FK_Creado_Por) REFERENCES Usuarios(ID_Usuario),
	FOREIGN KEY(FK_Actualizado_Por) REFERENCES Usuarios(ID_Usuario),
	FOREIGN KEY(FK_Eliminado_Por) REFERENCES Usuarios(ID_Usuario)
);

CREATE TABLE Sesiones (
	ID_Sesion INTEGER PRIMARY KEY AUTO_INCREMENT,
	Fecha_Sesion DATE,
	Hora_Sesion TIME,
	FK_Cliente INTEGER,
	Fecha_Venta DATETIME,
	Fecha_Creacion DATETIME,
	Fecha_Actualizacion DATETIME,
	FK_Creado_Por INTEGER,
	FK_Actualizado_por INTEGER,
	Fecha_Eliminacion DATETIME,
	FK_Eliminado_Por INTEGER,
	FOREIGN KEY(FK_Cliente) REFERENCES Clientes(id_cliente),
	FOREIGN KEY(FK_Eliminado_Por) REFERENCES Usuarios(ID_Usuario),
	FOREIGN KEY(FK_Creado_Por) REFERENCES Usuarios(ID_Usuario),
	FOREIGN KEY(FK_Actualizado_por) REFERENCES Usuarios(ID_Usuario)
);

CREATE TABLE Usuarios (
	ID_Usuario INTEGER PRIMARY KEY AUTO_INCREMENT,
	Nombre VARCHAR(15),
	Creado_Por INTEGER,
	Actualizado_Por INTEGER,
	Fecha_Eliminacion DATETIME,
	Eliminado_Por INTEGER
);

