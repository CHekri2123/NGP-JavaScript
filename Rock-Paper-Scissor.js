alert("Hi, I am judge, please register your names, for playing the game");
let result;
let userName1 = prompt("Enter first user name: ");
let userName2 = prompt("Enter second user name: ");
console.log(userName1);
console.log(userName2);
let choice = confirm("Are you ready to play?");
if(choice == true){

    let game = rockPaperScissor();
    if(game === "draw"){
        alert("Ohh, it's a draw!");
        alert("Restarting!!");
        rockPaperScissor();
    }
    else if (game === userName1) {
        alert("Congratulations, "+userName1 + " you won");
    }
    else {
        alert("Congratulations, "+ userName2 + " you won");
    }
}
else {
    alert("We will play next time, BYE!!!");
}
function rockPaperScissor() {
    alert("Ok, Enter \"r\" for rock, \"p\" for paper and \"s\" for scissor ");
    let user1Choice = prompt(userName1 + ", It's your turn, give your input :");
    let user2Choice = prompt(userName2 + ", It's your turn, give your input :");
    if (user1Choice === user2Choice) {
        result = "draw"
    }
    if(user1Choice === 'r' && user2Choice === 's') {
        result = userName1
    }
    if(user1Choice === 's' && user2Choice === 'p'){
        result = userName1;
    }
    if(user1Choice === 'p' && user2Choice === 'r'){
        result = userName1;
    }
    if(user1Choice === 's' && user2Choice === 'r'){
        result = userName2;
    }
    if(user1Choice === 'p' && user2Choice === 's'){
        result = userName2;
    }
    if(user1Choice === 'r' && user2Choice === 'p'){
        result = userName2;
    }
    return result;
}