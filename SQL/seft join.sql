-- Вывести имя/фамилию сотрудника и имя/фамилию его/ее менеджера

use hr;
select * from employees;

select
    t1.first_name as employee_name,
    t1.last_name as employee_last_name,
    t2.first_name as manager_id,
    t2.last_name as manager_last_name
from employees t1
inner join employees t2
on t1.manager_id = t2.employee_id;

-- t1 - источник данных о сотруднике
-- t2 - источник данных о менеджере

-- Вывести имена и фамилии тех сотрудников, которые зарабатывают больше своего менеджера
select
    t1.first_name as employee_name,
    t1.last_name as employee_last_name,
    t1.salary as employee_salary,
    t2.first_name as manager_name,
    t2.last_name as manager_last_name,
	t2.salary as manager_salary
from employees t1
inner join employees t2
on t1.manager_id = t2.employee_id
where t1.salary > t2.salary;
