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
//
//
//
//
//
//8kata https://www.codewars.com/kata/58d248c7012397a81800005c/train/javascript
//
// var cubeChecker = function (volume, side) {
//   if (volume <= 0 || side <= 0) {
//     return false;
//   } else if (volume === Math.pow(side, 3)) {
//     return true;
//   } else if (volume <= 0) {
//     return false;
//   } else return false;
// };
// console.log(cubeChecker(-8, -2));
//
//
//
//
//
//
//7 kyu https://www.codewars.com/kata/which-color-is-the-brightest
// function brightest(colors) {
//   let thebrightestintheworld = 0;
//   let thecolor = "";
//   let match = 0;
//   for (let i = 0; i <= colors.length - 1; i++) {
//     let newArray = colors.map((e) => e.toUpperCase());

//     let r = newArray[i].slice(1, 3);
//     let g = newArray[i].slice(3, 5);
//     let b = newArray[i].slice(5, 7);

//     let brigh = Math.max(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16));
//     debugger;
//     if (brigh === thebrightestintheworld) {
//       if (match === 1) {
//         thebrightestintheworld = brigh;
//         thecolor = colors[i];
//         return;
//       }
//       match++;
//     } else if (brigh > thebrightestintheworld) {
//       thebrightestintheworld = brigh;
//       thecolor = colors[i];
//     }
//   }
//   return thecolor;
// }
//
// console.log(brightest([`#00FF00`, `#FFFF00`]));
//
//
//
//
//
// 7kata https://www.codewars.com/kata/disemvowel-trolls
