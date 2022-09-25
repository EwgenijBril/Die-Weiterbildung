create database lesson;

use lesson;

create table people (
id integer primary key auto_increment,
firstname varchar(128),
lastname varchar(128)
);

insert into people (firstname, lastname) value ('Anton', 'Golubev'),
                                               ('Victoria', 'Petrova'),
                                               ('Olga', 'Ivanova');
 
select * from people; 

delete from people;
 set sql_safe_updates = 0;
 truncate people;