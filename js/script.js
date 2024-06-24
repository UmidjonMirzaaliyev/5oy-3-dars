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
