// 1-masala
// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
// ];

// function getStudentNamesAndAges(students) {
//   return students.map((student) => {
//     return {
//       name: student.name,
//       age: student.age,
//     };
//   });
// }
// const studentNamesAndAges = getStudentNamesAndAges(students);
// console.log(studentNamesAndAges);

// 2-masala

// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
// ];
// function getHighestScore(students) {
//   return students.reduce((max, student) => {
//     return student.score > max ? student.score : max;
//   }, 0);
// }

// const highestScore = getHighestScore(students);
// console.log("Eng katta ball:", highestScore);

// 3-masala

// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Andrew", age: 23, score: 88, status: "active" },
// ];

// function filterStudentsByFirstLetter(students) {
//   return students.filter((student) => student.name.startsWith("A"));
// }

// const filteredStudents = filterStudentsByFirstLetter(students);
// console.log(
//   'Ismi "A" harfi bilan boshlanadigan o\'quvchilar:',
//   filteredStudents
// );

// 4-masala

// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
// ];

// function calculateAverageScore(students) {
//   const totalScore = students.reduce((sum, student) => sum + student.score, 0);
//   return totalScore / students.length;
// }

// const averageScore = calculateAverageScore(students);
// console.log("O'rtacha ball:", averageScore);

//5-masala

// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
// ];

// function calculateAverageScore(students) {
//   const totalScore = students.reduce((sum, student) => sum + student.score, 0);
//   return totalScore / students.length;
// }

// const averageScore = calculateAverageScore(students);
// console.log("O'rtacha ball:", averageScore);

// 6-masala

// const students = [
//   { name: "Alice", age: 20, score: 80, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Charlie", age: 23, score: 85, status: "active" },
// ];

// function findIndexOfFirstHighScoringStudent(students) {
//   return students.findIndex((student) => student.score > 85);
// }

// const index = findIndexOfFirstHighScoringStudent(students);
// console.log("Balli 85 dan katta bo'lgan birinchi o'quvchining indeksi:", index);

// 7-masala

// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Charlie", age: 23, score: 88, status: "active" },
// ];

// function filterActiveStudents(students) {
//   return students.filter((student) => student.status === "active");
// }

// const activeStudents = filterActiveStudents(students);
// console.log("Statusi \"active\" bo'lgan o'quvchilar:", activeStudents);

// 8-masala

// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Charlie", age: 17, score: 88, status: "active" },
// ];

// function areAllStudentsAbove18(students) {
//   return students.every((student) => student.age > 18);
// }

// const allAbove18 = areAllStudentsAbove18(students);
// console.log("Barcha o'quvchilar 18 yoshdan katta:", allAbove18);

// 9-masala

// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Charlie", age: 23, score: 88, status: "active" },
// ];

// function hasAnyStudentAbove90(students) {
//   return students.some((student) => student.score > 90);
// }

// const anyAbove90 = hasAnyStudentAbove90(students);
// console.log("Kamida bitta o'quvchi 90 dan yuqori ball olgan:", anyAbove90);

// 10-masala

// const students1 = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
// ];

// const students2 = [
//   { name: "Charlie", age: 23, score: 88, status: "active" },
//   { name: "David", age: 21, score: 90, status: "inactive" },
// ];

// function mergeStudentLists(list1, list2) {
//   return list1.concat(list2);
// }

// const mergedStudents = mergeStudentLists(students1, students2);
// console.log("Birlashtirilgan o'quvchilar ro'yxati:", mergedStudents);

// 11-masala

// function getUniqueStudents(students) {
//   const seenNames = new Set();
//   const uniqueStudents = [];

//   students.forEach((student) => {
//     if (!seenNames.has(student.name)) {
//       seenNames.add(student.name);
//       uniqueStudents.push(student);
//     }
//   });

//   return uniqueStudents;
// }

// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Alice", age: 23, score: 88, status: "active" },
// ];

// const uniqueStudents = getUniqueStudents(students);
// console.log(uniqueStudents);

// 12-masala

// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
// ];

// function capitalizeNames(students) {
//   return students.map((student) => {
//     return {
//       ...student,
//       name: student.name.toUpperCase(),
//     };
//   });
// }

// const updatedStudents = capitalizeNames(students);
// console.log(updatedStudents);

// 13-masala

// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Charlie", age: 23, score: 88, status: "active" },
// ];

// function getAllScores(students) {
//   return students.map((student) => student.score);
// }

// const scores = getAllScores(students);
// console.log(scores);

//14-masala

// const students = [{ name: "Alice", age: 20, score: 85, status: "active" }];

