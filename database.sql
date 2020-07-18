create database gestion;

use gestion;

create table estudiante (
    id int(8) auto_increment not null,
    cedula varchar(10) not null,
    apellidos varchar(76) not null,
    nombres varchar(76) not null,
    materia varchar(76) not null,
    nota1 float not null,
    nota2 float not null,
    nota3 float not null,
    nota4 float not null,
    nota5 float not null,
    nota6 float not null,
    status boolean not null,
    primary key (id)
);