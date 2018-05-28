/* Task 3 */

/* Put your code here */

/*
Сложить 2 временных промежутка и вывести общую длительность в человекочитаемом виде.
В выводе использовать часы, минуты и секунды (при необходимости).
На вход подается два числа t1 и t2, разделенные пробелом. 1 <= t1, t2 <= 100000
Пример

> node task.rb 1 1
> 2 секунды

> node task.rb 3600 3599
> 1 час 59 минут 59 секунд
*/

let slice_start = 0;
if (process.argv.length == 3) {
	slice_start = 1;
}
if (process.argv.length == 4) {
	slice_start = 2;
}
if (slice_start == 0) {
	process.exit();
}

const args = process.argv.slice(slice_start);

const t1 = parseInt(args[0], 10);
const t2 = parseInt(args[1], 10);

if (isNaN(t1) || isNaN(t2) || t1 < 1 || t2 < 1 
		|| t1 > 100000 || t2 > 100000) {
	console.log('Недопустимые входные параметры');
	process.exit();
}

console.log(t1, t2);

let sumt = t1 + t2;

const secs = sumt % 60;
sumt = Math.floor(sumt / 60);

const mins = sumt % 60; 
const hours = Math.floor(sumt / 60);

console.log(hours, mins, secs);


let out_result = num_ending(hours, 'час','часа','часов');

let m_o = num_ending(mins, 'минута','минуты','минут');

out_result = (out_result + " " + m_o).trim();

let s_o = num_ending(secs, 'секунда','секунды','секунд');

out_result = (out_result +  " " + s_o).trim();

console.log(out_result);

function num_ending(num, single_end, triple_end, more_end ) {
	if (num <= 0) return "";
	
	if (((num%100) >= 5 && (num%100) <= 20) || num % 10 >=5 || num % 10 == 0) {
		return `${num} ${more_end}`;
	}
	if (num % 10 == 1) { 
		return `${num} ${single_end}`; 
	}
	if (num % 10 < 5) {
		return `${num} ${triple_end}`; 	
	}
}