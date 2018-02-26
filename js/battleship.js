$(function(){
    
    var battleShip = $('td');
    var hitPoints = 0;
    var ifHit = 0;
    var numberOfShips = 3;
    var locationShip1 = [0,1,2];
    var hitLocations = [];
    var emptyChecking = [];


    $(battleShip).click(function(){
        var hitLocation = $(this).attr("data-ship");
        hitLocations.push(hitLocation);
        

        alert(hitLocation);
        alert(hitLocations);

        
    });

    





});