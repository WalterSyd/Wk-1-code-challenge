let speedLimit = prompt('input the speed');
function speedlimit(speed){
    if(speed <=70){
        console.log("Okay");
   }else if(speed > 70){
    let excessSpeed = (speed - 70);
    let points = (excessSpeed - excessSpeed%5)/5 ; 
    if(points <= 12){
        console.log(points);
    }else{
        console.log("License Suspended");
    }
    }
}
   
speedlimit(130);
    
    