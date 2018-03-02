$(function(){

    var gameBoard = $("td");
    var shipLocation1 = [];
    var shipLocation2 = [];
    var shipLocation3 = [];
    var damageShip1 = 0;
    var damageShip2 = 0;
    var damageShip3 = 0;
    var textAlert = $("#showMessage");
    var textTorpedos = $("#torpedos");
    var hitCount = 0;
    var torpedoHitLocations = [];
    var torpedoLeft = 12;
    var shipLocation4 = [];
    var shipLocation5 = [];
    var shipLocation6 = [];
    var damageShipPosition1 = [];
    var damageShipPosition2 = [];
    var damageShipPosition3 = [];
    var winCond = false;
 
    generateNumberArray(shipLocation1, 6, 0 );
    generateNumberArray(shipLocation2, 14, 8);
    generateNumberArray(shipLocation3, 22, 16);

    function generateNumberArray(shiplocation, max, min){
        var generateRandom = Math.floor(Math.random() * (max-min+1) + min);
        if(generateRandom >= 0){
            shiplocation.push(generateRandom);
            for (let i = 0; i < 2; i++) {
                generateRandom++;
                shiplocation.push(generateRandom);
            }
        }
    }


    $(gameBoard).click(function(){
        var torpedoHitLocation = $(this).attr("data-ship");
        torpedoHitLocation = parseInt(torpedoHitLocation);
        torpedoHitLocations.push(torpedoHitLocation);
        torpedoLeft--; 
        
        $.fn.displayMessage("You missed");
        $.fn.displayTorpedosLeft(torpedoLeft);


        $.fn.chkShip(shipLocation1, "You Sank all the enemy ships", torpedoHitLocation, damageShipPosition1); 
        $.fn.chkShip(shipLocation2, "You Sank all the enemy ships", torpedoHitLocation, damageShipPosition2); 
        $.fn.chkShip(shipLocation3, "You Sank all the enemy ships", torpedoHitLocation, damageShipPosition3);



        $("[data-ship = " + torpedoHitLocation + "]").addClass("hit");
        //Condition for Losing the Game
        if(torpedoLeft == 0 && winCond == false){
            losemodal.style.display = "block";            
        }
    });

    $("#resetBtn").click(function(){
        location.reload();
    })
    // declaring functions
    $.fn.displayMessage = function(message){
        $(textAlert).html(message);
    }

    $.fn.displayHit = function(hitCount, message) {
        if(hitCount > 0){
            $(textAlert).html(message);
        }
    }

    $.fn.displayTorpedosLeft = function(torpedoLeft){
        $(textTorpedos).html("You got " + torpedoLeft + " cannon balls left");
    }

    //function for checking the ships
    $.fn.chkShip = function(ship, message, hitLocation, attackShip){
        for (let i = 0; i < ship.length; i++) {
            if(ship[i] == hitLocation){
                $(textAlert).html("You Hit the Enemy Ship !!!");
                attackShip.push(hitLocation);
                hitCount++;
                $("[data-ship = " + hitLocation + "]").addClass("miss");
                if(attackShip.length == 3){
                    $(textAlert).html("You destroyed an enemy ship ");
                }
                if(hitCount == 9){
                    winCond = true;
                    $(textAlert).html(message);
                    winmodal.style.display = "block";
                }
                break;
            }
        }
    }  
});

// Get the modal
var winmodal = document.getElementById('winModal');
var losemodal = document.getElementById('loseModal');
