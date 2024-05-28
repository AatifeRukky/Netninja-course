//log things to console
/*console.log(1);
console.log(2); */

/*let age = 25;
let year = 2019;
console.log(age,year);

age = 30;
console.log(age);

const point = 100;
console.log(point);

var score = 75;
console.log(score);

let myAge = 23;
console.log(myAge);

//strings
console.log('hello world');

//let email = 'rukky@gmail.com';
//console.log(email);

//string concatenations (fancy word for joining things together)
/* let firstName ='Rukky';
let lastName ='Aatife';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//Getting characters
console.log(fullName[3]);

//String Length
console.log(fullName.length);

//String Methods
console.log(fullName.toUpperCase());
/*let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@')
console.log(index); */

//Common string methods
/* let email = 'rukkyaatife@gmail.com';

//let result = email.lastIndexOf('a');

//console.log(result);

//let result = email.slice (0,6);
//let result = email.substr(4,10)
let result = email.replace('a', 'o');
console.log(result); */

//let radius = 10;

//const pi = 3.14;

//console.log(radius , pi)
// amth operators +, -, *, /, **

/* console.log(10 / 2);
let result = radius % 3;

console.log(result); */

//order of operation - B O D M A S
/*let result = 5 * (10 - 3)**2;

console.log(result);*/

//let likes = 10;

//likes = likes + 10;
//likes++
//likes--
//likes +=10
//likes *=2
//console.log(likes);

//NaN - not a number
//console.log(5 / 'hallo');

//template strings
/*const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

//let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
//console.log(result);
//template string way
//let result = `The blog called ${title} by ${author} has ${likes} likes`;
//console.log(result);

//creating html templates
let html =`
<h2>${title}</h2>
<p>By ${author}</p>
<span>has ${likes} likes </span>
`;
console.log(html);8 

let ninjas = ['rukky', 'ivor', 'ebrus'];*/
//ninjas[1] = 'uncle';
//console.log(ninjas [1])

//let ages = [22 , 25 , 20];
 //console.log(ages[2]);
 // console.log(ninjas.length);
  //array methods
  //  let result = ninjas.join(',');
  /// let result = ninjas.indexOf('rukky');
  //let result = ninjas.concat('Tega');
  //let result = ninjas.push('tega');
  
  //   console.log(result);

  /*let email = ('rukkyaatife@gmail.com');

   let result = email.includes('@');

   console.log(result); */

   //let age = 23;
   // console.log( age == 23);
     //console.log( age == 25);
     /* console.log(age != 23);
       console.log(age > 20);
        console.log(age < 20);
        console.log(age >= 23);
        console.log(age <= 23)*/

        // let name =[ 'rukky'];
        // console.log(name == 'rukky'); //abstract equality loose equlity
         //console.log(name != 'Rukky');

        /* console.log(age == 23)
         console.log(age =='23')
         console.log(age != '23')

         //strict comparison

         console.log( age === 23)
         console.log(age === '23')
         console.log(age !== '23')*/

        /* let score = '100';
          
         score = Number(score);
         console.log( score + 1);

         let age = 20;
         age = String(age);
         console.log(age + 3);

         console.log(typeof age)*/

       //  let result =Boolean(100);
         //console.log(result, typeof result);

 //for loops
 // for(let i = 0; i < 5; i++){
 //   console.log('in loop', i);
 // }
  //console.log('loop finished');
  /*let names = ['rukky', 'ivor', 'ebrus', 'esther', 'tega', 'divine'];

  for (let i = 0; i < names.length; i++) {
    if (names[i] == 'tega') {
      break;
    } else {
      console.log(names[i]);
    }
  }*/
/*let names = [ 'rukky', 'ivor', 'ebrus', 'esther', 'tega', 'divine'];

 for(let i = 0; i < names.length;  i++ ) {
  if (names[i] == 'tega') {
    break;
  } else {
    console.log(names[i]);
  }
 }*/
  
/* let name = [ 'sam' , 'larry' , 'rhoda'];
 for( i = 0; i < name.length; i++){
  console.log(name[i])
 }*/

/* let i =  6
 do{console.log(i);
i++;
 } while( i < 6 );*/

  let password = ('rukky@pa');

  if(password.length >= 10 && password.includes('@'))
    {
    console.log("that's a pretty strong password")} 
    else if(password.length >= 8 || password.includes('@')) {
    console.log('this password is long enough')
  }
  else if(password.length < 8) 
    { console.log('incomplete password')}

  let user = false;
  if (!user) {
    console.log('You need to be logged in to continue');
  }