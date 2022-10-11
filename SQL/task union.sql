-- Создать БД Shop
create database Shop;
use Shop;

-- Создать 2 таблицы и наполнить данными
-- goods (id первичный ключ авто инкремент, title varchar(128), quantity 0-10)

create table Goods
( id integer primary key auto_increment,
  title varchar(128),
  quantity integer check(quantity between 0 and 10)
);

-- Данные для таблицы goods:
-- Bike, 4
-- Skis, 5
-- Skates, 7
-- Skate, 2

insert into Goods (title, quantity) values ('Bike', 4),
										   ('Skis', 5),
										   ('Skates', 7),
                                           ('Skate', 2);


-- и goods_1 (id первичный ключ авто инкремент, title varchar(128), price int, quantity 0-10)
create table Goods_1
( id integer primary key auto_increment,
  title varchar(128),
  price integer,
  quantity integer check(quantity between 0 and 10)
);

-- Данные для таблицы goods_1:
-- Bike, 12000, 4
-- Skis, 10000, 5
-- Skates, 6000, 7
-- Skate,  2000, 2

insert into Goods_1 (title, price, quantity) values ('Bike', 12000, 4),
                                                    ('Skis', 10000, 5),
                                                    ('Skates', 6000, 7),
                                                    ('Skate',  2000, 2);

show databases;   
-- объединить данные из goods и goods_1 (без дублей, без price)

select * from Goods
union
select id, title, quantity from Goods_1;

-- объединить данные из goods и goods_1 (все записи, без price)
select * from Goods
union all
select id, title, quantity from Goods_1;

-- объединить данные из goods и goods_1, указав price, где это возможно
select 
	id,
    title,
    null as price,
    quantity
from Goods
union all
select
	id,
    title,
    price,
    quantity
from Goods_1;


                                              