// function getFirstStudentKeys(students) {
//   if (students.length === 0) {
//     return [];
//   }
//   return Object.keys(students[0]);
// }

// const firstStudentKeys = getFirstStudentKeys(students);
// console.log(firstStudentKeys);

// 15-masala

// const student = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
// ];

// const newStudent = { name: "Charlie", age: 23, score: 88, status: "active" };

// function addStudent(student, newStudent) {
//   return [...student, newStudent];
// }

// console.log(addStudent(student, newStudent));

//16-masala

// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Charlie", age: 23, score: 88, status: "active" },
// ];

// function removaStudent(student, studentName) {
//   return student.filter((student) => student.name !== studentName);
// }

// console.log(removaStudent(students, "Bob"));

// 17-masala

// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Charlie", age: 19, score: 88, status: "active" },
// ];

// function checkAge(students){
//     return students.every(student => student.age >= 20)
// }

// console.log(checkAge(students));

// 18-masala

// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Charlie", age: 23, score: 88, status: "active" },
// ];

// function getStatuses(students) {
//   return students.map((student) => student.status);
// }

// console.log(getStatuses(students));

// 19-masala

// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
// ];

// const upDateStudent = { name: "Alice", age: 21, score: 90, status: "active" };

// function updateStudents(students, updateStudent) {
//   return students.map((student) => {
//     if (students.name === updateStudent.name) {
//       return updateStudent;
//     } else{
//         return student
//     }
//   });
// }

// console.log(upDateStudent(students, upDateStudent));

//20-masala

// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Charlie", age: 19, score: 88, status: "active" },
// ];

// function finYoungStudent(students) {
//   if (students.length === 0) {
//     return null;
//   }

//   let youngest = students[0];

//   for (let i = 1; i < students.length; i++) {
//     if (students[i].age < youngest.age) {
//       youngest = students[i];
//     }
//   }
//   return youngest;
// }

// console.log(finYoungStudent(students));

// 21-masala

// function customSubstring(str, startIndex, endIndex){
//     if(endIndex === undefined){
//         endIndex = str.length
//     }
//     return str.substring(startIndex, endIndex)
// }

// console.log(customSubstring("Dasturlash kurslari", 0, 5));

// 22-masala

// function swapCase(str) {
//   let swappedString = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char >= "a" && char <= "z") {
//       swappedString += char.toUpperCase();
//     } else if (char >= "A" && char <= "Z") {
//       swappedString += char.toLowerCase();
//     } else {
//       swappedString += char;
//     }
//   }
//   return swappedString;
// }

// const text = "Hello, WORLD!";
// const swappedText = swapCase(text);
// console.log(swappedText);

// 23-masala

// function splitWords(str) {
//   return str.split(" ");
// }

// const text = "Hello world from JavaScript";
// const wordsArray = splitWords(text);
// console.log(wordsArray);

//24-masala

// function joinWords(words) {
//   return words.join(", ");
// }

// const wordsArray = ["Hello", "world", "from", "JavaScript"];
// const joinedString = joinWords(wordsArray);
// console.log(joinedString);

// 25-masala

// function replaceAwithAtSymbol(str) {
//   return str.replace(/a/g, "@");
// }

// const text = "JavaScript";
// const replacedText = replaceAwithAtSymbol(text);
// console.log(replacedText);

// 26-masala

// function trimWhitespace(str) {
//   return str.trim();
// }

// const text = "   Hello, world!   ";
// const trimmedText = trimWhitespace(text);
// console.log(trimmedText);

//27-masala

// function getCharAtIndex(str, index) {
//   return str.charAt(index);
// }

// const text = "Hello, world!";
// const charAtIndex = getCharAtIndex(text, 7);
// console.log(charAtIndex);

// 28-masala

// function checkSubstring(str, substring) {
//   return str.includes(substring);
// }

// const text = "Hello, world!";
// const substringToCheck = "world";
// const isSubstringPresent = checkSubstring(text, substringToCheck);
// console.log(isSubstringPresent);

// 29-masala

// function checkStartsWith(str, startStr) {
//   return str.startsWith(startStr);
// }

// const text = "Hello, world!";
// const startString = "Hello";
// const startsWithCheck = checkStartsWith(text, startString);
// console.log(startsWithCheck);

// 30-masala

// function checkEndsWith(str, endStr) {
//   return str.endsWith(endStr);
// }

// const text = "Hello, world!";
// const endString = "world!";
// const endsWithCheck = checkEndsWith(text, endString);
// console.log(endsWithCheck);