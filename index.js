const names = ["Guadalupe,", "Ollie,", "Aki,"];

function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push("Thank you, " + names[i] + ", for the wonderful " + event + " gift!")
    }
    return messages;
}


// function countDownOld() {
//     let countDown = 10;
//     for (let i = 0; i <= 10; i++){
//         console.log(countDown--);
//     }
// }

function countDown(count) {
    for (let i = count; i >= 0; i--){
        console.log(i);
    }
}
