/**
 * const,letno変数宣言 
 */
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// //varは再宣言可能
// var val1 = "var変数は";
// console.log(val1);

// let val2 = 'let変数';
// console.log(val2);
// //letは上書き可能
// //letは再宣言不可能
// let val2 = 'let変数を再宣言';
// console.log(val2);

//constは上書きと再宣言が不可能
//constで定義したobjectはプロパティの変更が可能
// const val4 = {
//   name:"じゃけえ",
//   age:24,
// }
// val4.name = "jak";
// console.log(val4)

//constで定義した配列はプロパティの変更が可能
// const val5 = ['dog','cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// const name = "じゃけあ";
// const age = 28;

// //テンプレート文字列を用いると
// const message2 = `私の名前は${name}です年齢は${age}です。`;
// console.log(message2);

// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));

// //　アロー関数
// const func2 = (str) => str;

// console.log(func2("func2です"));

// const func3 = (num1, num2) =>  num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "hatake",
//   age:28,
// };
// const {name, age} = myProfile;
// const message1 = `名前は${name}です。年齢は${age}です`;
// console.log(message1);

// const myProfile = ['じゃけえ', 28];
// const message3 = `名前は${myProfile[0]}です年齢は${myProfile[1]}歳です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です年齢は${age}歳です`;
// console.log(message4);