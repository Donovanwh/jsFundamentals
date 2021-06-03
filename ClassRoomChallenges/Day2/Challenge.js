//Bronze
let myName = "Taylor";
let friend = "Tony";
console.log(myName.length);
console.log(friend.length);
//Silver
if(myName.length > friend.length) {
    console.log(`${myName}'s name is longer than ${friend}'s name.`)
} else {
    console.log(`${friend}'s name is longer than ${myName}'s name.`)
}
//Gold
let myName = "Jon";
let friend = "Ron";
if (myName.length > friend.length) {
    console.log(`My name is longer than ${friend}'s by ${myName.length - friend.length} letters`)
} else if (myName.length < friend.length){
    console.log(`${friend}'s name is longer than mine by ${friend.length - myName.length}`)
} else {
    console.log('Our names are the same length.')
}
//Platinum
let myName = "Taylor";
let friend = "Tony";
let nameDebate = (myName.length > friend.length) ? (`${myName} is bigger by ${myName.length - friend.length} letters`) : (friend.length > myName.length) ? (`${friend} is bigger by ${friend.length - myName.length} letters`) 
: ("Our names are the same length")
console.log(nameDebate);







