// let str = "lorem ipsum dolor sit ipsum amet . +998989832"

// console.log (str.length);
// console.log (str.charAt(4)) haga turganini korsatadi rd nechinchi qator
// console.log (str.charCodeAt(23)) aski table
// console.log (str.concat("Eshmamat", "toshmamat")) plus belgisidaqa ishlidi
// console.log (str.includes("j")) yozvdi ichida harf bomr yoki yoq ni tekshiradi 
// console.log (str.lastIndexOf ("e")) harf nechinchi qatordagini boshidan korsatadi
// console.log (str.padEnd(10, "0"))  tarordi toldirish
// console.log (str.padStart(10, "0"))
// console.log(str.repeat(3)) uch marta yozib berAD
// console.log (str.replace(" ", " " ))
// console.log (str.replaceAll (" ", " ",))\
// console,log (str.search(/\+998*/));
// console.log (str.slice(12))
// console.timeLog (str.split(" "))
// console.log (str.startsWith ("lorem")) bormi yoqmi 
// console.log (str.toLowerCase())
// console.log (str.toLowerCase())
// console.log (str.trim())
// console.log (str.trimStart())
// console.log (str.trimEnd()) 



//array metods

// let fruits = ["apple", "Lme", "Banana", "Chery", "Strawbery", "Water melon",]

// console.log (fruits.length)
// console.loog (fruits.concat(["Pear", "Lime", ], ["strawbery", "WAter melon", ["Pineple"]]);)
// console.log (fruits.flat(2))
// console.log (fruits.includes("apple"))
// console.log (fruits.indexOf(Apple))
// console.log(fruits.join(".")) //ozizdan qosjhib berad
// console.log (fruits.reverse())
// console.log (fruits.slice(1,  3))
// console.log ("fruits".split(" ").reverse().join (""))
// console.log (fruits.sort().reverse())

// fruits.push("strawbery")
// fruits.unshift ("Strawbery")
// fruits.pop()
// fruits.shift()
// fruits.splice(2, 0, "pear" "Pineple")
// fruits.splice(fruits.length, 0, 0, "pear"); //push
// fruits.splice(0, 0, "pear"); //unishift
// fruits.splice(fruits.length -1, 1); // pop
// fruits.splice(0, 1); //shift

// console.log (fruits)

//DATE


var ism = prompt("Ismingizni kiriting:");

var tugilganKun = prompt("Tug'ilgan kuningizni kiriting (sana):");

var yosh = prompt("Yoshingizni kiriting:");

var soat = prompt("Hozirda soat necha bo'ldi (00-23):");

var minut = prompt("Hozirda minutlar necha bo'ldi (00-59):");

var joriyVaqt = new Date();

var tugilganKunSana = new Date(tugilganKun);


var foydalanuvchiYosh = parseInt(yosh);


var foydalanuvchiSoat = parseInt(soat);
var foydalanuvchiMinut = parseInt(minut);


var millisecondsInDay = 24 * 60 * 60 * 1000;
var joriyKun = joriyVaqt.getTime() / millisecondsInDay;
var tugilganKunMiliSekund = tugilganKunSana.getTime();
var tugilganKunMiliSekundKundagiMinutlar = tugilganKunMiliSekund / millisecondsInDay;

var yosh = joriyVaqt.getFullYear() - tugilganKunSana.getFullYear();

console.log("Assalomu alaykum hurmatli, " + ism + "!");
console.log("Siz " + yosh + " yil " + (joriyKun - tugilganKunMiliSekundKundagiMinutlar) + " kuni " + (foydalanuvchiSoat - joriyVaqt.getHours()) + " soat " + (foydalanuvchiMinut - joriyVaqt.getMinutes()) + " minutdan beri yashaysiz.");
