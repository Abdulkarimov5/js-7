/* const students = [
    { name: 'Алексей', score: 85 },
    { name: 'Мария', score: 92 },
    { name: 'Иван', score: 76 },
    { name: 'Ольга', score: 88 },
    { name: 'Дмитрий', score: 91 },
];

function getStudentsAboveAverage(students) {
    const totalScore = students.reduce((sum, student) => sum + student.score, 0);
    const averageScore = totalScore / students.length;

    const aboveAverageStudents = students
        .filter(student => student.score > averageScore)
        .map(student => student.name);

    return aboveAverageStudents;
}

const result = getStudentsAboveAverage(students);
console.log(result); */

/* function uniqueSortedArray(arr) {
    return arr
        .filter((value, index) => arr.indexOf(value) === index)
        .sort((a, b) => a - b);
}

const numbers = [3, 1, 2, 3, 4, 2, 5, 1];
const uniqueSortedNumbers = uniqueSortedArray(numbers);
console.log(uniqueSortedNumbers); */

/* function getWordsWithA(inputString) {
    return inputString
        .split(' ')
        .filter(word => word.toLowerCase().includes('а'))
        .map(word => word.toUpperCase());
}

const sentence = "Это простой пример строки с различными словами, содержащими букву А";
const result = getWordsWithA(sentence);
console.log(result); */

/* function filterAndJoinStrings(arr) {
    return arr
        .filter(str => str.length >= 3)
        .map(str => str)
        .join(' ');
}

const inputArray = ['hi', 'hello', 'to', 'world', 'js', 'function', 'code'];
const result = filterAndJoinStrings(inputArray);
console.log(result); */

/* function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    const result = {
        count: 0,
        indices: []
    };

    const characters = str.split('');

    characters.forEach((char, index) => {
        if (vowels.indexOf(char) !== -1) {
            result.count++;
            result.indices.push(index);
        }
    });

    return result;
}

const inputString = 'Hello, World!';
const result = countVowels(inputString);
console.log(result); */

/* function sortAndJoinNames(arr) {
    return arr
        .sort((a, b) => a.age - b.age)
        .map(person => person.name)
        .join(', ');
}

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

const result = sortAndJoinNames(people);
console.log(result); */