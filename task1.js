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

const base_a = parseInt(args[1]);
const base_b = parseInt(args[2]);
const i_num = args[0].trim();

if (i_num.length > 5 || i_num.length<1 || 
	base_a < 1 || base_a > 100 || 
	base_b < 1 || base_b > 100) {
	process.exit();
}

process.stdout.write(`A = ${base_a}, B = ${base_b}, num = ${i_num}`);
console.log('');