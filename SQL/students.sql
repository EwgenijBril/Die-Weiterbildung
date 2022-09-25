use lesson;

create table students (
name varchar(128) not null,
lastname varchar(128) not null,
avg_mark numeric(2, 1) check (avg_mark between 0 and 5),
gender char (1) check (gender in ('M', 'F'))
);

select * from students;

insert into students (name, lastname, avg_mark, gender) value ('Oleg', 'Petrov', 4.3, 'M'),
                                                              ('Sveta', 'Petrova', 4.0, 'F'),
                                                              ('Igory', 'Romanow', 4.8, 'M');
alter table students
add column id integer primary key auto_increment;

alter table students
change name firstname varchar(128);