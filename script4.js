console.log('Kiek yra 2 + 2?');
console.log('Kiek yra 3 + 3?');
console.log('Kiek yra 4 + 4?');
let correctAnswer1 = 4;
let correctAnswer2 = 6;
let correctAnswer3 = 8;

let answer1 = 2;
let answer2 = 6;
let answer3 = 2;

console.log(answer1)
console.log(answer2)
console.log(answer3)

if (answer1 == correctAnswer1 && answer2 == correctAnswer2 && answer3 == correctAnswer3) {
    console.log('Patekai i kita lygi: trys atsakymai teisingi.')
} else if (answer1 == correctAnswer1 && answer2 == correctAnswer2) {
    console.log('Patekai i kita lygi: pirmi du buvo teisingi')
} else if (answer1 == correctAnswer1 && answer3 == correctAnswer3) {
    console.log('Patekai i kita lygi: pirmas ir trecias buvo teisingi')
} else if (answer2 == correctAnswer2 && answer3 == correctAnswer3) {
    console.log('Patekai i kita lygi: antras ir trecias buvo teisingi')
} else if (answer1 == correctAnswer1) {
    console.log('Nepatekai i kita lygi: antras ir trecias buvo neteisingi')
} else if (answer2 == correctAnswer2) {
    console.log('Nepatekai i kita lygi: pirmas ir trecias buvo neteisingi')
} else if (answer3 == correctAnswer3) {
    console.log('Nepatekai i kita lygi: pirmas ir antras buvo neteisingi')
} else {
    console.log('Nepatekai i kita lygi: trys atsakymai buvo neteisingi.')
}