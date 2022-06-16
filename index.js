

// function writeCards(surprise, event) {
//     let newSurprise = [];
//     for (let i = 0; i < surprise.length; i++) {
//         newSurprise.push(`Thank you, ${surprise[i]}, for the wonderful ${event} gift!`); 
//     }
//     console.log(newSurprise);
//     return newSurprise;
// }
// writeCards(surprise);

// function countDown() {
//     let countDown = 10;
//     while (countDown > -1) {
//         console.log(countDown--)
//     }
// }
// countDown;

function writeCards(name, event){
    let singleName = [];
    for (let i = 0; i < name.length; i++) {
        singleName.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
        return singleName;
        // console.log(`Thank you, ${singleName}, for the wonderful ${event} gift!`)         
}                                  

function countDown(number){
    while (number >= -1){
        console.log(number--)
    }
}