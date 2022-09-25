show tables;
use hr;
show tables;
select * from employees;

select
    t1.first_name,
    t1.last_name,
    t2.department_name
from employees t1
inner join departments t2
on t1.department_id = t2.department_id;
-- 5. Вывести имя и фамилию сотрудников, которые работают в Seattle или Toronto

select
	t1.first_name,
    t1.last_name,
    t3.city
from employees t1
inner join departments t2
on t1.department_id = t2.department_id
inner join locations t3
on t2.location_id = t3.location_id
where t3.city in ('Seattle', 'Toronto');
