// 6kata https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
// function likes(names) {
//   if (!names.length) {
//     return "no one likes this";
//   } else if (names.length === 1) {
//     return `${names[0]} likes this`;
//   } else if (names.length === 2) {
//     return `${names[0]} and ${names[1]} like this`;
//   } else if (names.length === 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   } else if (names.length >= 3) {
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//   }
// }
// console.log(likes(["Max", "John", "Mark"]));
//
//
//
//
//
//5kata https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
// function firstNonRepeatingLetter(s) {
//   if (s === "") return;
//   let count = s.toLowerCase().split("");

//   for (let i = 0; i <= s.length; i++) {
//     let counter = 0;
//     count.map((e) => e.includes(count[i]) && counter++);
//     if (counter === 1) {
//       return s[i];
//     }
//   }
// }
// console.log(firstNonRepeatingLetter("sTreSS"));
