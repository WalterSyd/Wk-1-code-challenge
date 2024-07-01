

function speedDetector() {
    let speed =(180);
    speed = Number(speed);

    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input. Please enter a valid speed.");
    }
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log(`Points: ${demeritPoints}`);
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}
console.log(speedDetector());
