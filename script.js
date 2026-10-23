let submit = document.getElementById("submit");
let box = document.getElementById("main");


window.onload = () => {
    submit.addEventListener("click", myLineUp);
}

function myLineUp() {
    const status = document.querySelector("input[name=status]:checked").value;
    const gameDate = document.querySelector('#date').value;
    let checks = document.querySelectorAll('input[name="players"]:checked'); // grabs all node values
    let players= []
    for (let i = 0; i < checks.length; i++) { players.push(checks[i].value); } //changes the nodes into values
    let myStr = "Status: " + status + "\nGame Date: " + gameDate + "\nPlayers: " + players;
    console.log(myStr);
    box.innerHTML = "<h1>Your Starting Lineup:</h1><p>" + myStr.replaceAll("\n", "<br>") + "</p>"
}
