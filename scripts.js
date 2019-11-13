"use strict";
function rollDice(sides){
    return Math.ceil(Math.random() * sides)
}

var oponentHp = 100;
var  userHp= 100;
var turn = 0
var health 



function yourLifePoints(){
    return alert("Your HP is " + userHp)  
}
yourLifePoints()

function cpuLifePoints(){
    return alert("Computer's HP is " + oponentHp)
}
cpuLifePoints()


function whoGoFirst(){
    let user = rollDice(10)
    let cpu = rollDice(10)    
    alert("Click ok to roll dice to see who goes first.")  
    alert("Your roll is " + user)
    alert("Computer roll is " + cpu)
    if(user > cpu){
        activePlayer(0)
        command(prompt("You go first. Would you like to attack, defend, heal, or cast?"))
        oponentHp = health
        activePlayer(1)
        command(cpuDecide(alert("It is now computer's turn")))
        userHp = health
        
    }
    else if( user < cpu){
        activePlayer(1)
        alert("Computer has first turn")
        command(cpuDecide())
        userHp=health
        activePlayer(0)
        command(prompt("It's your turn.  Would you like to attack, defend, heal, or cast?"))
        oponentHp=health
        turn ++
    } 
    else{
        alert("Please roll dice again")
        whoGoFirst()
    }
}
whoGoFirst()

function command(decide){
    
    switch(decide){
        case "attack":
            let dmg = rollDice(6)
            alert("Attack damage is " + dmg)
            health -= dmg
            break;
        case "defend":
            alert ("Defending")
            break;
        case "heal":
            let healing = rollDice(12)
            alert("Recovered " + healing + " HP.")
            health += healing
            break;
        case "cast":
            spellCast()
            break;
        default:
            command(prompt("Invalid, try again. Choose between attack, defend, or heal."))
            break;
    }
}

function cpuDecide(){
    switch(rollDice(4)){
        case 1:
            return "attack";
            break;
        case 2:
            return "defend";
            break;
        case 3:
            return "heal";
            break;
        case 4:
            return "cast";
            break;
    }
}

function spellCast(){
    let magic = rollDice(8);
    let splDmg= magic
    switch(splDmg){
        case 1:
            alert("Uses 'Firestorm'");
            break;
        case 2:
            alert("Uses 'Death'");
            break;
        case 3:
            alert("Uses 'Tsunami'");
            break;
        case 4:
            alert("Uses 'Ice-Bullets'");
            break;
        case 5:
            alert("Uses 'Wind Blade'");
            break;
        case 6:
            alert("Sorry, the spell failed");
            break;
        case 7:
            alert("Sorry, the spell failed");
            break;
        case 8:
            alert("Sorry, the spell failed");
            break;
    }
}

function turnOrder(){
    if(turn == 0){
        activePlayer(0)
        command(prompt("It is your turn. Would you like to attack, defend, heal, or cast?"))
        oponentHp = health
        activePlayer(1)
        command(cpuDecide(alert("It is now computer's turn")))
        userHp = health
    }
    else if( turn == 1){
        turn = 0
        activePlayer(1)
        alert("It is computer's turn")
        command(cpuDecide())
        userHp = health
        activePlayer(0)
        command(prompt("It's your turn.  Would you like to attack, defend, heal, or cast?"))
        oponentHp = health
        turn ++
    } 
}
turnOrder()

function activePlayer(player){
    if(player == 0 ){
        health = oponentHp
    }
    else{
        health = userHp
    }

}
console.log(oponentHp, userHp)