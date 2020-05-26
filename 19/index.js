console.log("hello world!! in js document!");

/*
  0 准备环境

  1 定义一个变量，变量名用自己名字的拼音首字母缩写
  2 给这句话一个注释，注释自己的拼音全名
  3 给这个变量赋值，数值10

  4 输出这个变量*2以后的结果
  5 输出这个变量除以3以后的余数
  6 输出这个变量出于3以后的商
*/

// Bu Qiang
let bq;
// SuJun right
let sj;
let whoAmI;

bq = 10;

console.log(bq * 2);
console.log(bq % 3);
console.log(Math.floor(bq / 3)); 

/*
  7 再定义一个变量，用你身边同学的名字的拼音首字母缩写（注释一下是谁，zuo）
  8 给这个变量赋值字符串"20"

  9 输出两个变量相加后的结果
  10 比较这两个变量是否相等，输出结果，true 还是 false
*/

sj = "20";
console.log(bq + sj);

if (bq === sj) {
  console.log(true);
} else {
  // console.log(false);
  console.log("notEqual");
}

console.log(bq === sj ? true : false);

if (bq > sj){
  console.log(bq);
} else {
  console.log(sj);
}


whoAmI = '23';

// 判断分数，大于80优秀，大于等于60及格，小于60不及格。
let score = 55;

if (score >= 80) {
  console.log("优秀");
} else if (score >= 60) {
  console.log("及格");
} else {
  console.log("不及格");
}

if (score >=80) {
  console.log("优秀");
} else {
  if (score >=60 ) {
    console.log("及格");
  } else {
    console.log("不及格");
  }
}

switch (Math.floor(score/10)) {
  case 100:
  case 80: console.log("优秀");break;
  case 70:
  case 60: console.log("及格");break;
  default: console.log("不及格");
};

console.log('--------------');

// 定义一个数组 array
let arr = [];
// 一个叫Array的，已经实现的类，生成一个此类对应的对象
// let arr = new Array;

// 前五项赋值 1，2，3，4，5

[34, 123, 41324, 324], 2, ['a', 'b', 'c'], 4, 5, undefined, 'string'

arr = [1, 2, 3, 4, 5];
arr[2] = ['a', 'b', 'c'];
// arr[0]
// 第七项赋值一个字符串
arr[6] = 'string';
// arr[7] = 'abcde';
arr[0] = [34, 123, 41324, 324];

// 输出数组的第六项
console.log(arr[5]);

// 遍历数组（依次输出数组的每一项）
// 显然是要用循环来完成的
// 循环的三要素   1 循环控制变量的初值（循环从什么时候开始）
//               2 根据循环控制变量判断循环的继续或终止（条件，决定循环什么时候结束）
//               3 能让循环控制变量变化，且无限向满足循环终止条件靠拢
//  1 为什么用count，i，j, k
//  2 为什么有let
console.log(arr.length)
console.log('--------------');

for (let count = 0; count < arr.length; count++) {
  // console.log(typeof arr[count]);
  if (typeof arr[count] === 'object') {
    console.log('arr[' + count + '] 是数组');
    // 当判断出来，当前项是数组的时候，输出这个数组
    //[34, 123, 41324, 324]
    // console.log(arr[count]);
    for (let i = 0; i < arr[count].length; i++) {
      console.log(arr[count][i]);
    }
  }
  // console.log('arr[' + count + '] = ' + arr[count]);
};

// console.log('--------------');
// let count2 = 0
// while (count2 < arr.length) {
//   console.log(arr[count2]);
//   count2++;
// };

// console.log(typeof whoAmI);

console.log('----开始讨论函数-----');

// 先说函数的定义
// 这是一个最最基本的函数，无参数，也无返回值
function sayHi() {
  // 并不建议在函数内部写输出
  console.log('hi');
  // 应为函数是执行一系列任务的地方，建议把输出写在函数之外。

};
sayHi();

// 这是带返回值的函数（返回值就是执行的结果）
function sayHiv2() {
  return 'hello';
};
console.log(sayHiv2());

// 显然我要讨论带参数的函数了
// 带一个参数的函数
function foo(x) {
  return x + 1;
};

foo(1);
console.log(foo(3));
console.log(foo(100));
console.log(foo('a'));


// 相加
function add(x, y) {
  return x + y;
};

// 比大小
function max(x, y) {
  return x > y ? x : y;
};


// function max2(x, y){
//   if (x > y){
//     return x;
//   }
//   return y;
// }

console.log(max(110, 30));
console.log(add(2, 3));

// 基于上述两个函数，请自己完成一段代码
// 若存在两组数据，每组数据2个值 （1， 5）    （7， 2）
// 先求出各组数据中较大的那个数
// 然后将较大的两个数相加



// console.log(add(max(10, 5), max(7, 2)));

// let x = max(10, 5);
// let y = max(12, 32);

// console.log(add(x, y));

// 写一个函数，求5个数的平均值
console.log('----继续讨论函数-----');

function average5(a, b, c, d, e){
  return (a + b + c + d + e) / 5;
}

console.log(average5(10, 20, 30, 44, 66));

// 写一个函数，求7个数的平均值
function average7(a, b, c, d, e, f, g){
  return (a + b + c + d + e + f + g) / 7;
}

console.log(average7(10, 20, 30, 44, 66, 99, 123));

// 那怎么写一个通用程序呢？
// 函数的思维：用已知的小功能，拼未知大功能

// 可以用数组的方式，来搜集数据

let scoreList = [10, 20, 30, 44, 66, 99, 123];

function arrSum(list) {
  // 先是数组求和 
  let sum = 0;
  for (let count = 0; count < list.length; count++ ) {
    sum = sum + list[count];
  }
  return sum;
}


function avg(list){
  return  arrSum(list) / list.length;
}

console.log(avg(scoreList));

// 本学期，必须会的关于函数的二三事
// 1 如何定义
// function () {

// }

// 2.1 如何给参数, 小括号内的x，y即是参数
// function name(x, y) {
//  x + y
// }

// 2.2 如何传参？ 
// 调用函数时发生传参
// name(2, 3);

// 3 函数的返回值，及利用
// function name() {
//   ...
//   return result;
// }

// 调用函数即利用返回值
// let a = name();
// console.log(name());

//            形参
function swap(x, y) {
  // 5  10
  let temp;
  temp = x;
  x = y;
  y = temp;

  console.log(x)  // 10
  console.log(y)  // 5
}

let x = 5;
let y = 10;
swap(x, y); // 实参
console.log(x) // 5
console.log(y) //10
