/* 
**Создание таблиц**

1) создать таблицу Students

с полями:

- id целое число первичный ключ автоинкремент

- name строка 128 не null

- age целое число

2) создать таблицу Teachers

с полями:

- id целое число первичный ключ автоинкремент

- name строка 128 не null

- age целое число

3) создать таблицу Competencies

с полями:

- id целое число первичный ключ автоинкремент

- title строка 128 не null

4) создать таблицу Teachers2Competencies

с полями:

- id целое число первичный ключ автоинкремент

- teacher_id целое число

- competencies_id целое число

5) создать таблицу Courses

- id целое число первичный ключ автоинкремент

- teacher_id целое число

- title строка 128 не null

- headman_id целое число

6) создать таблицу Students2Courses

- id целое число первичный ключ автоинкремент

- student_id целое число

- course_id целое число
*/
create database University;

show databases;

use University;

create table Students( 
	id integer primary key auto_increment,
	name varchar(128) not null,
	age  integer
);

create table Competences( 
	id integer primary key auto_increment,
	title varchar(128) not null
);

create table Teachers( 
	id integer primary key auto_increment,
	name varchar(128) not null,
	age  integer
);

create table Competencies( 
	id integer primary key auto_increment,
	title varchar(128) not null
);

create table Teachers2Competencies( 
	id integer primary key auto_increment,
	teacher_id integer,
	competencies_id integer
);

CREATE TABLE Courses (
	id integer primary key auto_increment,
	teacher_id integer,
	title VARCHAR (128) not null,
    headman_id integer
);


CREATE TABLE  Students2Courses (
	id integer primary key auto_increment,
	student_id integer,
    course_id integer
);
show tables;

drop table competences;
drop table Students2Courses;


/*Добавить 6 записей в таблицу Students

Анатолий 29
Олег 25
Семен 27
Олеся 28
Ольга 31
Иван 22

Добавить 6 записей в таблицу Teachers

Петр 39
Максим 35
Антон 37
Всеволод 38
Егор 41
Светлана 32

Добавить 4 записей в таблицу Competencies

Математика 
Информатика
Программирование
Графика

Добавьте 6 записей в таблицу Teachers2Competencies

1 1
2 1
2 3
3 2
4 1
5 3

Добавьте 5 записей в таблицу Courses

1 Алгебра логики 2
2 Математическая статистика 3
4 Высшая математика 5
5 Javascript 1
5 Базовый Python 1

Добавьте 5 записей в таблицу students2courses

1 1
2 1
3 2
3 3
4 5*/;

insert into students (name, age) value ('Анатолий', 29), ('Олег', 25), ('Семен', 27), ('Олеся', 28), ('Ольга', 31), ('Иван', 22);
insert into Teachers (name, age) value ('Петр', 39), ('Максим', 35), ('Антон ', 37), ('Всеволод', 38), ('Егор ', 41), ('Светлана ', 32);
insert into Competencies (title) value ('Математика '), ('Информатика'), ('Программирование'), ('Графика');
insert into Teachers2Competencies (teacher_id, competencies_id) value (1, 1), (2, 1), (2, 3), (3, 2), (4, 1), (5, 3);
insert into Courses (teacher_id, title, headman_id) value (1,'Алгебра логики', 2), (2,'Математическая статистика',3), 
(4,'Высшая математика', 5), (5,'Javascript ',1), (5,'Базовый Python ',1);
insert into Students2courses (student_id, course_id) value (1, 1), (2, 1), (3, 2), (3, 3), (4, 5);

/* 1) вывести имена студентов и курсы, которые они проходят */
/*— 1) вывести имена студентов и курсы, которые они проходят*/

select
t1.name,
t3.title
from Students t1
left join Students2courses t2
on t1.id = t2.student_id
left join Courses t3
on t2.course_id = t3.id;

-- 2) выведите имена всех преподавателей с их компетенциями

select
	t1.name,
	t3.title
from teachers t1
left join teachers2competencies t2
on t1.id = t2.teacher_id
left join Competencies t3
on t2.competencies_id = t3.id;

select *
from teachers2competencies;

-- 3) найдите преподавателя, у которого нет компетенций

select
	t1.name,
	t3.title
from teachers t1
left join teachers2competencies t2
on t1.id = t2.teacher_id
left join Competencies t3
on t2.competencies_id = t3.id
where t3.title is null;

-- 4) Найдите имена студентов, которые не проходят ни один курс
select
t1.name,
t3.title
from Students t1
left join Students2courses t2
on t1.id = t2.student_id
left join Courses t3
on t2.course_id = t3.id
where t3.title is null;

select *
from Courses;

select 
t1.name
from students t1
left join Students2courses t2
on t1.id = t2.student_id
where t2.student_id is null;

-- 5) Найдите курс, которые не посещает ни один студент

select
t1.title
from courses t1
left join Students2courses t2
on t1.id = t2.course_id
where t2.course_id is null;

-- 6) выведите название курса и имя старосты

select
t2.name,
t1.title
from Courses t1
inner join Students t2
on t1.headman_id = t2.id;

-- ДЗ
-- 7) найдите компетенции, которых нет ни у одного преподавателя

select
	t1.title
from competencies t1
left join teachers2competencies t2
on t1.id = t2.competencies_id 
where t2.competencies_id is null;

-- 8) выведите имя студента и имена старост, которые есть на курсах, которые он проходит

select
	t1.name as student_name,
    t3.title as course_title,
    t4.name as headman_name
 from students t1
 inner join students2courses t2
 on t1.id = t2.student_id
 inner join courses t3
 on t2.course_id = t3.id
 inner join students t4
 on t3.headman_id = t4.id; 
 




