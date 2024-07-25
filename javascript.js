// Randomly testing declaring variables 
let user = 'Rukky' , message = 'Welcome to Mario club';
let hello = message;
//alert(hello);

let _ = 6;
let $ = 16;
console.log(_ + $);
//alert(_ + $);

const myBirthday = '01.12.2000';

const age = (myBirthday);
console.log(age)

//Working with veriables
let name = 'John';

let admin = name;
//alert(admin)

let planetName = 'earth';
let currentUserName = 'Rukky';

const string = "The revolution will not be televised ";
console.log(string);

function troubleshooting(){
	const a = 1;
	const b = 1;

	let result;

	result = a + b;

	return result;
}
const ivor = troubleshooting()

console.log(ivor);

alert(59 != 34);

let answer = 4 > 6;
console.log(answer);

console.log(`Glow` > `Glee`);

let hour = 10;
let isWeekend = true;
if (hour < 11 || hour > 19 || isWeekend) {
	alert ('The office is closed');
}

let time = 14;
let minute = 21;

if (time == 14 && minute == 21 )
	{alert('The time is 2:21');}

/*if (1 && 0) {
	alert('This is in favour of false');
}*/

if (2 || 0) {
	alert(" This is in favour of True")
}

/*if ( 2 && 0)
 {
	console.log('This is in favour of false');
}*/
console.log('This is a test' || 0);

console.log(!false);

alert ( alert(1) && alert(2));
alert(alert(1) || 2 || alert(3));

if(!(age >= 14 && age <= 90) );