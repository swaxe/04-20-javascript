// John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.

let vardas = 'John';
let pavarde = 'Doe';
let amzius = 25;
let asmensKodas = 37878787878;
let gyvenamasisMiestas = 'Kaunas';

let asmensInformacija = vardas + ' ' + pavarde + ' (amzius ' + amzius + ' m.), asmens kodas: ' + asmensKodas + ', gyvenamasis miestas: ' + gyvenamasisMiestas + ".";


console.log(vardas + ' ' + pavarde + ' (amzius ' + amzius + ' m.), asmens kodas: ' + asmensKodas + ', gyvenamasis miestas: ' + gyvenamasisMiestas + ".");

console.log(vardas + " " + pavarde + " (amzius " + amzius + " m.), asmens kodas: " + asmensKodas + ", gyvenamasis miestas: " + gyvenamasisMiestas + ".");

console.log(vardas + ` ` + pavarde + ` (amzius ` + amzius + ` m.), asmens kodas: ` + asmensKodas + `, gyvenamasis miestas: ` + gyvenamasisMiestas + `.`);

console.log(`${vardas} ${pavarde} (amžius ${amzius} m.), asmens kodas: ${asmensKodas}, gyvenamasis miestas: ${gyvenamasisMiestas}.`)



console.log (asmensInformacija);


// John said: "Good morning".

let morning = '"John said: "Good morning"."';
console.log(morning)


// That's my car.

let symbol = "'"
let symbol2 = '"'
let symbol3 = '`'
let symbol4 = "\\"

console.log(`That${symbol}s my car.`)

// John said: "That's my car".

console.log(`John said: ${symbol2}That${symbol}s my car.${symbol2}`)

// John `said`: "That's my car".

console.log(`John ${symbol3}said${symbol3}: "That's my car".`)

// John `said`: "That's \my\ car".

console.log(`John ${symbol3}said${symbol3}: "That's ${symbol4}my${symbol4} car".`)

console.log(`John \`said\`: "That's \\my\\ car".`)

// John \`said\`: "That's my car".

console.log(`John \\\`said\\\`: "That's my car".`)
console.log('John \\`said\\`: "That\'s my car".')
console.log("John \\`said\\`: \"That's my car\".")



let personAge = 15.1;
console.log(personAge)
if(personAge < 16){
    console.log('negalima eiti')
}else if(personAge >= 18){
    console.log('galima eiti')
}else {
    console.log('galima eiti su tevu sutikimu')
}
