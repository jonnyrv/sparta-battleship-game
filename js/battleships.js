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
    // var generateRandom = Math.floor(Math.random() * 5);
    // console.log(generateRandom);
    // if(generateRandom >= 0){
    //     console.log("abc");
    //     shipLocation4.push(generateRandom);
    //     console.log(shipLocation4);
    //     for (let i = 0; i < 2; i++) {
    //         generateRandom++;
    //         console.log(generateRandom);
    //         shipLocation4.push(generateRandom);
    //         console.log(shipLocation4);
    //     }
    // }

    // var generateRandom = Math.floor(Math.random()*(13-5+1)+5);;
    // console.log(generateRandom);
    // if(generateRandom >= 0){
    //     console.log("abc");
    //     shipLocation5.push(generateRandom);
    //     console.log(shipLocation5);
    //     for (let i = 0; i < 2; i++) {
    //         generateRandom++;
    //         console.log(generateRandom);
    //         shipLocation5.push(generateRandom);
    //         console.log(shipLocation5);
    //     }
    // }


    function generateNumberArray(shiplocation, max, min){
        var generateRandom = Math.floor(Math.random() * (max-min+1) + min);
        if(generateRandom >= 0){
            shiplocation.push(generateRandom);
            for (let i = 0; i < 2; i++) {
                generateRandom++;
                shiplocation.push(generateRandom);
                console.log(shiplocation);
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
            // alert("You lost the game !!!");
            losemodal.style.display = "block";            
            
        }

  
    //      var index = jQuery.inArray(torpedoHitLocations, shipLocation1);
    //      alert(index);
    //      if(index >= 0){
    //          alert("HitBoi");
    //  }
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
                console.log("You hit !!!");
                $(textAlert).html("You Hit the Enemy Ship !!!");
                attackShip.push(hitLocation);
                console.log(attackShip);
                hitCount++;
                $("[data-ship = " + hitLocation + "]").addClass("miss");
                if(attackShip.length == 3){
                    console.log("You destroyed a ship !!!");
                    $(textAlert).html("You destroyed an enemy ship ");
                }
                if(hitCount == 9){
                    winCond = true;
                    $(textAlert).html(message);
                    winmodal.style.display = "block";
                }
                // var generateRandom = Math.floor(Math.random() * 13);
                // console.log(generateRandom);
                // if(generateRandom > 0){
                //     console.log("abc");
                //     var generateRandomList = [];
                //     generateRandomList.push(generateRandom);
                //     console.log(generateRandomList);
                //     for (let i = 0; i < 2; i++) {
                //         generateRandom++;
                //         generateRandomList.push(generateRandom);
                //         console.log(generateRandomList);
                //     }
                // }
                break;
            }
        }
    }  

 




    // $.fn.generateRandomShips = function(shipLocation){
    //     var generateRandom = Math.floor(Math.random() * 13);
    //     console.log(generateRandom);
    //     if(generateRandom > 0){
    //         console.log("abc");
    //         var shipLocation = [];
    //         shipLocation.push(generateRandom);
    //         console.log(shipLocation);
    //         for (let i = 0; i < 2; i++) {
    //             generateRandom++;
    //             shipLocation.push(generateRandom);
    //             console.log(shipLocation);
    //         }
    //     }
    // }


});






        // for (let i = 0; i < shipLocation.length; i++) {
        //     if(shipLocation[i] == torpedoHitLocation){
        //         alert("You hit the fmm");
        //     }
        // }


        // randomize number( randomize a number and then do a loop and increment it 2 times :D)


// Get the modal
var winmodal = document.getElementById('winModal');
var losemodal = document.getElementById('loseModal');
