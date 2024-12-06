-- Crear la base de datos (opcional)
CREATE DATABASE IF NOT EXISTS gestion_licencias;

-- Usar la base de datos
USE gestion_licencias;

-- Crear la tabla de Licencias
CREATE TABLE IF NOT EXISTS Licencias (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    codigo_licencia VARCHAR(10) NOT NULL,
    descripcion VARCHAR(100) NOT NULL,
    duracion_anios INT NOT NULL,
    tiempo_procesamiento INT NOT NULL -- en días
);

-- Insertar datos en la tabla Licencias
INSERT INTO Licencias (codigo_licencia, descripcion, duracion_anios, tiempo_procesamiento) VALUES
('LIC-01', 'Licencia Tipo A', 1, 5),
('LIC-02', 'Licencia Tipo B', 2, 10),
('LIC-03', 'Licencia Tipo C', 3, 15),
('LIC-04', 'Licencia Tipo D', 4, 20),
('LIC-05', 'Licencia Tipo E', 5, 25),
('LIC-06', 'Licencia Tipo F', 6, 30),
('LIC-07', 'Licencia Tipo G', 7, 35),
('LIC-08', 'Licencia Tipo H', 8, 40),
('LIC-09', 'Licencia Tipo I', 9, 45),
('LIC-10', 'Licencia Tipo J', 10, 50);