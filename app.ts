// 1. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите её на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2. Выполните задание с помощью логических операторов.

function check(a: number) : number {
  if (a === 0 || a === 2) return a + 7;
  else return a / 10; 
  }
  console.log("задание 1: " + check(0));

  console.log("------------------------");
// v2
/*function check(a: number) : void {
const res: number = (a === 0 || a === 2) ? (a + 7) : (a / 10);
console.log(res);
}
check(2);*/

//  2. Если переменная a равна нулю, то выведите в консоль 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при трёх разных значениях a. Выполните задание с помощью логических операторов и с помощью if.

// v1
function checkV1(a: number): string {
if (a === 0) return "Верно";
else return "Неверно"; 
}
console.log("задание 2, V1: " + checkV1(0));
console.log("------------------------");
// v2
function checkV2(a: number) : void {
let res = (a === 0) ? "Верно" : "Неверно"; 
console.log("задание 2, V2: " + res);
}
checkV2(3);
console.log("------------------------");

//  3. Переменная lang может принимать 2 значения: 'ru' 'en' . Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке, а если имеет значение 'en', то на английском. Решите задачу через if и через switch-case.

// v1 через if
let arrRu: string[] = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
let arrEn: string[] = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

function checkLangV1(lang: string): string[] | string {
  let arr1: string[] | string;
  if (lang == "ru") return arr1 = [...arrRu];
  if (lang == "en") return arr1 = [...arrEn];
  else return arr1 = "Неизвестный язык";
}
console.log("задание 3, V1: " + checkLangV1("en"));
console.log("------------------------");

// v2 через switch-case
let lang: string = "ru";
let arr2: string[] | string;

switch(lang) {
  case "ru": {
    arr2 = [...arrRu];
    break;
  }
  case "en": {
    arr2 = [...arrEn];
    break;
  }
  default: {
    arr2 = "Неизвестный язык";
    break;
  }
}
console.log("задание 3, V2: " + arr2);
console.log("------------------------");

// v3
// function checkLang(lang: string): void {
//   let arr3: string[] | string;
//   arr3 = (lang == "ru") ? [...arrRu] : (lang == "en") ? [...arrEn] : "Неизвестный язык";
//   console.log(arr3);
//   }
// checkLang("en");

//  4. С помощью логических ветвлений рассчитайте, какую сумму работник должен перечислить на налог и какую сумму он получит на руки, если налоги начисляются таким образом:
/*Зарплата до 6000 включительно — 10%;
Зарплата до 10 000 включительно — 15%;
Зарплата до 15 000 включительно — 17.5%;
Зарплата свыше 15 000 — 20%.*/

function calc(wage: number) {
  const ndfl: number = (wage <= 6000) ? (wage * 10) / 100 : (wage <= 10000) ? (wage * 15) / 100 : (wage <= 15000) ? (wage * 17.5) / 100 : (wage * 20) / 100;
  const income: number = wage - ndfl;
  console.log("задание 4: " + `Работник получит на руки ${income} руб., и заплатит налог в размере ${ndfl} руб.`);
}
calc(15000);
console.log("------------------------");

//  5. Выведите столбец чисел от 1 до 50 с помощью цикла.
console.log("задание 5:");
for(let i: number = 1; i <= 50; i++) {
  console.log(i);
}
console.log("------------------------");

//  6. Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for выведите все числа в столбец вместе с текстом ‘Результат: ’.
console.log("задание 6:");
let arr: number[] = [2, 3, 4, 5];

for (let i : number = 0; i < arr.length; i++) {
  console.log("Результат: " + arr[i]);
}
console.log("------------------------");

/*arr.forEach(i => console.log("Результат: " + i));*/


//  7. У нас есть объект
/*let obj = {
	'кот': 'мяу',
	'собака': 'гав',
	'корова': 'муу',
};*/
//С помощью цикла for-in выведите на экран строки такого формата: 'кот говорит мяу'.
console.log("задание 7:");
let obj: any = {
	кот: 'мяу',
	собака: 'гав',
	корова: 'муу',
};

for(let item in obj) {
  console.log(item + " говорит " + obj[item]);
}

