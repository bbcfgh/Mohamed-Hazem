// 1 => 188 (1)
// let fileName = "Elzero.php";
// console.log(fileName.slice(0 , fileName.indexOf(".")))
// console.log(fileName.slice(fileName.indexOf(".") + 1 ))
// Elzero
// php



// 1 => 188 (2)
// function addEl(str) {
//     if(str === ""){
//       return `""`
//     }else if (str.slice(0 , 2) === "El"){
//       return str
//     }else {
//       return `El${str}`
//     }
// }
//   console.log(addEl("")); // ""
//   console.log(addEl("Elzero")); // Elzero
//   console.log(addEl("zero")); // Elzero



// 1 => 188 (3)
// let myString = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";
// console.log(myString.slice(0 , myString.indexOf("g@ ") + 1))
// Output Needed
// "Hello Elzero Web School @ We Love Programming"



// 1 => 188 (4)
// function checkRange(n1, n2, n3, n4, n5) {
//   if((n1 && n2 && n3) < n5 && (n1 && n2 && n3) > n4){
//     return `Yes All Numbers In Range`
//   }else{
//     return `Not All Numbers Is In Range`
//   }
// }
// console.log(checkRange(5, 10, 15, 5, 50)); // Yes All Numbers In Range
// console.log(checkRange(8, 4, 20, 2, 50)); // Yes All Numbers In Range
// console.log(checkRange(10, 15, 20, 5, 18)); // Not All Numbers Is In Range



// 1 => 188 (5)

// function replaceFirstWithLast(word) {
//   let start = word[0]
//   let sen = word.slice(1 , word.length - 1)
//   let last = word[word.length - 1]
//   return `${last}${sen}${start}`
// }
// console.log(replaceFirstWithLast("olzerE")); // Elzero
// console.log(replaceFirstWithLast("Hello")); // oellH



// 1 => 188 (6)
// function checkBiggestNum(word) {
//   let arret = word.split("").map(Number)
//   return Math.max(...arret)
// }
// console.log(checkBiggestNum("1500654")); // 6
// console.log(checkBiggestNum("8509507")); // 9



// 1 => 188 (7)
// let nums = [20, 100, 50, 10, 15, -20, 30];
//   let num1 = Math.max(...nums)
//   let num = nums.filter((ele) => {
//     return ele !== 100
//   })
//   let num2 = Math.max(...num)
// // Needed Output
// // [100, 50]
// console.log([num1 , num2])



// 1 => 188 (8) <<<<<###############################################>>>>>
// let nums = [60, 80, 85, 25, 96, 101, 30, 88, 15];
// let goal = 100;

// let result = nums[nums.length-1]

// let diffrent = Math.abs(goal - result)

// for(i=0; i<nums.length -1; i++){
//   let mindifferent = Math.abs(goal - nums[i])
//   if (mindifferent < diffrent){
//     result = nums[i]
//     diffrent = mindifferent
//   }
// }
// console.log(`Closest Number Is ${result}`)

// ==> Second Solution  <<<<<########>>>>>
// let num = nums[0]
// let diffrent = Math.abs(goal - num) 

// for(i=1; i<nums.length; i++){
//   let down = Math.abs(goal - nums[i])
//   if (down < diffrent){
//     num = nums[i]
//     diffrent = down
//   }
// }
// console.log(`Closest Number Is ${num}`)

// Closest Number Is 88



// 1 => 188 (9) =========================================> 
// function swapEveryTwoChars(word) {
//   let result = []
//   let result2 = []
//   let result3 = []
//   for(i=0; i<word.length; i+=2){
//     if(word[i] === word[i].toLocaleLowerCase()){
//       result.push(word[i].toLocaleUpperCase())
//     }else if (word[i] === word[i].toLocaleUpperCase()){
//       result.push(word[i].toLocaleLowerCase())
//     }
//   }
//   for(i=1; i<word.length; i+=2){
//     if(true ){
//       result2.push(word[i])
//     }
//   }
//   for(i=0; i<result.length; i++){
//     result3.push(`${result[i]}${result2[i]}`)
//   }
//   return result3.join("")
// }
// console.log(swapEveryTwoChars("elZeRo")); // Elzero
// console.log(swapEveryTwoChars("heLlO")); // Hello



// 1 => 188 (10)

// function elzeroRepeat(str , num){
//   let strrepeat = ""
//   for(i=1; i<=num; i++){
//     strrepeat += str
//   }
//   return strrepeat
// }
// console.log(elzeroRepeat("Elzero " , 3))

// second solution advansed

// String.prototype.elzeroRepeat = function (num){
//   let str = ""
//   for(i=0; i<num; i++){
//     str += this
//   }
//   return str
// }
// console.log("Elzero ".elzeroRepeat(5)); // Elzero Elzero Elzero



// 1 => 188 (11)

// let myMoney = 5301503206;
// let myresult = myMoney.toLocaleString()
// console.log(myresult)

// 5,301,503,206



// 1 => 188 (12)

// let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];
// let result = [];
// for(i=0; i<names.length; i++){
//   // console.log(names[i].toLocaleLowerCase()[0])
//   if(names[i].toLocaleLowerCase()[0] === names[i].toLocaleLowerCase()[names[i].length -1]){
//     result.push(names[i])
//   }
// }
// console.log(result); // ['Osso', 'Aola', 'Daad', 'Roor']



// 1 => 188 (13)

// let theName = "Elzero";
// console.log(`${theName[0]}${theName[theName.length - 1]}`)
// console.log(theName.slice(1 , theName.length -1))
// console.log(theName.slice(2 , theName.length -2))
// Line 1 => Eo
// Line 2 => lzer
// Line 3 => ze



// 1 => 188 (14)



















