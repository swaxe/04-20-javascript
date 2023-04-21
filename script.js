let password = "asgsssssaasss";
let trPassword = password.trim();
let length = trPassword.length;
console.log(length)
if (trPassword.includes("#")) {
    console.log('turi #')
    if (length < 16) {
        console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.')
    } else if (length < 21) {
        console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
    } else {
        console.log('Slaptažodis tinkamas')
    }
} else {
    console.log('neturi #')
}

