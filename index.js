// Code your solution in this file!
function distanceFromHqInBlocks(numberOfBlocks){
 if(numberOfBlocks > 42){
    return numberOfBlocks - 42;
 }else{
    return 42 - numberOfBlocks;
 }
}

function distanceFromHqInFeet(numberOfBlocks){
    return distanceFromHqInBlocks(numberOfBlocks) * 264;
}

function distanceTravelledInFeet(start,destination){
    if(start<destination){
        return (destination - start) * 264;
    }else{
        return (start - destination)*264;
    }
}

function calculatesFarePrice(start,destination){
    const distance = distanceTravelledInFeet(start,destination);

    if(distance<=400){
        return 0;
    }else if(400 < distance && distance<2000){
        return 0.02 * (distance-400);
    }else if (2000 < distance && distance < 2500){
        return 25;
    }else {
        return 'cannot travel that far'
    }
}