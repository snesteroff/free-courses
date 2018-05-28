/* Task 2 */

/* Put your code here */

/*
Рассчитать количество дней до нового года.
На вход поадется дата в формате d m y
1 <= d <= 31
m in [января февраля марта апреля мая июня июля августа сентября октября ноября декабря]
1 <= y <= 2999
Пример

> node task.rb 4 июля 2018
> 180

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

const i_month = args[1].trim().toLowerCase();
const i_day = parseInt(args[0], 10);
const i_year = parseInt(args[2], 10);

const YEAR = ["января",
		  "февраля", 
		  "марта", "апреля", "мая", "июня",
		  "июля", "августа", "сентября", 
		  "октября","ноября", "декабря"];
const YEAR_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30 , 31];
const mon_idx = YEAR.indexOf(i_month);

if ( mon_idx < 0) {
//	console.log(`Error in month name: ${i_month}`);
	process.exit();
}
if (isNaN(i_year) || i_year < 1 || i_year > 2999) {
//	console.log(`Bad year ${i_year}`);
	process.exit();
}

const is_leap_year = (i_year % 4 == 0) && (i_year % 100 != 0 || i_year % 400 == 0);

//console.log(`Leap year ${is_leap_year}`);

if (is_leap_year) {
	// So much for CONST
	YEAR_DAYS[1] = 29;
}

if (isNaN(i_day) || i_day < 1 || i_day > YEAR_DAYS[mon_idx]) {
//	console.log(`Bad number of days ${i_day} for month ${i_month}`);
	process.exit();
}


const year_day = YEAR_DAYS.slice(mon_idx);
const out_result = year_day.reduce(
		(acc, mdays, idx ,arr) => (acc + mdays)
	) - i_day;

process.stdout.write(`${out_result}`);

