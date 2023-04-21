let age = prompt("Ivesti amziu:");
console.log(age)
if (age < 0) {
    console.log('įvestas amžius yra per mažas')
} else if (age > 120) {
    console.log('įvestas amžius yra per didelis')
} else if (isNaN(age)) {
    console.log('Netinkamai nurodytas amžius, amžius privalo būti skaičius.')
} else {
    if (age < 6) {
        console.log('į mokyklą neina')
    } else if (age < 7) {
        console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.')
    } else if (age < 10) {
        console.log('eina į pradinę klasę')
    } else if (age < 11) {
        console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.')
    } else if (age < 14) {
        console.log('eina į pagrindinę')
    } else if (age < 15) {
        console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.')
    } else if (age < 18) {
        console.log('eina į gimnaziją')
    } else if (age < 19) {
        console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.')
    } else {
        console.log('mokyklą baigė')
    }
}