/* Task 1 */

/* Put your code here */

/*
Реализовать функцию перевода числа из одной системы счисления в другую.
На вход подается исходные число i и система счисления a и требуемая система счисления b.
0 <= i <= 10000
1 <= a, b <= 100
Пример

> node task.rb 7 10 2
> 111

*/
let slice_start = 0;
if (process.argv.length == 4) {
	slice_start = 1;
}
if (process.argv.length == 5) {
	slice_start = 2;
}
if (slice_start == 0) {
	process.exit();
}


const args = process.argv.slice(slice_start);

const base_a = parseInt(args[1],10);
const base_b = parseInt(args[2],10);
const i_num = args[0].trim().toUpperCase();

if (i_num.length > 60 || i_num.length<1 || 
	base_a <= 1 || base_a > 100 || 
	base_b <= 1 || base_b > 100 || 
	isNaN(base_a) || isNaN(base_b) ) {
	process.exit();
}

const BASE = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//console.log(`A = ${base_a}, B = ${base_b}, num = ${i_num}`);


let mid_number = 0;
let pos_cnt = 1;
for (let c of i_num) {
	let pos_num = BASE.indexOf(c);
	if (pos_num < 0 || pos_num >= base_a) {
		 //console.log(`Bad Input ${c} at position ${pos_cnt}`);
		process.exit();
	} 
	mid_number = mid_number * base_a + pos_num;
	pos_cnt++;
} 
 //console.log(`Mid number = ${mid_number}`);

let cycle_cnt = 0;
let out_result = '';
while (mid_number > 0 && cycle_cnt < 1000) {
	let rest_num = mid_number % base_b;
	mid_number = Math.floor(mid_number / base_b);
	let c = ' ';
	if (rest_num < 36) {
		c = BASE[rest_num];
	}
	out_result = c + out_result; 
	cycle_cnt++;
}
//console.log(`Out result ${out_result}`);
process.stdout.write(`${out_result}`);
