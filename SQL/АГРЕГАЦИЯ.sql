/*
 АГРЕГАЦИЯ
 1. count() - кол-во строк, которые не null
 2. max() - максимальное значение
 3. min() - минимальное значение
 4. avg() - среднее значение
 5. sum() - сумма значений
 */
-- 1) Найти имя и фамилию сотрудников с самой большой и самой маленькой зарплатами
select * from employees;
select
	max(salary) as max_salary
from employees;

select
	min(salary) as min_salary
from employees;

select 
first_name,
last_name,
salary
from employees
where salary = (
select
	max(salary) as max_salary
from employees
);