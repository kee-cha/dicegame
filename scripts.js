"use strict";
function rollDice(sides){
    return Math.ceil(Math.random() * sides)
}
let playerHp = 100;
let opponentHp = 100;
let turnCounter = 0

function whoGoFirst(choice){
    let user = rollDice(10);
    let cpu = rollDice(10);
    alert("Click ok to roll dice to see who goes first.")  ;
    alert("Your roll is " + user);
    alert("Computer roll is " + cpu);
    if(user>cpu){
        let decision = playerCommand(prompt("You go first. Choose attack, defend, heal, or cast."));
        let cpuTurn = opponentCommand(alert("Opponent goes next"));
        
        console.log(playerHp, opponentHp)
        return decision, cpuTurn;
    }
    else if(user<cpu){
        turnCounter ++;
        let cpuDecision = opponentCommand(alert("Opponent goes first"));
        let yourTurn = playerCommand(prompt("It's your turn. Choose attack, defend, heal, or cast."));
        
        console.log(playerHp, opponentHp)
        return cpuDecision, yourTurn;
    }
    else{
        alert("Invalid, try again.");
        return whoGoFirst();
    }
}

function attack(){
    let attackDmg = rollDice(6);
    return attackDmg;
}

function playerDefend(){
    let block = attack() - rollDice(12);
    if(block < 0){
        block = 0;
    }
    return block;
}

function opponentDefend(){
    let block = attack() - rollDice(12);
    if(block < 0){
        block = 0;
    }
    return block;
}

function playerHeal(){
    return rollDice(7);
}

function opponentHeal(){
    return rollDice(7);
}

function userCast(){
    return spellCast();
}

function opponentCast(){
    return spellCast();

}

function playerCommand(call){
    if(call === "attack"){
        opponentHp -= attack();
        alert("You attack delt " + attack() + " damage.");
        return opponentHp;
    }
    else if (call === "defend"){
        playerDefend()
        alert("You block the attack. You may or may not have taken damage.");
        return playerHp -= playerDefend();
    }
    else if (call === "heal"){
        if(playerHp === 100){
            playerCommand(prompt("You have full life. Choose either attack, defend, or cast."));
        }
        else{
            playerHeal()
            alert("Recovered " + playerHeal() + "HP");
            return playerHp += playerHeal();
        }
    }
    else{
        alert("Preparing to cast a spell");
        return opponentHp -= userCast();
    }
console.log(playerHp, opponentHp)
}

function opponentCommand(){
    return cpuDecide();
}

function cpuDecide(){
    switch(rollDice(4)){
        case 1:
            attack();
            alert("Opponent is attacking. You received " + attack() + " damage.");
            return playerHp -= attack();
            break;
        case 2:
            if(opponentHp === 0){
            }
            else{
                alert("Opponent is defending");
                return opponentHp -= opponentDefend();
            }
            break;
        case 3:
            if(opponentHp===100){
                return cpuDecide()
            }
            else{
                opponentHeal();
                alert("Opponent is healing. Recovered " + " health.");
                return opponentHp += opponentHeal();
            }
            break;
        case 4:
            alert("Opponent is preparing a spell");
            return playerHp -= spellCast();
            break;
    }
}

function spellCast(magic){
    let splDmg = rollDice(8);
    switch(splDmg){
        case 1:
            magic =  25;
            alert("Uses 'Firestorm'");
            return magic
            break;
        case 2:
            magic = 75;
            alert("Uses 'Death'");
            return magic;
            break;
        case 3:
            magic = 30;
            alert("Uses 'Tsunami'");
            return magic;
            break;
        case 4:
            magic = 15;
            alert("Uses 'Ice-Bullets'");
            return magic;
            break;
        case 5:
            magic = 20;
            alert("Uses 'Wind Blade'");
            return magic;
            break;
        case 6:
            magic = 0
            alert("Sorry, the spell failed");
            return magic
            break;
        case 7:
            magic = 0
            alert("Sorry, the spell failed");
            return magic
            break;
        case 8:
            magic = 0
            alert("Sorry, the spell failed");
            return magic
            break;
    }
}

function turnOrder(){
    if(turnCounter == 0){
        playerCommand(prompt("It is your turn. Would you like to attack, defend, heal, or cast?"))
        opponentCommand(cpuDecide(alert("It is now computer's turn")))
        console.log(playerHp, opponentHp)
        
    }

    else if( turnCounter == 1){
        turnCounter = 0
        alert("It is computer's turn")
        opponentCommand(cpuDecide())
        playerCommand(prompt("It's your turn.  Would you like to attack, defend, heal, or cast?"))
        turnCounter ++
        console.log(playerHp, opponentHp)
    } 
}

function gameBattle(){
    alert("Your beginning health is " + playerHp + " lifepoints.");
    alert("Opponent's begginning health is " + opponentHp + " lifepoints.")
    whoGoFirst()
    while(opponentHp > 0 && playerHp > 0){
        turnOrder()
        if( opponentHp <= 0 || playerHp <= 0){
            alert("Chance to revive.")
            survive()
        }
        else{
        }
    }
}
gameBattle()

function survive(){
    if(rollDice(7) === 7){
        playerHp += 30
        opponentHp += 30;
        alert("Battle continues. Now FIGHT!!")
        return playerHp, opponentHp
        
    }
    else{
        console.log("GAME OVER!!!")
    }console.log(playerHp, opponentHp)
}

