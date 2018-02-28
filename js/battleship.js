$(function(){

    var gameBoard = $("td");
    var shipLocation1 = [1,2,3];
    var shipLocation2 = [6,7,8];
    var shipLocation3 = [10,11,12];
    var damageShip1 = 0;
    var damageShip2 = 0;
    var damageShip3 = 0;
    var textAlert = $("#showMessage");
    var hitCount = 0;
    var torpedoHitLocations = [];
    var torpedoLeft = 4;


    $(gameBoard).click(function(){
        var torpedoHitLocation = $(this).attr("data-ship");
        torpedoHitLocation = parseInt(torpedoHitLocation);
        torpedoLeft--; 
        var attackSucc = false;
        if(attackSucc == false){
            $.fn.displayMessage(attackSucc, "Does it Work tho?");
        }else{
            $.fn.displayHit(abc, "You hit the enemy ship!");
        }

        $.fn.chkShip(shipLocation1, "You Sank all the enemy ships", torpedoHitLocation, damageShip1); 
        $.fn.chkShip(shipLocation2, "You Sank all the enemy ships", torpedoHitLocation, damageShip2); 
        $.fn.chkShip(shipLocation3, "You Sank all the enemy ships", torpedoHitLocation, damageShip3);

        $("[data-ship = " + torpedoHitLocation + "]").addClass("miss");
        if(torpedoLeft == 0){
            alert("You lost the game !!!");
        }
    });

    $.fn.displayMessage = function(attackSucc, message){
        $(textAlert).html(message);
    }

    $.fn.displayHit = function(hitCount, message) {
        if(hitCount > 0){
            $(textAlert).html(message);
        }
    }

    $.fn.chkShip = function(ship, message, hitLocation, attackShip){
        for (let i = 0; i < ship.length; i++) {
            if(ship[i] == hitLocation){
                alert("You hit !!!");
                attackShip++;
                hitCount++;
                torpedoLeft++;
                $("[data-ship = " + hitLocation + "]").addClass("hit");
                if(hitCount == 9){
                    $(textAlert).html(message);
                    torpedoLeft += 4;
                }
                break;
            }
        }
    }  

});
