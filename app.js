// 1. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите её на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2. Выполните задание с помощью логических операторов.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function check(a) {
    if (a === 0 || a === 2)
        return a + 7;
    else
        return a / 10;
}
console.log("задание 1: " + check(0));
console.log("------------------------");
// v2
/*function check(a: number) : void {
let res: number = (a === 0 || a === 2) ? (a + 7) : (a / 10);
console.log(res);
}
check(2);*/
//  2. Если переменная a равна нулю, то выведите в консоль 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при трёх разных значениях a. Выполните задание с помощью логических операторов и с помощью if.
// v1
function checkV1(a) {
    if (a === 0)
        return "Верно";
    else
        return "Неверно";
}
console.log("задание 2, V1: " + checkV1(0));
console.log("------------------------");
// v2
function checkV2(a) {
    var res = (a === 0) ? "Верно" : "Неверно";
    console.log("задание 2, V2: " + res);
}
checkV2(3);
console.log("------------------------");
//  3. Переменная lang может принимать 2 значения: 'ru' 'en' . Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке, а если имеет значение 'en', то на английском. Решите задачу через if и через switch-case.
// v1 через if
var arrRu = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
var arrEn = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
function checkLangV1(lang) {
    var arr1;
    if (lang == "ru")
        return arr1 = __spreadArray([], arrRu, true);
    if (lang == "en")
        return arr1 = __spreadArray([], arrEn, true);
    else
        return arr1 = "Неизвестный язык";
}
console.log("задание 3, V1: " + checkLangV1("en"));
console.log("------------------------");
// v2 через switch-case
var lang = "ru";
var arr2;
switch (lang) {
    case "ru": {
        arr2 = __spreadArray([], arrRu, true);
        break;
    }
    case "en": {
        arr2 = __spreadArray([], arrEn, true);
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
function calc(wage) {
    var ndfl = (wage <= 6000) ? (wage * 10) / 100 : (wage <= 10000) ? (wage * 15) / 100 : (wage <= 15000) ? (wage * 17.5) / 100 : (wage * 20) / 100;
    var income = wage - ndfl;
    console.log("задание 4: " + "\u0420\u0430\u0431\u043E\u0442\u043D\u0438\u043A \u043F\u043E\u043B\u0443\u0447\u0438\u0442 \u043D\u0430 \u0440\u0443\u043A\u0438 ".concat(income, " \u0440\u0443\u0431., \u0438 \u0437\u0430\u043F\u043B\u0430\u0442\u0438\u0442 \u043D\u0430\u043B\u043E\u0433 \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 ").concat(ndfl, " \u0440\u0443\u0431."));
}
calc(15000);
console.log("------------------------");
//  5. Выведите столбец чисел от 1 до 50 с помощью цикла.
console.log("задание 5:");
for (var i = 1; i <= 50; i++) {
    console.log(i);
}
console.log("------------------------");
//  6. Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for выведите все числа в столбец вместе с текстом ‘Результат: ’.
console.log("задание 6:");
var arr = [2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
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
var obj = {
    кот: 'мяу',
    собака: 'гав',
    корова: 'муу'
};
for (var item in obj) {
    console.log(item + " говорит " + obj[item]);
}
